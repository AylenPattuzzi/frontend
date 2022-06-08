import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import FormUser from './FormUser';
import { PostNew } from 'services/ConsultasAPI/apiCallGeneral';


export default function ContNewUser() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const enviar = async () => {
      await PostNew('user',{username:username, email:email, password:password})
        .then(r => {
          navigate("/admin/usuario/listado");
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
      