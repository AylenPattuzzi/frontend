import { useState } from 'react';
import { PostNew } from 'services/ConsultasAPI/apiCallGeneral';
import FormColor from './FormColor';

export default function ConstNewColor() {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
 // const navigate = useNavigate();
  const enviar = async () => {
    PostNew('color',{name:name, description:description})
   // navigate("/admin/color/listado");
   // window.location.reload();
  };

  return (
    <div>
      <FormColor
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        enviar={enviar}
      />
    </div>
  );
};