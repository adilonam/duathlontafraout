
import React, {  useEffect, useState } from "react";
import { UserService } from "../../../services/UserService";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { doc, getDoc } from "firebase/firestore";



export const Admin = (props) => {

const userService = new UserService()

const [isAdmin, setIsAdmin] = useState(false)


const [users, setUsers] = useState(null)

const [loading, setLoading] = useState(true);






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
 

 useEffect(() => {
  if(isAdmin){
    userService.getUsers().then((data) =>{
      let _data = []
      data.forEach(element => {
        let _element = element.data()
        if(_element.datenaissance){
          _element.datenaissance = (new Date(_element.datenaissance.seconds*1000)).toDateString()
        }
        else{
          _element.datenaissance = ''
        }
        _data.push(_element)
      });
     setUsers(_data)
     setLoading(false)
    }).catch((err)=>{
      setUsers(null)
      setLoading(false)
    })

  }
 
}, [isAdmin]); 


  return (
    <>
    {
      isAdmin &&  <div className="container-fluid">
      <DataTable value={users} paginator rows={10} dataKey="uid"  filterDisplay="row" loading={loading}
        emptyMessage="Aucune inscription." size={'small'} className={"fs-6"}>
    <Column field="prenom" header="prenom" filter  />
    <Column field="nom" header="nom" filter  />
    <Column field="email" header="email" filter  />
    <Column field="cin" header="CIN" filter  />
    
    <Column field="pays" header="pays" filter  />

    <Column field="ville" header="ville" filter  />

    <Column field="datenaissance" header="datenaissance" filter  />

    <Column field="tph" header="tph" filter  />
    <Column field="tshirt" header="tshirt" filter  />
    <Column field="typeduathlon" header="typeduathlon" filter   /> 
  
    
</DataTable>
      
      
      
      </div>

    }</>
 

  )
}


