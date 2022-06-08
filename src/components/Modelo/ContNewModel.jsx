import { useState } from 'react';
import { PostNew } from 'services/ConsultasAPI/apiCallGeneral';
import FormModel from './FormModel';
//import { useNavigate } from 'react-router-dom';


export default function ContNewModel() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [machineType, setTipoMaquinaria] = useState()
    const [brand, setMarca] = useState()
    const [colors, setColor] = useState([])

   // const navigate = useNavigate();
    const enviar = async () => {
         await PostNew('assetModel',{name:name, description:description, machineType:{'id':machineType}, brand:{'id':brand}, colors})
            .then(r =>{
             //   navigate("/admin/modelo/listado");
             //   window.location.reload();
                }
            )
        
  
    };
    
    return (
        <div>
            <FormModel
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                enviar={enviar}
                machineType={machineType}
                setTipoMaquinaria={setTipoMaquinaria}
                brand={brand}
                colors={colors}
                setColor={setColor}
                setMarca={setMarca}
            />
        </div>
    )
}






