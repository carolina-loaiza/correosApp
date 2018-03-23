let botonActualizar = document.querySelector('#btnActualizar');
botonActualizar.addEventListener('click', registrarDatosActualizados);

obtenerTarifa();

function agregarSucursales() {
    let lista = obtenerDatoLocal('RegistroLS');
    for(let i = 0; i < lista.length; i++) {
        let opcion = document.createElement('option');
        opcion.value = lista[i][0];
        opcion.innerText = lista[i][0];
        document.getElementById('opSucursal').appendChild(opcion);
    }
}

agregarSucursales();

function obtenerTarifa() {
    let sSucursal = getTemp();
    let infoTarifa = buscarTarifaPorSucursal(sSucursal);
    /*La tarifa de peso debe de estra disabled cuando sea
    el encargado de sucursal quien modifique*/ 
    document.querySelector('#numTarifaPeso').value = infoTarifa[3];
    document.querySelector('#opSucursal').value = infoTarifa[0];
    document.querySelector('#numTarifaKm').value = infoTarifa[4];
}

function registrarDatosActualizados() {
    let infoTarifa = [];

    let tarifaPeso = document.querySelector('#numTarifaPeso').value;
    let sucursal = document.querySelector('#opSucursal').value;
    let tarifaKm = document.querySelector('#numTarifaKm').value;
    let sActivo = 1;

    infoTarifa.push(sucursal, tarifaPeso, tarifaKm, sActivo);
    actualizarTarifa(infoTarifa);
    removeTemp();
    window.location.href = 'index.html'


}

