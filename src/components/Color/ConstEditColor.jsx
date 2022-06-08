import React, { useEffect } from 'react'
import { useState } from "react";
import { useParams } from 'react-router-dom';

import FormColor from './FormColor';
import { useNavigate } from 'react-router-dom';
import { Detail, EditId } from 'services/ConsultasAPI/apiCallGeneral';

export default function ConstEditColor() {

  const [name, setName] = useState("")
  let { id } = useParams();
  const [description, setDescription] = useState([])

  const navigate = useNavigate();
  useEffect(() => {
    Detail('color',{setName:setName, setDescription:setDescription}, id)
  }, [id])

  const enviar = async () => {
    EditId('color',{name:name, description:description}, id)
      .then(r => {
        navigate("/admin/color/listado");
        window.location.reload();
      })

     
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
  )
}
