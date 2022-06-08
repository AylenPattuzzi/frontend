import { useState } from 'react';
import { PostNew } from 'services/ConsultasAPI/apiCallGeneral';
import FormMachineTipe from './FormMachineTipe';


function NewMachineTipe() {
    const[name, setName] = useState('')
    const[description, setDescription] = useState('')

    const enviar = () => {
      PostNew('machineType',{name:name, description:description})
      };

  return (
    <FormMachineTipe
    name={name}
    description={description}
    setName = {setName}
    setDescription = {setDescription}
    enviar={enviar}
    />
  )
}

export default NewMachineTipe