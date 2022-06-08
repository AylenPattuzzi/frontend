import Header from "components/Headers/HeaderGenerico";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NameGetter } from "services/ConsultasAPI/apiCallGeneral";
import makeAnimated from "react-select/animated";




import {
    Card,
    CardBody,
    FormGroup,
    Input,
    Container,
    Row,
    Col,
    Form
} from "reactstrap";

import { MultiSelect } from "react-multi-select-component";



export default function FormModel({
    name,
    setName,
    description,
    setDescription,
    machineType,
    setTipoMaquinaria,
    brand,
    setMarca,
    colors,
    setColor,
    enviar
}) {
    const [error, setError] = useState({});
    const [tiposMaquinarias, setTiposMaquinarias] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [colores, setColores] = useState([]);

    const options = [
        { value: "rojo", label: "rojo" },
        { value: "azul", label: "azul" },
        { value: "verde", label: "verde" },
        { value: "blanco", label: "blanco" }
    ];


    useEffect(() => {
        NameGetter('machineType', setTiposMaquinarias)
    }, [])

    useEffect(() => {
        NameGetter('brand', setMarcas)
    }, [])

    useEffect(() => {
        NameGetter('color', setColores)                                                                                           
    }, [])


    const [ss, setSssss] = useState([]);

    useEffect(() => {
        NameGetter('assetModel',setSssss)
    }, [])
console.log(ss)
    const onSubmit = (e) => {
        e.preventDefault()
        if (validar()) {
            enviar()

        }
    }

    const validar = () => {
        let errors = {}
        setError({})
        if (name.length === 0) {
            errors = { ...errors, name: 'Este campo es obligatorio' }
        }
        if (Object.keys(errors).length === 0) {
            setError({})
            return true;
        } else {
            setError(errors)
            return false;
        }
    }

    const changeColores = (value) => {

        let index = colors.findIndex(col => col.id === value)
        if (index === -1){
            setColor([...colors, {"id":value}])
            
        }else{
            setColor(
                colors.filter( col => {return col.id !== value})
                )
        }
    }

    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-1" xl="8">
                        <Card >
                            <CardBody>
                                {Object.keys(error).length > 0 && <div class="alert alert-danger alert-dismissible show" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button><span><b>Error - </b>Algunos campos presentan errores, debe corregirlos primero.</span></div>}
                                <Form>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-nombre"
                                                    >
                                                        Nombre
                                                    </label>
                                                    <Input
                                                        value={name}
                                                        id="input-nombre"
                                                        type="text"
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                    {error.name && <small className="text-danger">{error.name}</small>}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="pl-lg-4">
                                        <FormGroup>
                                            <label>Descripción</label><span>- Opcional</span>
                                            <Input
                                                rows="4"
                                                value={description}
                                                type="textarea"
                                                onChange={(e) => setDescription(e.target.value)}
                                            />

                                        </FormGroup>
                                    </div>
                                    <div className="pl-lg-4">
                                        <FormGroup>
                                            <label>Tipo Maquinaria</label>
                                            <select
                                                className="form-control"
                                                value={machineType}
                                                onChange={(e) => setTipoMaquinaria(e.target.value)}

                                            >
                                                {tiposMaquinarias.map((tipo, key) => {
                                                    return (
                                                        <option
                                                            key={key}
                                                            value={tipo.id}
                                                        >
                                                            {tipo.name}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </FormGroup>
                                    </div>
                                    <div className="pl-lg-4">
                                        <FormGroup>
                                            <label>Marca</label>
                                            <select
                                                className="form-control"
                                                onChange={(e) => setMarca(e.target.value)}
                                                value={brand}
                                            >

                                                {marcas.map((tipo, key) => {
                                                    return (
                                                        <option
                                                            key={key}
                                                            value={tipo.id}
                                                        >
                                                            {tipo.name}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </FormGroup>
                                    </div>
                                    <div className="pl-lg-4">
                                        <FormGroup>
                                            <div>
                                                <label>Colores</label>
                                                <>
                                                    <MultiSelect

                                                        options={options}
                                                        value={colores}
                                                        onChange={(item) => setColores(item)}
                                                        className="select"
                                                        isClearable={true}
                                                        isSearchable={true}
                                                        isDisabled={false}
                                                        isLoading={false}
                                                        isRtl={false}
                                                        closeMenuOnSelect={false}
                                                    >
                                                        {colores.map((tipo, key) => {
                                                            return (
                                                                <option className="toppings-list-item" key={key}
                                                                    value={tipo.id}
                                                                >
                                                                    {tipo.name}
                                                                </option>
                                                            );
                                                        })}
                                                    </MultiSelect>
                                                </>
                                            </div>
                                        </FormGroup>
                                    </div>
                                    <Row>
                                        <Col className="w-100 ml-4">
                                            <button onClick={e => onSubmit(e)} className="btn btn-primary btn-form"> Guardar</button>
                                            <Link to={"/admin/modelo/listado"} className="btn btn-danger btn-form"> Cancelar</Link>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
