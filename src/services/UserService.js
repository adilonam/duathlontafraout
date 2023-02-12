

import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword , signOut  } from "firebase/auth";
import { auth, database } from "../firebase";
import {  ref, set } from "firebase/database";


export class UserService {


    creat(data) {
        return createUserWithEmailAndPassword(auth, data.email, data.password1).then((userCredential) => {
            let _data = {...data}
            delete _data.email
            delete _data.password1
            delete _data.password2
          return  set(ref(database, 'users/' + userCredential.user.uid), _data).then((d)=>{
            sendEmailVerification(userCredential.user,{url:import.meta.env.VITE_DOMAIN})
          });


        })

    }


    signIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }


    signOut(){
        return signOut(auth)
    }

} 