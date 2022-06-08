import { useState } from 'react';

import FormPhysicalComp from './FormPhysicalComp';
import { useNavigate } from 'react-router-dom';
import { PostNew } from 'services/ConsultasAPI/apiCallGeneral';

export default function ContNewPhysicalComp() {

    const [machineType, setMachineType] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    
   const navigate = useNavigate();
    const enviar = async () => {
      await PostNew('spareComponent',{name:name, description:description, machineType:{'id':machineType}})
      .then(r=>{
       navigate("/admin/componente-fisico/agregar");
       window.location.reload();
      })
    };

    return (
        <div>
            <FormPhysicalComp
                machineType={machineType}
                setMachineType={setMachineType}
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                enviar={enviar}
            />
        </div>
    );
};
