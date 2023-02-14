
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';
import { UserService } from "../../../services/UserService";
import { useNavigate } from "react-router-dom";


export const SignUp = (props) => {
  const toast = useRef(null);
  const userService = new UserService()

  const ToastLife = 4000
  const navigate = useNavigate()
  const submitData = (data) => {
    userService.creat(data).then((userCredential) => {
      navigate('/');

    })
      .catch((error) => {
        const errorMessage = error.message;
        toast.current.show({ severity: 'error', summary: 'Erreur', detail: errorMessage.replace('Firebase:', ''), life: ToastLife });
      });

  };

  const formik = useFormik({
    initialValues: {
      prenom: '',
      nom: '',
      email: '',
      password1: '',
      password2: '',
      cin: ''
    },
    validate: (data) => {
      let errors = {};


//check is empty
      ['prenom', 'nom', 'email', 'password1', 'password2', 'cin'].forEach(element => {
        if (!data[element]) {
          errors[element] = `Ce champ est requis !`
        }
      });


      //check password
      if(data.password1 && data.password2 && (data.password1 != data.password2 )){
       let _errorPassword= `les mots de passe ne sont pas identiques !`
       errors['password1'] = _errorPassword
       errors['password2'] = _errorPassword
      }

      return errors;
    },
    onSubmit: (data) => {
      data && submitData(data);

    }
  });

  const checkEmpty = (erros, fieldArray) => {


  }
  const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
  };


  const customInputText = (field, label) => {

    return (<> <span className="p-float-label mt-4">
      <InputText
        id={field}
        name={field}
        value={formik.values[field]}
        onChange={(e) => {
          formik.setFieldValue(field, e.target.value);
        }}
        className={classNames({ 'p-invalid': isFormFieldInvalid(field), 'w-75':true })}
        autoComplete={field == "email" ? "username" : ""}
        type={field == "email" ? "email" : "text"}
      />
      <label htmlFor="input_value">{label}</label>   </span>
      {getFormErrorMessage(field)}
    </>


    )
  }


  return (
    <div className="mt-2 container">
      <div className="card ps-3 pb-2 flex justify-content-center">
        <h1 className="mt-2">S'inscrire :</h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2 ">
          <div className="row">

      <div className="col">
{customInputText("prenom", "Prenom")}
          {customInputText("nom", "Nom")}
          {customInputText("email", "Email")}

      </div>

      <div className="col">
      {customInputText("cin", "C.I.N")}


<>
  <span className="p-float-label mt-4">
    <Password value={formik.values.password1} onChange={(e) => {
      formik.setFieldValue("password1", e.target.value)
    }}
    className='w-75 flex-column'
      promptLabel="Mot de passe" weakLabel="Tres simple" mediumLabel="Moyen" strongLabel="Complexe" toggleMask autoComplete="new-password" />
    <label htmlFor="password">Mot de passe</label>
  </span>
  {getFormErrorMessage('password1')}</>



<>
  <span className="p-float-label mt-4">
    <Password value={formik.values.password2} onChange={(e) => {
      formik.setFieldValue("password2", e.target.value)
    }}
    className='w-75 flex-column'
      feedback={false} toggleMask autoComplete="new-password" />
    <label htmlFor="password">Répéter le mot de passe</label>
  </span>
  {getFormErrorMessage('password2')}
</>


      </div>
          
        
          </div>
          <Button type="submit" label="Inscription" className="mt-2 mx-auto d-block p-button-success p-button-rounded" icon="pi pi-plus-circle" />
        </form>
      </div>
      <Toast ref={toast} />
    </div>

  )
}


