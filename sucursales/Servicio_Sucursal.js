
/**
 * La siguiente funcion se encarga de guardar en sucursalLS los datos va verificar si hay algo guardado en Web , en este caso sucursalLS quien guarda en local storage algo  luego la funcion verifica si hay algo devuelve un arreglo vacio el JSON.parse de "web" la info o sea sucursalLS y lo guarda esta devuelve return datos registro que es la info que esta almacenada en localstorage
 */
function getInfoSucursales()
{
    let datosRegistro = JSON.parse(localStorage.getItem('sucursalLS'));

    if(datosRegistro == null)
    {
        datosRegistro = [];
    }
    return datosRegistro;
}


/**
 * Esta funcion llama de interfaz los datos del arreglo que habiamos guardado previamente y se almacenan en el parametro pDatosSucursal , con ello hacemos una var let lista contactos que va ser igual a la funcion getInfoSucursales(que se encarga de verificar si hay algo guardado en localstorage) entonces a lista contactos se le enpuja pDatosSucursal  luego por medio de localstorage guardamos dentro del 'key' el nombre sucursalLS y el stringify lo convierte a strings el array de lista contactos o sea la info del arreglo q se ingreso en el sitio web
 * @param {*} pDatosSucursal 
 */
function setInfoSucursal(pDatosSucursal)
{
   // var datosRegistro = localStorage.setItem('sucursalLS', JSON.stringify(pDatosSucursal));
    let listaContactos = getInfoSucursales();

    listaContactos.push(pDatosSucursal);

    localStorage.setItem('sucursalLS',JSON.stringify(listaContactos));
}

////////////////////////////////////////////////////////////////////////////////////



function buscarSucursales(pNombre)
{
    let listaRepartidores=getInfoSucursales();
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




function setTempSucursal(data)
{
    localStorage.setItem('tempSucursalLS', JSON.stringify(data));
}


function getTempSucursal()
{
    return JSON.parse(localStorage.getItem('tempSucursalLS'));
}



function removeTempSucursal()
{
   localStorage.removeItem('tempSucursalLS');
}


// a esta funcion le estamos pasando el arreglo que ingresamosa con los datos de aSucursales o sea (sucursal, direccio, telefono)
function actualizarListaSucursales(pDatosSucursal)
{
    let listaRepartidores=getInfoSucursales();
    for(let i=0;i<listaRepartidores.length;i++){
        if(listaRepartidores[i][0]==pDatosSucursal[0])
        {
            listaRepartidores[i]=pDatosSucursal;
            localStorage.setItem('sucursalLS',JSON.stringify(listaRepartidores));
        }
    }
}

