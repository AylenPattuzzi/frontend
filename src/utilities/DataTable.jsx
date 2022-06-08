import React, { useEffect, useRef, useState } from "react"
import $ from 'jquery'
import { Container } from "reactstrap";

export default function DataTable({ data, columnas, params }) {

    const [datos, setDatos] = useState()

    $.DataTable = require('datatables.net-bs4');
    require('jszip');
    require('pdfmake');
    require('datatables.net-autofill-bs4');
    require('datatables.net-buttons-bs4');
    require('datatables.net-buttons/js/buttons.colVis.js');
    require('datatables.net-buttons/js/buttons.html5.js');
    require('datatables.net-buttons/js/buttons.print.js');
    require('datatables.net-colreorder-bs4');
    require('datatables.net-fixedcolumns-bs4');
    require('datatables.net-fixedheader-bs4');
    require('datatables.net-responsive-bs4');
    require('datatables.net-scroller-bs4');
    require('datatables.net-searchbuilder-bs4');
    require('datatables.net-select-bs4');
    require('datatables.net-staterestore-bs4');
    const tableRef = useRef()

    useEffect(() =>{
            $(tableRef.current).DataTable().destroy()
            setDatos(data)
    }, [data])

    useEffect(() => {
        if (datos){
            $(tableRef.current).DataTable(
                {...datatables_options, ...params}
            )
       
        }
    }, [datos, params])

    return (
        <Container>
            <table className="display dataTable table thead-light table-striped table-bordered row-border table-hover table-darker table-sm" width="100%" ref={tableRef}>
                <thead className="bg-gradient-darker text-light">
                    {columnas}
                </thead>
                <tbody className=" text-dark font-weight-600 bg-translucent-secondary ">
                    {datos}
                </tbody>  
                <tfoot  className=" text-light bg-translucent-darker ">
                    {columnas}
                </tfoot>
            </table>
        </Container>

    )

   
}

//[
//    { title: "Name" },
  //  { title: "Position" },
   // { title: "Office" },
   // { title: "Extn." },
   // { title: "Start data" },
    //{ title: "Salary" }
//]


const datatables_options = {
        destroy: true,
        responsive: true,
        paging: true, 
        ordering: true,
        info: true,
        order: [[0, "desc"]],
        pagingType: "numbers",
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "Todas"]],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.11.5/i18n/es-MX.json"
        }

    }
