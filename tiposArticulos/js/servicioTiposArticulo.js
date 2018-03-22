
/**
 * La siguiente funcion se encarga de guardar en RegistroLS los datos va verificar si hay algo guardado en Web , en este caso RegistroLS quien guarda en local storage algo  luego la funcion verifica si hay algo devuelve un arreglo vacio el JSON.parse de "web" la info o sea RegistroLS y lo guarda esta devuelve return datos registro que es la info que esta almacenada en localstorage
 */
function getInfoContactos()
{
    let datosRegistroArticulos = JSON.parse(localStorage.getItem('RegistroArticulosLS'));

    if(datosRegistroArticulos == null)
    {
        datosRegistroArticulos = [];
    }
    return datosRegistroArticulos;
}


/**
 * Esta funcion llama de interfaz los datos del arreglo que habiamos guardado previamente y se almacenan en el parametro pDatosRegistro , con ello hacemos una var let lista contactos que va ser igual a la funcion getInfoContactos(que se encarga de verificar si hay algo guardado en localstorage) entonces a lista contactos se le enpuja pDatosRegistro  luego por medio de localstorage guardamos dentro del 'key' el nombre RegistroLS y el stringify lo convierte a strings el array de lista contactos o sea la info del arreglo q se ingreso en el sitio web
 * @param {*} pDatosRegistro 
 */
function setInfoRegistro(pDatosRegistroArticulos)
{
   // var datosRegistro = localStorage.setItem('RegistroLS', JSON.stringify(pDatosRegistro));
    let listaContactos = getInfoContactos();

    listaContactos.push(pDatosRegistroArticulos);

    localStorage.setItem('RegistroArticulosLS',JSON.stringify(listaContactos));
}



////////////////////////////////////////////////////////////////////////////////////


function buscarSucursal(pNombre)
{
    let listaRepartidores=getInfoContactos();
    let repartidorEncontrado=[];
    for(let i=0;i<listaRepartidores.length;i++)
    {
        if(pNombre == listaRepartidores[i][0])
        {
            repartidorEncontrado=listaRepartidores[i];
        }
    }
    return repartidorEncontrado;
}




function setTemp(data)
{
    localStorage.setItem('tempLs', JSON.stringify(data));
}


function getTemp()
{
    return JSON.parse(localStorage.getItem('tempLs'));
}



function removeTemp()
{
   localStorage.removeItem('tempLs');
}



function actualizarListaArticulos(pDatosRegistro)
{
    let listaRepartidores=getInfoContactos();
    for(let i=0;i<listaRepartidores.length;i++){
        if(listaRepartidores[i][0]==pDatosRegistro[0]){
            listaRepartidores[i]=pDatosRegistro;
            localStorage.setItem('RegistroArticulosLS',JSON.stringify(listaRepartidores));
        }
    }
}

