import {
  Col,
  Container,
  FormGroup,
  Row,
  Button,
  Form,
  Input,
  CardBody,
  UncontrolledAlert,
} from "reactstrap";
import { Div } from "assets/style/Styles";
import { useState, useEffect } from "react";
import Header from "components/Headers/HeaderGenerico";
import { useNavigate } from "react-router-dom";
import { NameGetter } from "services/ConsultasAPI/apiCallGeneral";

const FormAssets = ({
  name,
  setName,
  tag,
  enviar,
  setTag,
  color,
  setColor,
  location,
  setLocation,
  provider,
  setProvider,
  purchaseDate,
  setPurchaseDate,
  serialNumber,
  setSerialNumber,
  model,
  setModelo,
  machineType,
  setMachineTipe,
}) => {
  //alerta
  const Swal = require("sweetalert2");
  //navegador para volver
  const navigate = useNavigate();

  //NAMES PARA SELECTS

  const [Ncolor, setNcolor] = useState([]);
  const [Nproveedor, setNproveedor] = useState([]);
  const [Ntipemachine, setNtipemachine] = useState([]);
  const [Nmodel, setNmodel] = useState([]);



  useEffect(() => {
    NameGetter("color", setNcolor);
  }, []);
     useEffect(() => {
      NameGetter("provider", setNproveedor);
     }, []);
  useEffect(() => {
    NameGetter("machineType", setNtipemachine);
  }, []);

  useEffect(() => {
    NameGetter("assetModel", setNmodel);
  }, []);

  //VALIDACION:
  //enviado
  const [aceptado, setAceptado] = useState(false);
  //estado de error
  const [error, setError] = useState(false);
  //Handle error
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, tag, location].includes("")) {
      setError(true);
      Swal.fire({
        title: "Error",
        text: "El campo de nombre es obligatorio",
        icon: "error",
        confirmButtonColor: "#172b4d",
        confirmButtonText: "Aceptar",
      });
      return;
    } else {
      setAceptado(true);
      setError(false);
      enviar();
    }
    setName("");
  };

  //CANCELAR
  const [cancelar, setCancelar] = useState(false);
  const handleCancelar = (e) => {
    e.preventDefault();
    if (cancelar === false) {
      setCancelar(true);

      Swal.fire({
        title: "¿Seguro deseas cancelar?",
        text: " Los datos no guardados seran eliminados",
        icon: "error",
        confirmButtonColor: "#172b4d",
        cancelButtonColor: "#f5365c",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        allowOutsideClick: false,
        allowEscapeKey: true,
        allowEnterKey: true,
        showCancelButton: true,
        closeOnCancel: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/admin/asset");
        }
      });
      setCancelar(false);
      return;
    } else {
      setCancelar(false);
    }
  };

  return (
    <>
      <Header />

      <Container className="mt--7">
        <Div>
          <CardBody className="bg-secondary shadow">
            <h1 className="text-color-danger">Datos de Tipo de Maquina</h1>
          </CardBody>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              {error && (
                <UncontrolledAlert
                  color="danger"
                  className="text-center dismiss"
                >
                  Es obligatorio llenar todos los campos
                </UncontrolledAlert>
              )}
              {aceptado && (
                <UncontrolledAlert color="default" className="text-center">
                  Tipo de maquina cargado satisfactoriamente
                </UncontrolledAlert>
              )}
              <Row>
                <Col className="" lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-nombre"
                    >
                      Tag
                    </label>

                    <Input
                      className="mt--1"
                      placeholder="Tag"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />

                    <label
                      className="form-control-label"
                      htmlFor="input-nombre"
                    >
                      Nombre
                    </label>

                    <Input
                      className="mt--1"
                      placeholder="Nombre de Maquina"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <label
                      className="form-control-label"
                      htmlFor="input-nombre"
                    >
                      Nro de serie
                    </label>

                    <Input
                      className="mt--1"
                      placeholder="Nombre de Maquina"
                      value={serialNumber}
                      onChange={(e) => setSerialNumber(e.target.value)}
                    />

                    <label
                      className="form-control-label"
                      htmlFor="input-nombre"
                    >
                      Ubicacion
                    </label>

                    <Input
                      className="mt--1"
                      placeholder="Nombre de Maquina"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />

                    <label
                      className="form-control-label"
                      htmlFor="input-nombre"
                    >
                      Fecha de Compra
                    </label>

                    <Input
                      className="mt--1"
                      type="date"
                      placeholder="Nombre de Maquina"
                      value={purchaseDate}
                      onChange={(e) => setPurchaseDate(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6">

                  <label className="form-control-label" htmlFor="input-nombre">
                    Modelo
                  </label>
                  <select
                    className="form-control"
                    value={model}
                    onChange={(e) => setModelo(e.target.value)}
                  >
                    <option></option>
                    {Nmodel.map((tipo, key) => {
                      return (
                        <option key={key} value={tipo.id}>
                          {tipo.name}
                        </option>
                      );
                    })}
                  </select>

                  <label className="form-control-label" htmlFor="input-nombre">
                    Color
                  </label>
                  <select
                    className="form-control"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  >
                    <option></option>
                    {Ncolor.map((tipo, key) => {
                      return (
                        <option key={key} value={tipo.id}>
                          {tipo.name}
                        </option>
                      );
                    })}
                  </select>

                    <label className="form-control-label" htmlFor="input-nombre">
                    Proveedor
                  </label>
                  <select
                    className="form-control"
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                  >
                              <option></option>
                    {Nproveedor.map((tipo, key) => {
                      return (
                        <option key={key} value={tipo.id}>
                          {tipo.name}
                        </option>
                      );
                    })}
                  </select>  

                  <label className="form-control-label" htmlFor="input-nombre">
                    Tipo de Activo
                  </label>
                  <select
                    className="form-control"
                    value={machineType}
                    onChange={(e) => setMachineTipe(e.target.value)}
                  >
                    <option></option>
                    {Ntipemachine.map((tipo, key) => {
                      return (
                        <option key={key} value={tipo.id}>
                          {tipo.name}
                        </option>
                      );
                    })}
                  </select>
                </Col>
              </Row>
              <FormGroup>
                <Button
                  color="default  mt-6  btn btn-outline-default"
                  type="submit"
                >
                  Guardar
                </Button>
                <Button
                  color="danger  mt-6 justify-content-center btn btn-outline-danger"
                  onClick={handleCancelar}
                  w
                >
                  Cancelar
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Div>
      </Container>
    </>
  );
};

export default FormAssets;
