import { UserService } from "../../services/UserService";
import { Chip } from 'primereact/chip';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
export const UserInfo = (props)=> {
  
const navigate = useNavigate()
 const userService = new UserService()

    return (
     <>
      <div className="row justify-content-center mt-3">
        <div className="col-1 my-auto">
            <div className="row justify-content-end">
  <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge">
        <Badge value="0" />
    </Avatar>

            </div>
      
    
  </div>

    <div className="w-auto my-auto">

    <Chip label={props.user?.email} />
    </div>

    <div className="col-2 my-auto ">
    <Button label="Se déconnecter" className="p-button-danger p-button-rounded p-button-sm" onClick={()=>{
        userService.signOut(); navigate('/');
    }} />
    </div>

      
    </div>
     
     </>
  
    )
  }
  
  
  