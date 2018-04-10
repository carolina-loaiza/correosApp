
function buscarTipo(pNombre) {
    let listaArticulos = obtenerDatoLocal('RegistroArticulosLS');
    let articuloEncontrado = [];
    for (let i = 0; i < listaArticulos.length; i++) {
        if (pNombre == listaArticulos[i][0]) {
            articuloEncontrado = listaArticulos[i];
        }
    }
    return articuloEncontrado;
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



function actualizarListaArticulos(pDatosRegistro) {
    let listaArticulos = obtenerDatoLocal('RegistroArticulosLS');
    for (let i = 0; i < listaArticulos.length; i++) {
        if (pDatosRegistro[0] == listaArticulos[i][0]) {
            listaArticulos[i] = pDatosRegistro;
        }
    }
    localStorage.setItem('RegistroArticulosLS', JSON.stringify(listaArticulos));
}