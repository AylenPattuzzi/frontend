import { Call } from "./apiCall";





//Obtener nombres para selects
export async function NameGetter(dir,setList) {
    await Call("get", setList, dir, "");
}


//Post data
export async function PostNew(dir,data) {
  await Call("post",data, dir);
}


//Table

export async function Table(dir,setList) {
  await Call("get", setList, dir, "");
}

//Edit
export async function Detail(dir,acciones, id) {
  await Call("show",'' , dir, id,acciones);
}

// put data de editar
export async function EditId(dir,data, id) {
  await Call("put",data, dir, id);
}


//Eliminar
export async function Delete(dir,id) {
  await Call("delete",'', dir, id);
}
