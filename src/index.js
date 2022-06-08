
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import FacLayout from "layouts/AuthFactoris";
import routes from "routes.js";
import LoginFactoris from "views/Log-In/LoginFactoris";
import AdminBrand from "views/brand/AdminBrands";
import PagFormNewBrand from "views/brand/PagFormNewBrand";
import PagFormEditBrand from "views/brand/PagFormEditBrand";
import PagFormNewPhysicalComp from "views/physicalComp/PagFormNewPhysicalComp";
import AdminMachineTipe from "views/MachineTipe/AdminMachineTipe";
import AdminColor from "views/Color/AdminColor";
import PagFormNewColor from "views/Color/PagFormNewColor";
import PagFormEditColor from "views/Color/PagFormEditColor"
import PagFormNewModel from "views/Modelo/PagFormNewModel";
import PagFormEditModel from "views/Modelo/PagFormEditModel";
import Error404 from "components/404/Error404";
import AdminProductionLine from "views/productionLine/AdminProductionLine";
import PagFormNewProductionLine from "views/productionLine/PagFormNewProductionLine";
import PagFormEditProductionLine from "views/productionLine/PagFormEditProductionLine";
import AdminPhysicalComp from "views/physicalComp/AdminPhysicalComp";
import PagFormEditPhysicalComp from "views/physicalComp/PagFormEditPhysicalComp";
import Icons from "views/examples/Icons";
import AdminUser from "views/user/AdminUser";
import PagFormNewUser from "views/user/PagFormNewUser";
import PagFormEditUser from "views/user/PagFormEditUser";




const getRoutes = (routes, parent = "/admin/") => {

  return routes.map((prop, key) => {

    if (prop.layout === "/admin") {
      return (
        <Route
          path={parent + prop.path}
          element={<prop.component/>}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin" element={ <AdminLayout />}>
        {getRoutes(routes)}
      </Route>

      
      <Route path="/auth" element={<FacLayout />}>
        <Route path="/auth/login" element={<LoginFactoris />} />
        <Route path="/auth/refresh" element={<LoginFactoris />} />
        <Route path="/auth/logout" element={<LoginFactoris />} />
      </Route>
      
      <Route path="/" element={<Navigate to="admin/index"/>}/>
      <Route path="/marca/listado" element={<AdminBrand/>}/>
      <Route path="/marca/agregar" element={<PagFormNewBrand/>}/>
      <Route path="/marca/ver/:id" element={<PagFormNewBrand/>}/>
      <Route path="/marca/editar/:id" element={<PagFormEditBrand/>}/>


      <Route path="/componente-fisico/listado" element={<AdminPhysicalComp/>}/>
      <Route path="/componente-fisico/agregar" element={<PagFormNewPhysicalComp/>}/>
      <Route path="/componente-fisico/ver/:id" element={<PagFormNewPhysicalComp/>}/>
      <Route path="/componente-fisico/editar/:id" element={<PagFormEditPhysicalComp/>}/>

      <Route path="/color/listado" element={<AdminColor/>}/>
      <Route path="/color/agregar" element={<PagFormNewColor/>}/>
      <Route path="/color/ver/:id" element={<PagFormNewColor/>}/>
      <Route path="/color/editar/:id" element={<PagFormEditColor/>}/>

      <Route path="/usuario/listado" element={<AdminUser/>}/>
      <Route path="/usuario/agregar" element={<PagFormNewUser/>}/>
      <Route path="/usuario/ver/:id" element={<PagFormNewUser/>}/>
      <Route path="/usuario/editar/:id" element={<PagFormEditUser/>}/>


      <Route path="/modelo/agregar" element={<PagFormNewModel/>}/>
      <Route path="/modelo/ver/:id" element={<PagFormNewModel/>}/>
      <Route path="/modelo/editar/:id" element={<PagFormEditModel/>}/>

      <Route path="/lineas-produccion/listado" element={<AdminProductionLine/>}/>
      <Route path="/lineas-produccion/agregar" element={<PagFormNewProductionLine/>}/>
      <Route path="/lineas-produccion/ver/:id" element={<PagFormNewProductionLine/>}/>
      <Route path="/lineas-produccion/editar/:id" element={<PagFormEditProductionLine/>}/>

        
        
      <Route path="/iconos/listado" element={<Icons/>}/>
  


      <Route path="/machinetipe" element={<AdminMachineTipe/>}/>
      <Route path="/machinetipe/editar/" element={<AdminMachineTipe/>}/>
      <Route path="/machinetipe/nuevo" element={<AdminMachineTipe/>}/>

      <Route path="*" element={<Error404/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
