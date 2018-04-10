let botonActualizar = document.querySelector('#btnActualizar');
botonActualizar.addEventListener('click', registrarDatosActualizados);

obtenerCourier();

function obtenerCourier() {
    let sCourier = getTemp();
    let infoCourier = buscarCourierPorNombre(sCourier);

    document.querySelector('#numCourier').value = infoCourier[0];
    document.querySelector('#numCourier').disabled = true;    
    document.querySelector('#txtNombre').value = infoCourier[1];
}

function registrarDatosActualizados() {
    let courier = [];

    let numero = document.querySelector('#numCourier').value;

    let nombre = document.querySelector('#txtNombre').value;
    let sActivo = 1;

    courier.push(numero, nombre, sActivo);
    actualizarCourier(courier);
    removeTemp();
    window.location.href = 'index.html';
}
