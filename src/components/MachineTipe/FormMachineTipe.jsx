import { Col, Container, FormGroup, Row, Button, Form, Input, CardBody, UncontrolledAlert } from "reactstrap";
import { Div } from "assets/style/Styles";
import {useState} from 'react'
import Header from "components/Headers/HeaderGenerico";
import { useNavigate } from "react-router-dom";




const FormMachineTipe = ({name,description,setName,setDescription, enviar, }) => {
const Swal = require('sweetalert2')
const navigate = useNavigate()
  
//VALIDACION:
  //enviado
  const [aceptado,setAceptado] = useState(false);
  //estado de error
  const [error,setError] = useState(false);
  //Handle error
  const handleSubmit = (e) => {
    e.preventDefault();
    if([name].includes('')) {
        setError(true);
        Swal.fire({
          title: 'Error',
          text: 'El campo de nombre es obligatorio',
          icon: 'error',
          confirmButtonColor: '#172b4d',
          confirmButtonText: 'Aceptar',
        })
        return;
      }else{
          setAceptado(true)
          setError(false)
          enviar()
        }
    setName("")
    setDescription('')
}




//CANCELAR
const [cancelar,setCancelar] = useState(false);
const handleCancelar = (e) => {
  e.preventDefault();
  if(cancelar === (false)) {
      setCancelar(true)

 
       Swal.fire({
        title: '¿Seguro deseas cancelar?',
        text: ' Los datos no guardados seran eliminados',
        icon: 'error',
        confirmButtonColor: '#172b4d',
        cancelButtonColor: '#f5365c',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        allowOutsideClick:false,
        allowEscapeKey:true,
        allowEnterKey:true,
        showCancelButton: true,
        closeOnCancel: true,
      }).then(result => {
        if (result.isConfirmed) {
        //  window.location.href = "admin/machineTipe";
        navigate('/admin/machineTipe')
       }})
      setCancelar(false)
      return;
    }else{
      setCancelar(false)
    }
  }
 
  return (
    <>
    
      <Header/>



      <Container className="mt--7">
        <Div >
          <CardBody className="bg-secondary shadow">
        <h1 className="text-color-danger">Datos de Tipo de Maquina</h1>
        </CardBody>
        <CardBody>
          <Form onSubmit = {handleSubmit}>
          {error && (<UncontrolledAlert color='danger'className="text-center dismiss">Es obligatorio llenar todos los campos</UncontrolledAlert>) }
          {aceptado && (<UncontrolledAlert color='default' className="text-center">Tipo de maquina cargado satisfactoriamente</UncontrolledAlert>) }
            <Row>
            
              <Col className="" lg="6">
                <FormGroup>
                
                  <label 
                   className="form-control-label"
                   htmlFor="input-nombre"
                  >Nombre de maquina</label>
                  
                  <Input className="mt--1" placeholder="Nombre de Maquina" 
                  value={name}
                  onChange = {(e) => setName(e.target.value)}
                  />

          
                </FormGroup>
              </Col>
           
              <Col lg="6">
              <label
               className="form-control-label d-inline-block"
               htmlFor="input-nombre"
              >Descripcion</label>
              
                  <Input
                  type="textarea"
                  className="mt--1" 
                  placeholder="Descripcion" 
                  value={description}
                  onChange = {(e) => setDescription(e.target.value)}
                  
                  />
              </Col>
            </Row>
          <FormGroup>
          <Button color="default  mt-6  btn btn-outline-default" type="submit">Guardar</Button>
          <Button color="danger  mt-6 justify-content-center btn btn-outline-danger" onClick={handleCancelar}w>Cancelar</Button>
            
          </FormGroup>
          </Form>
          </CardBody>
        
        </Div>
        
      </Container>
      
    </>
  );
};

export default FormMachineTipe;