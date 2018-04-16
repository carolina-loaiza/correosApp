function guardarSucursal(pDatosSucursal) {
    let peticion = $.ajax({
        //los urls tiene que llamarse igual que la ruta en el archivo route
        url: 'http://localhost:4000/api/registrar_sucursal',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async:false,
        data:{
            'numero' : pDatosSucursal[0],
            'nombre' : pDatosSucursal[1],
            'tel' : pDatosSucursal[2],
            'activo' : pDatosSucursal[3]
        }
    });

    peticion.done(function(response){

    });

    peticion.fail(function() {

    });
}
//corregir!!!
function obtenerSucursal() {
    let listaSucursales = [];
    let peticion = $.ajax({
        //los urls tiene que llamarse igual que la ruta en el archivo route
        url: 'http://localhost:4000/api/listar_todas_sucursales',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async:false,
        data:{
            
        }
    });

    peticion.done(function(response) {
        listaSucursales = response;
    });

    peticion.fail(function() {
        
    });

    return listaSucursales;
}

function buscarSucursalPorId(pid) {
    let sucursal = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/buscar_sucursal_id',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async:false,
        data: {
            'numero' : pid
        }
    });

    peticion.done(function(response) {
        sucursal = response;
    });

    peticion.fail(function() {

    });

    return sucursal;
}






// function buscarSucursal(pNombre) {
//     let listaSucursales = obtenerDatoLocal('RegistroLS');
//     let sucursalEncontrada = [];
//     for (let i = 0; i < listaSucursales.length; i++) {
//         if (pNombre == listaSucursales[i][0]) {
//             sucursalEncontrada = listaSucursales[i];
//         }
//     }
//     return sucursalEncontrada;
// }






function setTemp(data) {
    localStorage.setItem('tempLs', JSON.stringify(data));
}


function getTemp() {
    return JSON.parse(localStorage.getItem('tempLs'));
}



function removeTemp() {
    localStorage.removeItem('tempLs');
}



function actualizarSucursal(pDatosSucursal) {
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/actualizar_sucursal',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async:false,
        data:{
            'id' : pDatosSucursal[0],
            'numero' : pDatosSucursal[1],
            'nombre' : pDatosSucursal[2],
            'tel' : pDatosSucursal[3],
            'activo' : pDatosSucursal[4]
        }
    });

    peticion.done(function(response) {

    });

    peticion.fail(function() {

    });
}



// function actualizarListaSucursales(pSucursal) {
//     let listaSucursales = obtenerDatoLocal('RegistroLS');
//     for (let i = 0; i < listaSucursales.length; i++) {
//         if (pSucursal[0] == listaSucursales[i][0]) {
//             listaSucursales[i] = pSucursal;

//         }
//     }
//     localStorage.setItem('RegistroLS', JSON.stringify(listaSucursales));
// }