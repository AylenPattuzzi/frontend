import { useState } from 'react';
import { PostNew } from 'services/ConsultasAPI/apiCallGeneral';
import FormNewProvider from './FormNewProvider';

function NewProdvider() {
    const[name, setName] = useState('')
    const[phone, setPhone] = useState('')
    const[address, setAddress] = useState('')
    const[brands, setBrands] = useState([])
  
    const enviar = () => {
      PostNew('provider',{name:name, phone:phone, address:address, brands})
      };

  return (
    <FormNewProvider
    name={name}
    phone={phone}

    address={address}
    setName = {setName}
    setPhone = {setPhone}
    setAddress={setAddress}
    brands={brands}
    setBrands={setBrands}
    enviar={enviar}
  
    />
  )
}

export default NewProdvider