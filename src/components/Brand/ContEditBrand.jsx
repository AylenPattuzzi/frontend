import React, {useEffect} from 'react'
import { useState} from "react";
import { useParams } from 'react-router-dom';
import FormBrand from './FormBrand';

import { useNavigate } from 'react-router-dom';
import { Detail, EditId } from 'services/ConsultasAPI/apiCallGeneral';




export default function ContEditBrand() {
  
  const [name, setName] = useState("")
  let {id} = useParams();
  const [description, setDescription] = useState([])
  
  const navigate = useNavigate();
  useEffect(() => {
    Detail('brand',{setName:setName, setDescription:setDescription}, id)
  }, [id])

  const enviar = async () => {
    await EditId('brand',{name:name, description:description}, id)
      .then(r=>{
        navigate(`/admin/marca/listado`);
        window.location.reload();
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