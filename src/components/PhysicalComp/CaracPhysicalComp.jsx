import React from "react";
import { useState } from "react";



// reactstrap components
import {
    Card,
    CardBody,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";
// core components


export default function CaracPhysicalComp({
    atributo,
    setAtributo,
    valor,
    setValor,
    enviar
}) {
    const [error, setError] = useState({});


    const onSubmit = () => {
        if (validar()) {
            enviar()
        }
    }

    const validar = () => {
        let errors = {}
        setError({})
        if (atributo.length === 0) {
            errors = { ...errors, name: 'Este campo es obligatorio' }
        }
        if (valor.length === 0) {
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
        <Card >
            <CardBody>
                {Object.keys(error).length > 0 && <div class="alert alert-danger alert-dismissible show" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button><span><b>Error - </b>Algunos campos presentan errores, debe corregirlos primero.</span></div>}
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col className="w-100 ml-4">
                            <Input
                                value={atributo}
                                id="input-atributo"
                                type="text"
                                placeholder="Atributo"
                                onChange={(e) => setAtributo(e.target.value)}
                            />
                            {error.atributo && <small className="text-danger">{error.atributo}</small>}

                            <Input
                                rows="4"
                                value={valor}
                                type="text"
                                placeholder="Valor"
                                onChange={(e) => setValor(e.target.value)}
                            />
                            {error.valor && <small className="text-danger">{error.valor}</small>}

                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    )
}
