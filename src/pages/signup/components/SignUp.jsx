
import React, { useRef, useState } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';
import { UserService } from "../../../services/UserService";
import { useNavigate } from "react-router-dom";
import { Dropdown } from 'primereact/dropdown';
import { pays , tshirts, typeduathlons} from "../assets/Data";
import { Calendar } from 'primereact/calendar';

export const SignUp = (props) => {
  const toast = useRef(null);
  const userService = new UserService()
  const [loading, setLoading] = useState(false)
  const ToastLife = 4000
  const navigate = useNavigate()
  const submitData = (data) => {
    setLoading(true)
    userService.creat(data).then((userCredential) => {
      navigate('/');

    })
      .catch((error) => {
        const errorMessage = error.message;
        toast.current.show({ severity: 'error', summary: 'Erreur', detail: errorMessage.replace('Firebase:', ''), life: ToastLife });
      }).finally(() => {
        setLoading(false)
      });

  };



  const initValues = {
    prenom: '',
    nom: '',
    email: '',
    password1: '',
    password2: '',
    cin: '',
    ville:'',
    pays:'',
    datenaissance:'',
    tph:'',
    tshirt:'',
    typeduathlon:''
  }

  const formik = useFormik({
    initialValues: {...initValues},
    validate: (data) => {
      let errors = {};


      //check is empty
     Object.keys(initValues).forEach(element => {
        if (!data[element]) {
          errors[element] = `Ce champ est requis !`
        }
      });


      //check password
      if (data.password1 && data.password2 && (data.password1 != data.password2)) {
        let _errorPassword = `les mots de passe ne sont pas identiques !`
        errors['password1'] = _errorPassword
        errors['password2'] = _errorPassword
      }

      return errors;
    },
    onSubmit: (data) => {
      data && submitData(data);

    }
  });


  
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
        className={classNames({ 'p-invalid': isFormFieldInvalid(field), 'w-75': true })}
        autoComplete={field == "email" ? "username" : ""}
        type={field == "email" ? "email" : "text"}
      />
      <label htmlFor={name}>{label}</label>   </span>
      {getFormErrorMessage(field)}
    </>


    )
  }



  const customDropDown = (field, label, options, optionLabel = "name")=>{
    return(
      <>
    <Dropdown  className='mt-4 w-75' value={formik.values[field]} onChange={(e) =>  formik.setFieldValue(field, e.value)} options={options} optionLabel={optionLabel} placeholder={label} optionValue={optionLabel}/>

    <span className="d-block">
    {getFormErrorMessage(field)}
    </span>

      
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
              {customInputText("tph", "Telephone")}
              {customDropDown("tshirt", "T-shirt", tshirts)}
              {customDropDown("typeduathlon", "Type Duathlon", typeduathlons)}
            
          
            </div>

            <div className="col">
            {customDropDown("pays", "Pays", pays)}
              {customInputText("ville", "Ville")}
              {customInputText("cin", "C.I.N")}

              <Calendar value={formik.values.datenaissance} onChange={(e) =>  formik.setFieldValue("datenaissance", e.value)} showIcon  className="mt-4 w-75" placeholder="Date Naissance"/>
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
          <Button type="submit" label="Inscription" className="mt-2 mx-auto d-block p-button-success p-button-rounded" icon="pi pi-plus-circle" loading={loading} />
        </form>
      </div>
      <Toast ref={toast} />
    </div>

  )
}


