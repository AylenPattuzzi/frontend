import { useEffect } from "react";
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
import { useState } from "react";
import Header from "components/Headers/HeaderGenerico";
import { useNavigate } from "react-router-dom";
import { NameGetter } from "services/ConsultasAPI/apiCallGeneral";

const FormNewProvider = ({
  name,
  phone,
  setName,
  setPhone,
  enviar,
  address,
  setAddress,
  brands,
  setBrands,
}) => {
  const Swal = require("sweetalert2");
  const navigate = useNavigate();

  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    NameGetter("brand", setMarcas);
  }, []);



  const [pro, setPro] = useState([]);

  useEffect(() => {
    NameGetter("provider", setPro);
  }, []);
  console.log(pro)

  const changeBrands = (value) => {
    let index = brands.findIndex((bra) => bra.id === value);
    if (index === -1) {
      setBrands([...brands, { id: value }]);
    } else {
      setBrands(
        brands.filter((bra) => {
          return bra.id !== value;
        })
      );
    }
  };

  //VALIDACION:
  //enviado
  const [aceptado, setAceptado] = useState(false);
  //estado de error
  const [error, setError] = useState(false);
  //Handle error
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name].includes("")) {
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
      }).then((result) => {
        if (result.isConfirmed) {
          //  window.location.href = "admin/machineTipe";
          navigate("/admin/providers");
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
            <h1 className="text-color-danger">Datos de Proveedor</h1>
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
                  Proveedor cargado satisfactoriamente
                </UncontrolledAlert>
              )}
              <Row>
                <Col className="" lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-nombre"
                    >
                      Nombre de proveedor
                    </label>

                    <Input
                      className="mt--1"
                      placeholder="Nombre de Proveedor"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <label
                      className="form-control-label"
                      htmlFor="input-nombre"
                    >
                      Numero de Telefono
                    </label>

                    <Input
                      className="mt--1"
                      placeholder="Nro de Telefono"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />

                    <label
                      className="form-control-label"
                      htmlFor="input-nombre"
                    >
                      Direccion
                    </label>

                    <Input
                      className="mt--1"
                      placeholder="Direccion"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6">
                  <label
                    className="form-control-label d-inline-block mt-3"
                    htmlFor="input-nombre"
                  >
                    Marcas
                  </label>
                  <select 
                  className="formselect-multiple"
                     onChange={(e) => changeBrands(e.target.value)}
                     name="marcas[]"
                    
                  >
                    {marcas.map((tipo, key) => {
                      return (
       
                        <option 
                        typeof="checkbox"
                        className="toppings-list-item" key={key}
                        value={tipo.id}
                        >
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

export default FormNewProvider;
