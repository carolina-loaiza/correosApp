

function buscarTarifaPorSucursal(pSucursal) {
    let listaTarifas = obtenerDatoLocal('RegistroLS');
    let sucursalEncontrada = [];

    for(let i = 0; i < listaTarifas.length; i++) {
        if(pSucursal == listaTarifas[i][0]) {
            sucursalEncontrada = listaTarifas[i];
            break;
        }
    }
    return sucursalEncontrada;
}

function setTemp(data) {
    localStorage.setItem('tempLS', JSON.stringify(data));
}

function getTemp() {
    return JSON.parse(localStorage.getItem('tempLS'));
}

function removeTemp() {
    localStorage.removeItem('tempLS');
}


//modificar!!
function actualizarTarifa(pInfoTarifa) {
    let listaTarifas = obtenerDatoLocal('RegistroLS');

    for(let i = 0; i < listaTarifas.length; i++) {
        if(pInfoTarifa[0] == listaTarifas[i][0]) {
            listaTarifas[i][0] = pInfoTarifa[0];
            listaTarifas[i][3] = pInfoTarifa[1];
            listaTarifas[i][4] = pInfoTarifa[2];
            listaTarifas[i][5] = pInfoTarifa[3];
        }
    }
    localStorage.setItem('RegistroLS', JSON.stringify(listaTarifas));
}