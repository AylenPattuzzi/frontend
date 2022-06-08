import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataTables from "../../utilities/DataTable";
import { Fragment } from "react/cjs/react.production.min";
import Cargando from "utilities/Cargando";
import { Table, Delete } from "services/ConsultasAPI/apiCallGeneral";



export default function ListNewProvider() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Table("provider",setList);
  }, []);

  const columnas = () => {
    return (
      <tr>
        <th>Nombre</th>
        <th>Telefono</th>
        <th>Direccion</th>
        <th>Marca</th>
        <th>Acciones</th>
      </tr>
    );
  };

  const data = () => {
    return (
      <Fragment>
        {list.map((data, index) => {
        let brandTable = []
        for(var i=0; i<data.brands.length; i++ ){brandTable.push(data.brands[i].name + ' ')  }
          return (
            // (e) => DeleteMachine(index)

            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.address}</td>
              <td>{brandTable}</td>
              <td>
                <Link
                  to={`/admin/provider/editar/${data.id}`}
                  className="btn btn btn-outline-default"
                >
                  Editar
                </Link>
                <button
                  className="btn btn btn-outline-danger "
                  onClick={(e) => Delete("provider",data.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </Fragment>
    );
  };
  const params = () => {
    return {};
  };
  return (
    <Fragment>
      {list.length ? (
        <DataTables data={data()} columnas={columnas()} params={params()} />
      ) : (
        <div className="row justify-content-md-center">
          <div className="col-auto">
            <Cargando />
          </div>
        </div>
      )}
    </Fragment>
  );
}
