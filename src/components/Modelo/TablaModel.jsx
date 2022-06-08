import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import DataTables from '../../utilities/DataTable'
import { Fragment } from 'react/cjs/react.production.min';
import Cargando from 'utilities/Cargando';
import { Table, Delete } from 'services/ConsultasAPI/apiCallGeneral';



export default function TablaModel() {

    const [list, setList] = useState([]);

    useEffect(() => {
        Table('assetModel',setList)
    }, [])

    const columnas = () => {
        return (
            <tr>
                <th>Nombre</th>
                <th>descripción</th>
                <th>Tipo Maquinaria</th>
                <th>Marca</th>
                <th>Colores</th>
                <th>Acciones</th>
            </tr>
        )
    }
    const data = () => {
        return (
            <Fragment>
                {list.map((data, index) => {
                       let Color = []
                       for(var m=0; m<data.colors.length; m++ ){Color.push(data.colors[m].name + ' ')  }
                    return (
                        <tr key={index}>
                            
                            <td>{data.name}</td>
                            <td>{data.description}</td>
                            <td>{data.machineType.name}</td>
                            <td>{data.brand.name}</td>
                            <td>{Color}</td>
                            <td>
                                <Link to={`/admin/modelo/editar/${data.id}`} className="btn btn-primary" >Editar</Link>

                                <button className="btn btn-danger" onClick={(e) => Delete('assetModel',data.id)}>Eliminar</button>
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