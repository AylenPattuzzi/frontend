import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import DataTables from '../../utilities/DataTable'
import { Fragment } from 'react/cjs/react.production.min';
import Cargando from 'utilities/Cargando';
import { Table,Delete } from 'services/ConsultasAPI/apiCallGeneral';



export default function TablaPhysicalComp() {
    const [list, setList] = useState([]);

    useEffect(() => {
        Table('spareComponent',setList)
    }, [])

    const columnas = () => {
        return (
            <tr>
                <th>Nombre</th>
                <th>descripción</th>
                <th>Tipo Maquinaria</th>
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
                            <td>{data.machineType.name}</td>
                            <td>
                                <Link to={`/compoente-fisico/editar/${data.id}`} className="btn btn-primary" >Editar</Link>
                                <button className="btn btn-danger" onClick={(e) => Delete('spareComponent',data.id)}>Eliminar</button>
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