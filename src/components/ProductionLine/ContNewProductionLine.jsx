import FormProductionLine from './FormProductionLine'
import { useState } from 'react';
import { PostNew } from 'services/ConsultasAPI/apiCallGeneral';

//import { useNavigate } from 'react-router-dom';

export default function ContNewProductionLine() {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [asset, setAsset] = useState()

   // const navigate = useNavigate();
    const enviar = async () => {
        await PostNew('productionLine',{name:name, description:description, asset:{'id':asset}})
            .then(r => {
               // navigate("/admin/lineas-produccion/agregar");
               // window.location.reload();
            })
    };

    return (
        <div>
            <FormProductionLine
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                enviar={enviar}
                asset={asset}
                setAsset={setAsset}
            />
        </div>
    )
}
