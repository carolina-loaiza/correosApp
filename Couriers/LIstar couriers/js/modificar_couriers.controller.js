let botonActualizar = document.querySelector('#btnActualizar');
botonActualizar.addEventListener('click', registrarDatosActualizados);

obtenerCourier();

function obtenerCourier() {
    let sCourier = getTemp();
    let infoCourier = buscarCourierPorNombre(sCourier);

    document.querySelector('#txtNombre').value = infoCourier;
}

function registrarDatosActualizados() {
    let courier = [];

    let nombre = document.querySelector('#txtNombre').value;

    courier.push(nombre);
    actualizarCourier(courier);
    removeTemp();
    window.location.href = 'index.html';
}
