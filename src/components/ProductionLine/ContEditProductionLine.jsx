import FormProductionLine from './FormProductionLine'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { Detail,EditId } from 'services/ConsultasAPI/apiCallGeneral';

export default function ContEditProductionLine() {
    const [name, setName] = useState("")
    let {id} = useParams();
    const [description, setDescription] = useState("")
    const [activo, setActivo] = useState()

   // const navigate = useNavigate();
    useEffect(() => {
      Detail('productionLine',{setName, setDescription, setActivo}, id)
    }, [id])
  
    const enviar = async () => {
      await EditId('productionLine',{name:name, description:description, activo:activo}, id)
        .then(r=>{
          //navigate("/admin/lineas-produccion/listado");
         // window.location.reload();
        })
        };
  return (
    <div>
    <FormProductionLine
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        enviar={enviar}
        activo={activo}
        setActivo={setActivo}
    />
</div>
  )
}
