import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormPhysicalComp from './FormPhysicalComp';

import { useNavigate } from 'react-router-dom';
import { Detail, EditId } from 'services/ConsultasAPI/apiCallGeneral';

export default function ContEditPhysicalComp() {

    const [machineType, setMachineType] = useState("")
    let { id } = useParams();
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    
    const navigate = useNavigate();
    useEffect(() => {
        Detail('spareComponent',{setName:setName, setDescription:setDescription, setMachineType:setMachineType}, id)
    }, [id])

    const enviar = async () => {
        EditId('spareComponent',{name:name, description:description, machineType:machineType}, id)
            .then(r => {
                navigate("/admin/componente-fisico/listado");
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
