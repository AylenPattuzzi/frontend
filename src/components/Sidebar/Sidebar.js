/*eslint-disable*/
import { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Button,
  UncontrolledCollapse,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
 
  Container,
  Row,
  Col,
  NavbarToggler,
} from "reactstrap";
import { Fragment } from "react/cjs/react.production.min";

var ps;

const Sidebar = (props) => {
  const [collapseOpen, setCollapseOpen] = useState();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if(prop.invisible) return null;
      return (
        <Fragment key={key}>
          
          <UncontrolledDropdown >
          
            <DropdownItem >
            <NavItem key={key}>
              
              <NavLink
                className="mt-2 navbar-horizontal"
                to={prop.layout + prop.path}
                tag={NavLinkRRD}
                onClick={closeCollapse}
            
              >
                <i className={prop.icon}
                />
                {prop.name}
              </NavLink>
              
            </NavItem>
            </DropdownItem>
        
          </UncontrolledDropdown>
        </Fragment>
      );
    });
  };

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }


  return (
    <>
    <div className="bg-gradient-dark post">
    
    <UncontrolledDropdown nav className="bg-gradient-dark position-flex active align-content-xl-stretch">
      
       <DropdownToggle nav className="nav-link-icon">
         
               <i className="ni ni-align-left-2 text-blue" />
              
               
        </DropdownToggle>
       
     <DropdownMenu
     className="dropdown-menu-arrow bg-gradient-white"
     right
   >
    
    <Nav
      fluid="true"
      className="navbar-horizontal fixed-left navbar-light bg-gradient-white"
      expand=""
      id="sidenav-main"
    >
      <Container fluid="true">
    
        
        {/* Brand */}
         {logo ? (
          <NavbarBrand className="pt-2   ml-5"  {...navbarBrandProps}>
            
            <img
            
              alt="..."
              src={
              require("../../assets/img/brand/FACTORIS2.png" )
              .default
                }
              />
              <hr className="my-2"/>
          </NavbarBrand>
        ) : null}
        
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="nav-link-icon ml-3">
              <i className="ni ni-bell-55" />
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbar-default_dropdown_1"
              className="dropdown-menu-arrow"
              right
              >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center ml-7">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/theme/elmo.jpg")
                        .default
                    }
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-support-16" />
                <span>Support</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        {/* <Collapse navbar isOpen={collapseOpen}> */}
        
          {/* Collapse header */}
          
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <img
                    alt="..."
                    src={
                    require("../../assets/img/brand/FACTORIS2.png" )
                    .default
                      }
                    />
                  ) : (
                    <img
                      alt="..."
                      src={
                      require("../../assets/img/brand/FACTORIS2.png" )
                      .default
                        }
                      />
                      )}
                </Col>
              ) : null}
              
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
                
              </Col>
              
            </Row>
          </div>
          {/* Form */}
         
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {/* Navigation */}
          <Nav navbar>{createLinks(routes)}</Nav>
          {/* Divider */}
          
        {/* </Collapse> */}
      </Container>
    </Nav>
   </DropdownMenu>
   </UncontrolledDropdown>
    </div>

    </>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};
 
Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
