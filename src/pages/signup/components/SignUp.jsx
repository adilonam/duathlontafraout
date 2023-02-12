
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';


export const Signup = (props)=> {
  const toast = useRef(null);

  const show = () => {
      toast.current.show({ severity: 'success', summary: 'Form Submitted' });
  };

  const formik = useFormik({
      initialValues: {
          value: ''
      },
      validate: (data) => {
          let errors = {};

          // if (!data.value) {
          //     errors.value = 'Name - Surname is required.';
          // }

          return errors;
      },
      onSubmit: (data) => {
          data && show(data);
          formik.resetForm();
      }
  });

  const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
      return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
  };


  const customInputText = (field)=>{
   
    return(
    <span className="p-float-label mt-4">
    <InputText
    id={field}
    name={field}
    value={formik.values[field]}
    onChange={(e) => {
        formik.setFieldValue(field, e.target.value);
    }}
    className={classNames({ 'p-invalid': isFormFieldInvalid(field) })}
    autoComplete = {field == "Email"? "username" : ""}
/>
  <label htmlFor="input_value">{field}</label>   </span>)
  }


    return (
      <>
          <div className="card flex justify-content-center">
            <h1 className="mt-2">S'inscrire :</h1>
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
               {customInputText("Prenom")}
               {customInputText("Nom")}
               {customInputText("Email")}
               <span className="p-float-label mt-4">
               <Password value={formik.values.password1} onChange={(e) => {
        formik.setFieldValue("password1", e.target.value)}}
    promptLabel="Mot de passe" weakLabel="Tres simple" mediumLabel="Moyen" strongLabel="Complexe" toggleMask autoComplete="new-password" />
      <label htmlFor="password">Mot de passe</label>
    </span>

    <span className="p-float-label mt-4">
               <Password value={formik.values.password2} onChange={(e) => {
        formik.setFieldValue("password2", e.target.value)}}
        feedback={false}   toggleMask autoComplete="new-password" />
      <label htmlFor="password">Mot de passe</label>
    </span>
            


                {getFormErrorMessage('value')}
                <Button type="submit" label="Submit" className="mt-2" />
            </form>
        </div>
        <Toast ref={toast} />
          </>
  
    )
  }
  
  
  