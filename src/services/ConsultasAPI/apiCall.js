import axios from "axios"


//FUNCION PRINCIPAL REDIRECTS 
export async function Call(metod,data,dir,id,acciones) {
   
    if (metod === "post") {
        await Post(data,dir)
    }else if(metod === "delete"){
        await Delete(id,dir)   
    }else if(metod === "get"){
        await Get(data,dir)
    }else if(metod === "show"){
        await Show(acciones,id,dir)
    }else if(metod === "put"){
        await Put(data,id,dir)
    }
}



//Funcion Mostras LISTA (GET)
export async function Get(data,dir) {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user === null){
        user = {"accessToken":"1","refreshToken":"1"};
    }
    axios.get(`http://96.126.116.58:8080/api/${dir}`,
        { headers: { "Authorization": user.accessToken } }
  
    )
        .then((response) =>  {
           
            data(response.data);
        })
        .catch((error) => {
            if(error.request.status === 403){
                console.log("entro")
                axios.post("http://96.126.116.58:8080/auth/refresh",
                {"refreshToken":user.refreshToken}

                
                )
                .then((response) =>  {
                    localStorage.setItem("user", JSON.stringify({"accessToken": response.data.accessToken, "refreshToken":response.data.refreshToken}))
                    data(response.data);
                    axios.get(`http://96.126.116.58:8080/api/${dir}`,
                    { headers: { "Authorization": response.data.accessToken } }
              
                )
                    .then((response) =>  {
                       
                        data(response.data);
                    })
                })
                .catch((error2) => {
                    if(error2.request.status === 404){
                      window.location.replace("/auth/login")
                    }

                });
                
            }
            console.log(error);
        });
    }




//edit (muestra datos)
export async function Show(acciones,id,dir,data) {
    var user = JSON.parse(localStorage.getItem("user"));
    axios.get(`http://96.126.116.58:8080/api/${dir}/${id}`,
        { headers: { "Authorization": user.accessToken } }
    )
        .then(res => {
            if (res.status === 200) {
               
                if(dir==='provider'){
                    acciones.setName(res.data.name);
                    acciones.setAddress(res.data.address);
                    acciones.setPhone(res.data.phone);
                   
                }
                else if(dir==='machineType'){
                    acciones.setName(res.data.name);
                    acciones.setDescription(res.data.description);
                }
                else if(dir==='brand'){
                    acciones.setName(res.data.name);
                    acciones.setDescription(res.data.description);
                }
                else if(dir==='color'){
                    acciones.setName(res.data.name);
                    acciones.setDescription(res.data.description);
                }
                else if(dir==='assetModel'){
                    acciones.setName(res.data.name);
                    acciones.setDescription(res.data.description);
                }
                else if(dir==='productionLine'){
                    acciones.setName(res.data.name);
                    acciones.setDescription(res.data.description);
                }
                else if(dir==='spareComponent'){
                    acciones.setName(res.data.name);
                    acciones.setDescription(res.data.description);
                }
                else if(dir==='user'){
                    acciones.setName(res.data.name);
                    acciones.setDescription(res.data.description);
                }
                else if(dir==='asset'){
                    acciones.setName(res.data.name);
                    acciones.setDescription(res.data.description);
                }
                
            } else {
                console.log(res)
            }
        })
        .catch((error) => {
            if(error.request.status === 403){
                console.log("entro")
                axios.post("http://96.126.116.58:8080/auth/refresh",
                {"refreshToken":user.refreshToken}

                
                )
                .then((response) =>  {
                    localStorage.setItem("user", JSON.stringify({"accessToken": response.data.accessToken, "refreshToken":response.data.refreshToken}))
                    data(response.data);
                    axios.get(`http://96.126.116.58:8080/api/${dir}`,
                    { headers: { "Authorization": response.data.accessToken } }
              
                )
                    .then((response) =>  {
                       
                        data(response.data);
                    })
                })
                .catch((error2) => {
                    if(error2.request.status === 404){
                      window.location.replace("/auth/login")
                    }

                });
                
            }
            console.log(error);
        });
    }

//edit (cambia datos)
export async function Put(data,id,dir) {
    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    axios.put(`http://96.126.116.58:8080/api/${dir}/${id}`,
        data
        ,
        { headers: { "Authorization": user.accessToken} }
    )
     // completar
        .then(res => {
            console.log(res)
        })
        .catch((error) => {
            if(error.request.status === 403){
                console.log("entro")
                axios.post("http://96.126.116.58:8080/auth/refresh",
                {"refreshToken":user.refreshToken}

                
                )
                .then((response) =>  {
                    localStorage.setItem("user", JSON.stringify({"accessToken": response.data.accessToken, "refreshToken":response.data.refreshToken}))
                    data(response.data);
                    axios.get(`http://96.126.116.58:8080/api/${dir}`,
                    { headers: { "Authorization": response.data.accessToken } }
              
                )
                    .then((response) =>  {
                       
                        data(response.data);
                    })
                })
                .catch((error2) => {
                    if(error2.request.status === 404){
                      window.location.replace("/auth/login")
                    }

                });
                
            }
            console.log(error);
        });
    }





//FUNCION PARA POSTEAR DATOS
export async function Post(data, dir) {
    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    axios.post(`http://96.126.116.58:8080/api/${dir}`,
        data
        ,
        { headers: { "Authorization": user.accessToken } }
    )
        .then(res => {
            console.log(res)
            return res
        })
        .catch((error) => {
            if(error.request.status === 403){
                console.log("entro")
                axios.post("http://96.126.116.58:8080/auth/refresh",
                {"refreshToken":user.refreshToken}

                
                )
                .then((response) =>  {
                    localStorage.setItem("user", JSON.stringify({"accessToken": response.data.accessToken, "refreshToken":response.data.refreshToken}))
                    data(response.data);
                    axios.get(`http://96.126.116.58:8080/api/${dir}`,
                    { headers: { "Authorization": response.data.accessToken } }
              
                )
                    .then((response) =>  {
                       
                        data(response.data);
                    })
                })
                .catch((error2) => {
                    if(error2.request.status === 404){
                      window.location.replace("/auth/login")
                    }

                });
                
            }
            console.log(error);
        });
    }




//FUNCION DELETE
export async function Delete(id, dir,data) {
    var user = JSON.parse(localStorage.getItem("user"));
    console.log("borrar",id)
    axios.delete(`http://96.126.116.58:8080/api/${dir}/${id}`,
    
        { headers: { "Authorization": user.accessToken } }

    )
        .then((response) => {
            if (response.status === 200) {
                window.location.reload();
            } else {
               
            }
       
        })
        .catch((error) => {
            if(error.request.status === 403){
                console.log("entro")
                axios.post("http://96.126.116.58:8080/auth/refresh",
                {"refreshToken":user.refreshToken}

                
                )
                .then((response) =>  {
                    localStorage.setItem("user", JSON.stringify({"accessToken": response.data.accessToken, "refreshToken":response.data.refreshToken}))
                    data(response.data);
                    axios.get(`http://96.126.116.58:8080/api/${dir}`,
                    { headers: { "Authorization": response.data.accessToken } }
              
                )
                    .then((response) =>  {
                       
                        data(response.data);
                    })
                })
                .catch((error2) => {
                    if(error2.request.status === 404){
                      window.location.replace("/auth/login")
                    }

                });
                
            }
            console.log(error);
        });
    }


