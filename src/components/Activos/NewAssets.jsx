import {useState} from 'react'

import { PostNew } from 'services/ConsultasAPI/apiCallGeneral';
import FormAssets from './FormAssets';




function NewAssets() {
    const[tag, setTag] = useState('')
    const[name, setName] = useState('')
    const[brand, setBrand] = useState('')
    const[model, setModelo] = useState([])
    const[machineType, setMachineTipe] = useState([])
    const[color, setColor] = useState([])
    const[location, setLocation] = useState('')
    const[provider, setProvider] = useState('')
    const[purchaseDate, setPurchaseDate] = useState('')

    const[serialNumber, setSerialNumber] = useState('')
    const[qrCodePath, setQrCodePath] = useState('')

    //:[{'id':model}]

    const enviar = () => {
      PostNew('asset',{name:name,tag:tag,location:location,purchaseDate:purchaseDate,serialNumber:serialNumber,model:{'id':model},machineType:{'id':machineType},color:{'id':color}})
      };



  return (
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
  )
}

export default NewAssets