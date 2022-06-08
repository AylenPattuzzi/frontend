import Header from "components/Headers/HeaderGenerico";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


// reactstrap components
import {
  Card,
  CardBody,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components


export default function FormColor({
  name,
  setName,
  description,
  setDescription,
  enviar
}) {
  
  const [error, setError] = useState({});

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

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <Card >
              <CardBody>
              {Object.keys(error).length>0 && <div class="alert alert-danger alert-dismissible show" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button><span><b>Error - </b>Algunos campos presentan errores, debe corregirlos primero.</span></div>}
                <form>
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
                  <Row>
                    <Col className="w-100 ml-4">
                      <button onClick={e=>onSubmit(e)} className="btn btn-primary btn-form"> Guardar</button>
                      <Link  to = {"/admin/color/listado"} className="btn btn-danger btn-form"> Cancelar</Link> 
                    </Col>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};