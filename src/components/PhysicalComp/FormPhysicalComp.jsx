import Header from "components/Headers/HeaderGenerico";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { NameGetter } from "services/ConsultasAPI/apiCallGeneral";

// reactstrap components
import {
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
} from "reactstrap";
import CaracPhysicalComp from "./CaracPhysicalComp";


// core components


export default function FormPhysicalComp({
    name,
    setName,
    description,
    setDescription,
    machineType,
    setMachineType,
    enviar
}) {
    const [tiposMaquinarias, setTiposMaquinarias] = useState([])
    const [error, setError] = useState({});

    useEffect(() => {
        NameGetter('machineType',setTiposMaquinarias)
    }, [])

    const onSubmit = () => {
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
        if (machineType.length === 0) {
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
                                <Form onSubmit={onSubmit}>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>Tipo Maquinaria</label>
                                                    <select
                                                        className="form-control"
                                                        onChange={(e) => setMachineType(e.target.value)}
                                                        value={machineType}
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
                                            <label>Descripción</label>
                                            <Input
                                                rows="4"
                                                value={description}
                                                type="textarea"
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </FormGroup>
                                    </div>
                                    <h1>Terminar</h1>
                                    <div className="pl-lg-4">
                                        <FormGroup>
                                            <Row>
                                                <Col className="w-100 ml-4">
                                                    <p>Características</p> 
                                                    <button className="ni ni-fat-add btn btn-outline-primary"></button>
                                                    <CaracPhysicalComp/>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                    </div>
                                    <Row>
                                        <Col className="w-100 ml-4">
                                            <button onClick={onSubmit} className="btn btn-primary btn-form"> Guardar</button>
                                            <Link to={"/admin/componente-fisico/listado"} className="btn btn-danger btn-form"> Cancelar</Link>
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