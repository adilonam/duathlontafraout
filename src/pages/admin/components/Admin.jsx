
import React, {  useEffect, useState } from "react";
import { UserService } from "../../../services/UserService";


export const Admin = (props) => {

const userService = new UserService()

const [isAdmin, setIsAdmin] = useState(false)

 useEffect(() => {
  
    if(props.user){
     userService.getUser(props.user.uid).then((data)=>{
        let _data = data.data()
        if(_data?.isadmin){
             setIsAdmin(true)
            }else
            {
                setIsAdmin(false)
            }
     }).catch((e)=>{
        setIsAdmin(false)
     })
    }
   
 }, [props.user])
 




  return (
    <>
    {
      isAdmin &&  <>
      i m  admin
      
      
      
      </>

    }</>
 

  )
}


