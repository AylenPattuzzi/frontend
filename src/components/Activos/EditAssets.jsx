import React, {useEffect} from 'react'
import { useState} from "react";
import { useParams , useNavigate} from 'react-router-dom';

import { EditId, Detail } from 'services/ConsultasAPI/apiCallGeneral';
import FormAssets from './FormAssets';



export default function ContEditAsset() {

  let {id} = useParams();
  const[tag, setTag] = useState('')
    const[name, setName] = useState('')
    const[brand, setBrand] = useState('')
    const[model, setModelo] = useState('')
    const[machineType, setMachineTipe] = useState('')
    const[color, setColor] = useState('')
    const[location, setLocation] = useState('')
    const[provider, setProvider] = useState('')
    const[purchaseDate, setPurchaseDate] = useState('')

    const[serialNumber, setSerialNumber] = useState('')
    const[qrCodePath, setQrCodePath] = useState('')
  
  const navigate = useNavigate();
  useEffect(() => {
    EditId('asset',{name:name,tag:name,location:name,purchaseDate:purchaseDate,serialNumber:serialNumber,machineType:{'id':machineType},model:{'id':model},color:{'id':color},brand:{'id':brand} }, id)
  }, [id])

  const enviar = () => {
    Detail('asset',{name:name,tag:name,location:name,purchaseDate:purchaseDate,serialNumber:serialNumber,machineType:{'id':machineType},model:{'id':model},color:{'id':color},brand:{'id':brand}}, id)
    navigate("/admin/asset");
    window.location.reload();

  };
  return (
    <div>
      <FormAssets
   name={name}
   setName = {setName}
   location={location}
   setLocation={setLocation}
   provider={provider}
   setProvider={setProvider}
   purchaseDate={purchaseDate}
   setPurchaseDate={setPurchaseDate}
   serialNumber={serialNumber}
   setSerialNumber={setSerialNumber}
   qrCodePath={qrCodePath}
   setQrCodePath={setQrCodePath}
   tag={tag}
   setTag={setTag}
   brand={brand}
   setBrand={setBrand}
   model={model}
   setModelo={setModelo}
   machineType={machineType}
   setMachineTipe={setMachineTipe}
   color ={color}
   setColor ={setColor}

  
   enviar={enviar}
   />
  
    </div>
  );
};