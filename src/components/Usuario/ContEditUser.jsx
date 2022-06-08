import React, {useEffect} from 'react'
import { useState} from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Detail, EditId } from 'services/ConsultasAPI/apiCallGeneral';
import FormUser from './FormUser';



export default function ContEditUser() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let {id} = useParams();

    
    const navigate = useNavigate();
    useEffect(() => {
      Detail('user',{setUsername:setUsername, setEmail:setEmail,setPassword:setPassword} ,id)
    }, [id])
  
    const enviar = async () => {
      await EditId('user',{username:username, email:email,password:password} ,id)
        .then(r=>{
          navigate(`/admin/usuario/listado`);
          window.location.reload();
        })
  
  
    };
    return (
      <div>
        <FormUser
         username={username}
         setUsername={setUsername}
         email={email}
         setEmail={setEmail}
         password={password}
         setPassword={setPassword}
         enviar={enviar}
        />
      </div>
    );
  };