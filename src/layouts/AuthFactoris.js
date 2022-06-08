
import React from "react";
import { useLocation, Outlet, } from "react-router-dom";
// reactstrap components
import { Container, Row, } from "reactstrap";

// core components
import styled from "styled-components";
import AuthFooter from "components/Footers/AuthFooter.js";



const H1 = styled.h1`
font-family: 'Roboto Condensed', sans-serif;;
font-size: 0.6cm;
color: #000000; //233487
border-radius: 2px;
`


const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-gradient-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  return (
    <>

      <div className=" display-flex  bg-gradient-secondary mt-0 mb-2 " ref={mainContent} >
        <div>
          <div className="  main-content  bg-gradient-secondary py-0 py-lg-0 mb-5" >



            {/* Logo de factoris */}
            <Container className="header justify-content-between ">
              <div className="mr-8">
                <img
                  width="500" height="124"
                  className="mt-4 img-fluid"
                  alt="..."
                  src={
                    require("../assets/img/brand/FACTORIS.png").default
                  }
                />
              </div>
            </Container>
            {/* Logo de factoris */}


            {/*mensaje de bienvenida */}
            <Container className=" text-wrap">
              <div className="ml-3 mt-4 text-left" >
                <Row className="  justify-content-left ">
                  <H1 >
                    ACOMPAÑAMOS A LAS INDUSTRIAS EN LA EVOLUCIÓN TECNOLÓGICA .
                  </H1>
                </Row>
              </div>
            </Container>
            {/*mensaje de bienvenida */}



            {/*Contenido del login */}
            <Container className="mt-1   pb-5" >
              <Row className="justify-content-end mt-0 ">
                <Outlet />
              </Row>
            </Container>
            {/*Contenido del login */}



            {/*triangulo */}
            <div className="separator separator-bottom separator-skew zindex-100 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-black"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
            {/*triangulo */}
          </div>
        </div>
      </div>
      <div className="ml-0 mr-0 mt-8">
        <AuthFooter />
      </div>
    </>
  );
};

export default Auth;
