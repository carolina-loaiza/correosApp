function buscarSucursal(pNombre) {
    let listaSucursales = obtenerDatoLocal('RegistroLS');
    let sucursalEncontrada = [];
    for (let i = 0; i < listaSucursales.length; i++) {
        if (pNombre == listaSucursales[i][0]) {
            sucursalEncontrada = listaSucursales[i];
        }
    }
    return sucursalEncontrada;
}




function setTemp(data) {
    localStorage.setItem('tempLs', JSON.stringify(data));
}


function getTemp() {
    return JSON.parse(localStorage.getItem('tempLs'));
}



function removeTemp() {
    localStorage.removeItem('tempLs');
}



function actualizarListaSucursales(pSucursal) {
    let listaSucursales = obtenerDatoLocal('RegistroLS');
    for (let i = 0; i < listaSucursales.length; i++) {
        if (pSucursal[0] == listaSucursales[i][0]) {
            listaSucursales[i] = pSucursal;

        }
    }
    localStorage.setItem('RegistroLS', JSON.stringify(listaSucursales));
}