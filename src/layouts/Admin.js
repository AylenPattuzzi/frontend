
import React, { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import AuthService from "../services/auth.service"
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
// import { useNavigate } from "react-router-dom";

const Admin = () => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  // const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    } else {
      //navigate("/auth/login")
    }
  }, []);


  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };





 






  return (
    <>


      <Sidebar 
        fluid
        
        location={location}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/FACTORIS2.png").default,
          imgAlt: "...",
        }}
      />
      
      <div className="main-content" ref={mainContent}>
        <AdminNavbar fluid
          brandText={getBrandText(location.pathname)}
          currentUser = {currentUser}
        />
        <Outlet />
        <Container fluid
        className="bottom mt-8">
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
