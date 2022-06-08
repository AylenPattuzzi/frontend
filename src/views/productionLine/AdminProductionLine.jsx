import React from 'react'
import Header from "components/Headers/HeaderGenerico";

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

import { Link } from 'react-router-dom';
import TablaProductionLine from 'components/ProductionLine/TablaProductionLine';


export default function AdminProductionLine() {
  return (
    <>
    <Header />
    {/* Page content */}
    <Container className="mt--7" fluid>
      <Row>
        <Col className="order-xl-1" xl="8">
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Link to = {'/admin/lineas-produccion/agregar'} className="btn btn-primary">Agregar</Link>
            </CardHeader>

            <CardHeader>
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Listado de lineas de producción</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <TablaProductionLine />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
  )
}




