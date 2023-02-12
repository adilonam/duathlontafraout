
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';
import { UserService } from "../../../services/UserService";
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';

export const SignIn = (props) => {



  const toast = useRef(null);
  const userService = new UserService()

  const ToastLife = 4000

  const submitData = (data) => {
    userService.creat(data).then((userCredential) => {

      toast.current.show({ severity: 'success', summary: 'Utilisateur créé avec succès', life: ToastLife });
    })
      .catch((error) => {
        const errorMessage = error.message;
        toast.current.show({ severity: 'error', summary: 'Erreur', detail: errorMessage, life: ToastLife });
      });

  };

  

 


  return (
    <>
    <div className="row">
        <div className="col">
        <div className="card">
            <div className="flex row md:flex-row">
                <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5  col  ms-4">
                    <div className="row flex align-items-center gap-2">
                        <label htmlFor="username">email</label>
                        <InputText id="username" type="text" className="w-full" />
                    </div>
                    <div className="row flex align-items-center gap-2">
                        <label htmlFor="password">Password</label>
                        <InputText id="password" type="password" className="w-full" />
                    </div>
                    <Button label="Login" icon="pi pi-user" className="w-10rem mt-3"></Button>
                </div>
                <div className="w-full md:w-2 col">
                    <Divider layout="vertical" className="hidden md:flex"><b>OR</b></Divider>
                 
                </div>
                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5 col my-auto me-4 ms-2">
                    <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success w-10rem"></Button>
                </div>
            </div>
        </div>
            
        </div>
    </div>
    
      <Toast ref={toast} />
    </>

  )
}


