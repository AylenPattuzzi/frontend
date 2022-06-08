import React, {useEffect,useState} from 'react'
import { useParams , useNavigate} from 'react-router-dom';
import FormMachineTipe from './FormMachineTipe';
import { EditId,Detail } from 'services/ConsultasAPI/apiCallGeneral';




export default function ContEditMachineTipe() {
  
  const [name, setName] = useState("")
  let {id} = useParams();
  const [description, setDescription] = useState([])

  
  const navigate = useNavigate();
  useEffect(() => {
    Detail('machineType',{setName:setName,setDescription:setDescription}, id)
  }, [id])

  const enviar = () => {
    EditId('machineType',{name:name,description:description}, id)
    navigate("/admin/machinetipe");
    window.location.reload();

  };
  return (
    <div>
      <FormMachineTipe
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        enviar={enviar}
      />
    </div>
  );
};