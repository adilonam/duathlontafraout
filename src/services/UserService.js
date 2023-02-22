

import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword , signOut  } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';

export class UserService {


    creat(data) {
        return createUserWithEmailAndPassword(auth, data.email, data.password1).then((userCredential) => {
            let _data = {...data}
            delete _data.password1
            delete _data.password2

            const docRef =   doc(firestore,`users/${ userCredential.user.uid}`);

            setDoc(docRef,_data).then((d)=>sendEmailVerification(userCredential.user,{url:import.meta.env.VITE_DOMAIN}))
       


        })

    }


    signIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }


    signOut(){
        return signOut(auth)
    }


    getUser(uid){
        const docRef =  doc(firestore, `users/${uid}`)
        return getDoc(docRef)
    }
    getUsers(){

        const colRef = collection(firestore, 'users')
    
        return getDocs(colRef)
    }

} 