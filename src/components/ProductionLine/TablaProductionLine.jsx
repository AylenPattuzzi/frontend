import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import DataTables from '../../utilities/DataTable'
import { Fragment } from 'react/cjs/react.production.min';

import Cargando from 'utilities/Cargando';

import { Delete, Table } from 'services/ConsultasAPI/apiCallGeneral';



export default function TablaProductionLine() {

    const [list, setList] = useState([]);

    useEffect(() => {
        Table('productionLine',setList)
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
                        <tr key={index}>
                            
                            <td>{data.name}</td>
                            <td>{data.description}</td>
                            <td>
                                <Link to={`/admin/lineas-produccion/editar/${data.id}`} className="btn btn-primary" >Editar</Link>
                                <button className="btn btn-danger" onClick={(e) => Delete('productionLine',data.id)}>Eliminar</button>
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