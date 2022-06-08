import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";


import styled from "styled-components";
// reactstrap components
import {
  Button,
  Card,
  Row,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  
  Col,
} from "reactstrap";

const H1 = styled.h1`
font-family: sans-serif;
color: black;
`

  const LoginFactoris = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await AuthService.login(username, password).then(
          () => {
            navigate("/admin/index");
           window.location.reload();
           window.location.reload();
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <>
     <Col lg="5" md="7" className="fixed-left">
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5  " >
          <div className="text-center text-muted mb-4">
            <H1>Ingresar Datos</H1>
          </div>
          <Form onSubmit={handleLogin}>
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-circle-08" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </FormGroup>
            <div className="custom-control custom-control-alternative custom-checkbox">
              <input
                className="custom-control-input"
                id=" customCheckLogin"
                type="checkbox"
              />
              <label
                className="custom-control-label"
                htmlFor=" customCheckLogin"
              >
                <span className="text-muted">Recuerdame</span>
              </label>
            </div>
            <div className="text-center">
              <Button className="my-4" color="primary" type="submit">
                Ingresar
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
      <Row className="mt-3">
      </Row>
    </Col>
    </>
  );
};

export default LoginFactoris;