import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import DataTables from '../../utilities/DataTable'
import { Fragment } from 'react/cjs/react.production.min';
import Cargando from 'utilities/Cargando';
import { Table, Delete } from 'services/ConsultasAPI/apiCallGeneral';

function ListAssets() {
  
    const [list, setList] = useState([]);

    useEffect(() => {
        Table('asset',setList)
    }, [])

    const columnas = () => {
        return (
            <tr>
                <th>Tag</th>
                <th>Nombre</th>
                <th>Ubicacion</th>
                 <th>Fecha de Compra</th>
                <th>Nro de Serial</th>
                <th>Tipo de Activo</th>
                <th>Modelo</th>
                <th>Color</th>
                <th>Acciones</th>
              
            </tr>
        )
    }


    const data = () => {
        return (
            <Fragment>
                
                {list.map((data, index) => {
                let MachineType = []
                for(var i=0; i<data.machineType.length; i++ ){MachineType.push(data.machineType[i].name + ' ')  }
                let Model = []
                for(var j=0; j<data.model.length; j++ ){Model.push(data.model[j].name + ' ')  }
                let Color = []
                for(var m=0; m<data.color.length; m++ ){Color.push(data.color[m].name + ' ')  }
                    return (
                        // (e) => DeleteMachine(index)
                        <tr key={index} >
                            <td>{data.tag}</td>
                            <td>{data.name}</td>
                            <td>{data.tag}</td>
                            <td>{data.purchaseDate}</td>
                            <td>{data.serialNumber}</td>
                            <td>{MachineType}</td>
                            <td>{Model}</td>
                            <td>{Color}</td>
                    
                            <td>
                            <Link to={`/admin/asset/editar/${data.id}`} className="btn btn btn-outline-default" >Editar</Link>
                                <button className="btn btn btn-outline-danger " onClick={(e) => Delete('asset',data.id)} >Eliminar</button>
                            </td>
                        </tr>
                    )
                })}
            </Fragment>
        )
    }
    const params = () => {
        return ({})
    }
    return (
        <Fragment>
            {list.length ?
                <DataTables
                    data={data()}
                    columnas={columnas()}
                    params={params()}
                />
            :
            <div className="row justify-content-md-center">
                <div className="col-auto">
                    <Cargando />
                </div>
            </div>
            
            }

        </Fragment>
    )
}



export default ListAssets