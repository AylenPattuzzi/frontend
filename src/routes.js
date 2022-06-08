

import Index from "views/Index.js";
import PagFormNewBrand from "views/brand/PagFormNewBrand";
import Icons from "views/examples/Icons";
import AdminBrand from "views/brand/AdminBrands";
import PagFormEditBrand from "views/brand/PagFormEditBrand";
import Providers from "views/Providers/Providers";
import AdminMachineTipe from "views/MachineTipe/AdminMachineTipe";
import NewMachineTipe from "components/MachineTipe/NewMachineTipe";
import PagFormNewPhysicalComp from "views/physicalComp/PagFormNewPhysicalComp";
import EditMachineTipePage from "views/MachineTipe/EditMachineTipePage";
import PagFormNewColor from "views/Color/PagFormNewColor";
import AdminColor from "views/Color/AdminColor";
import PagFormEditColor from "views/Color/PagFormEditColor";
import PagFormNewModel from "views/Modelo/PagFormNewModel";
import AdminModel from "views/Modelo/AdminModel";
import PagFormEditModel from "views/Modelo/PagFormEditModel";
import ContEditProvider from "components/Providers/EditProvider";
import PagNewProdvider from "views/Providers/PagNewProvider";
import PagFormNewProductionLine from "views/productionLine/PagFormNewProductionLine";
import AdminProductionLine from "views/productionLine/AdminProductionLine";
import PagFormEditProductionLine from "views/productionLine/PagFormEditProductionLine";

import AdminPhysicalComp from "views/physicalComp/AdminPhysicalComp";
import PagFormEditPhysicalComp from "views/physicalComp/PagFormEditPhysicalComp";

import AdminAssets from "views/Assets/AdminAssets";
import CreateAssets from "views/Assets/CreateAssets";
import EditAssets from "views/Assets/EditAssets";
import PagFormNewUser from "views/user/PagFormNewUser";
import AdminUser from "views/user/AdminUser";
import PagFormEditUser from "views/user/PagFormEditUser";



var routes = [

  //indice
  {
    path: "/index",
    name: "Mis Activos",
    icon: "ni ni-archive-2 text-default",
    component: Index,
    layout: "/admin",

  },

  //lineas de produccion
  {

    name: "Mis Lineas de Produccion",
    icon: "ni ni-bullet-list-67 text-3AEE21 ",

  },

  //proveedores
  {
    path: "/providers",
    name: "Proveedores",
    icon: "ni ni-delivery-fast text-red",
    component: Providers,
    layout: "/admin",

  },
  //nuevo proveedor
  {
    path: "/newprovider",
    component: PagNewProdvider,
    layout: "/admin",
    invisible: true
  },

  //Editar proveedores
  {
    name: "Editar proveedor",
    path: "/provider/editar/:id/",
    component: ContEditProvider,
    layout: "/admin",
    invisible: true
  },
  //marcas
  {
    path: "/marca/agregar",
    name: "Nueva Marca",
    icon: "ni ni-bag-17 text-primary",
    component: PagFormNewBrand,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/marca/listado",
    name: "Administrar marcas",
    icon: "ni ni-bag-17 text-primary",
    component: AdminBrand,
    layout: "/admin",
  },
  {
    name: "Editar Marca",
    path: "/marca/editar/:id",
    component: PagFormEditBrand,
    layout: "/admin",
    invisible: true
  },

  //lineas de produccion
  {
    path: "/lineas-produccion/agregar",
    name: "Nueva Linea de Producción",
    icon: "ni ni-bag-17 text-primary",
    component: PagFormNewProductionLine,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/linas-produccion/listado",
    name: "Administrar lineas de producción",
    icon: "ni ni-bag-17 text-primary",
    component: AdminProductionLine,
    layout: "/admin",
  },
  {
    name: "Editar lineas de producción",
    path: "/lineas-produccion/editar/:id",
    component: PagFormEditProductionLine,
    layout: "/admin",
    invisible: true
  },
  //Usuario
  {
    path: "/usuario/agregar",
    name: "Nuevo Usuario",
    icon: "ni ni-bag-17 text-primary",
    component: PagFormNewUser,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/usuario/listado",
    name: "Administrar Usuarios",
    icon: "ni ni-bag-17 text-primary",
    component: AdminUser,
    layout: "/admin",
  },
  {
    name: "Editar Usuario",
    path: "/usuario/editar/:id",
    component: PagFormEditUser,
    layout: "/admin",
    invisible: true
  },

  // color
  {
    path: "/color/agregar",
    name: "Nuevo Color",
    icon: "ni ni-bag-17 text-primary",
    component: PagFormNewColor,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/color/listado",
    name: "Administrar Colores",
    icon: "ni ni-bag-17 text-primary",
    component: AdminColor,
    layout: "/admin",
  },
  {
    name: "Editar Color",
    path: "/color/editar/:id",
    component: PagFormEditColor,
    layout: "/admin",
    invisible: true
  },
  // Compoente Fisico
  {
    path: "/componente-fisico/agregar",
    name: "Nuevo Componente Fisico",
    icon: "ni ni-bag-17 text-primary",
    component: PagFormNewPhysicalComp,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/componente-fisico/listado",
    name: "Administrar Componente Fisico",
    icon: "ni ni-bag-17 text-primary",
    component: AdminPhysicalComp,
    layout: "/admin",
  },
  {
    name: "Editar Componente Fisico",
    path: "/componente-fisico/editar/:id",
    component: PagFormEditPhysicalComp,
    layout: "/admin",
    invisible: true
  },

  // Modelo
  {
    path: "/modelo/agregar",
    name: "Nuevo Modelo",
    icon: "ni ni-bag-17 text-primary",
    component: PagFormNewModel,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/modelo/listado",
    name: "Administrar Modelo",
    icon: "ni ni-bag-17 text-primary",
    component: AdminModel,
    layout: "/admin",
  },
  {
    name: "Editar Modelo",
    path: "/modelo/editar/:id",
    component: PagFormEditModel,
    layout: "/admin",
    invisible: true
  },

  //Tipo de maquinas

  {
    path: "/machinetipe",
    name: "Tipo de Maquinas",
    icon: "ni ni-folder-17 text-info",
    component: AdminMachineTipe,
    layout: "/admin",
  },
  //Nuevo tipo de maquina 
  {
    path: "/newmachinetipe",
    component: NewMachineTipe,
    layout: "/admin",
    invisible: true
  },

  //Editar tipo de maquina 
  {
    name: "Editar MachineTipe",
    path: "/machinetipe/editar/:id/",
    component: EditMachineTipePage,
    layout: "/admin",
    invisible: true
  },


  // Componente fisico 
  {
    path: "/componente-fisico/agregar",
    component: PagFormNewPhysicalComp,
    layout: "/admin",
    invisible: true
  },

  // usuarios
  {

    name: "Usuarios",
    icon: "ni ni-circle-08 text-dark",


  },
  {
    path: "/iconos/listado",
    name: "Iconos",
    icon: "ni ni-bag-17 text-primary",
    component: Icons,
    layout: "/admin",

  },




  // Iconos
  {

    path: "/icons",
    name: 'ICONOS',
    component: Icons,
    layout: "/admin",

  },





  //Assets

  {
    path: "/asset",
    name: "Activos",
    icon: "ni ni-folder-17 text-info",
    component: AdminAssets,
    layout: "/admin",
  },
  //Nuevo asset
  {
    path: "/newasset",
    component: CreateAssets,
    layout: "/admin",
    invisible: true
  },

  //Editar asset
  {
    name: "Editar MachineTipe",
    path: "/asset/editar/:id/",
    component: EditAssets,
    layout: "/admin",
    invisible: true
  },

];
export default routes;
