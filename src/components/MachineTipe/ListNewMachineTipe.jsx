import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import DataTables from '../../utilities/DataTable'
import { Fragment } from 'react/cjs/react.production.min';
import Cargando from 'utilities/Cargando';
import { Table, Delete } from 'services/ConsultasAPI/apiCallGeneral';


export default function ListNewMachineTipe() {

    const [list, setList] = useState([]);

    useEffect(() => {
        Table('machineType',setList)
    }, [])

    const columnas = () => {
        return (
            <tr>
                <th>Nombre</th>
                <th>descripción</th>
                <th>Acciones</th>
                
            </tr>
        )
    }


    const data = () => {
        return (
            <Fragment>
                
                {list.map((data, index) => {
              
                    return (
                        // (e) => DeleteMachine(index)
                        <tr key={index} >
                            <td>{data.name}</td>
                            <td>{data.description}</td>
                            <td>
                            <Link to={`/admin/machinetipe/editar/${data.id}`} className="btn btn btn-outline-default" >Editar</Link>
                                <button className="btn btn btn-outline-danger " onClick={(e) => Delete('machineType',data.id)} >Eliminar</button>
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