
import { useState } from 'react';
import FormBrand from './FormBrand';


import { PostNew } from 'services/ConsultasAPI/apiCallGeneral';


export default function ContNewBrand() {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  //const navigate = useNavigate();
  const enviar = async () => {
    await PostNew('brand',{name:name, description:description})
      .then(r => {
        //navigate("/admin/marca/listado");
        //window.location.reload();
      })
   


  };
  
  return (
    <div>
      <FormBrand
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        enviar={enviar}
      />
    </div>
  );
};
