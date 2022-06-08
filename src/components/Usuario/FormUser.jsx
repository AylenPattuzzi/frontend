import Header from "components/Headers/HeaderGenerico";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


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
// core components


export default function FormUser({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
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
    if (username.length === 0) {
      errors = { ...errors, username: 'Este campo es obligatorio' }
    }
    if (email.length === 0) {
        errors = { ...errors, email: 'Este campo es obligatorio' }
      }
      if (password.length === 0) {
        errors = { ...errors, password: 'Este campo es obligatorio' }
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
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nombre de Usuario
                          </label>
                          <Input
                            value={username}
                            id="input-username"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          {error.username && <small className="text-danger">{error.username}</small>}
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>Email</label>
                      <Input
                        rows="4"
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {error.email && <small className="text-danger">{error.email}</small>}
                    </FormGroup>
                  </div>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>Contraseña</label>
                      <Input
                        rows="4"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {error.password && <small className="text-danger">{error.password}</small>}
                    </FormGroup>
                  </div>
                  <Row>
                    <Col className="w-100 ml-4">
                      <button onClick={e=>onSubmit(e)} className="btn btn-primary btn-form"> Guardar</button>
                      <Link  to = {"/usuario/listado"} className="btn btn-danger btn-form"> Cancelar</Link> 
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