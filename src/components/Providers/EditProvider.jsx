import React, {useEffect} from 'react'
import { useState} from "react";
import { useParams , useNavigate} from 'react-router-dom';
import { EditId, Detail } from 'services/ConsultasAPI/apiCallGeneral';
import FormNewProvider from './FormNewProvider';




export default function ContEditProvider() {
  
  const[name, setName] = useState('')
  const[phone, setPhone] = useState('')
  const[address, setAddress] = useState('')
  const[brand, setBrand] = useState([])
  let {id} = useParams();


  
  const navigate = useNavigate();
  useEffect(() => {
    Detail('provider',{setName:setName,setPhone:setPhone, setAddress:setAddress, setBrand:setBrand }, id)
  }, [id])

  const enviar = () => {
    EditId('provider',{name:name,phone:phone,address:address,brand}, id)

    navigate("/admin/providers");
    window.location.reload();

  };
  return (
    <div>
      <FormNewProvider
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        address={address}
        setAddress={setAddress}
        brand={brand}
        setBrand={setBrand}
        enviar={enviar}
      />
    </div>
  );
};