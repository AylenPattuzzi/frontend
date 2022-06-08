import React, { useEffect } from 'react'
import { useState } from "react";
import { useParams } from 'react-router-dom';

import FormModel from './FormModel';
import { useNavigate } from 'react-router-dom';
import { Detail, EditId } from 'services/ConsultasAPI/apiCallGeneral';


export default function ContEditModel() {
    let { id } = useParams();
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [tipoMaquinaria, setTipoMaquinaria] = useState()
    const [marca, setMarca] = useState()
    const [color, setColor] = useState([])

    const navigate = useNavigate();
    useEffect(() => {
        Detail('assetModel',{setName:setName, setDescription:setDescription}, id)
    }, [id])

    const enviar = async () => {
        EditId("assetModel",{name:name, description:description, id:id}, id)
            .then(r => {
                navigate("/admin/modelo/editar");
                window.location.reload();
            })
    };

    return (
        <div>
            <FormModel
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                enviar={enviar}
                tipoMaquinaria={tipoMaquinaria}
                setTipoMaquinaria={setTipoMaquinaria}
                marca={marca}
                color={color}
                setColor={setColor}
                setMarca={setMarca}
            />
        </div>
    )
}
