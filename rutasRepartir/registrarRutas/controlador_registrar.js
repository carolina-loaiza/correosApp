//Obtiene datos

let botonGuardar = document.querySelector('#btnGuardar');
botonGuardar.addEventListener('click', obtenerDatos);

//Funcion de obtener datos.

function obtenerDatos() {
    let berror = validarInputsRequeridos(document.querySelectorAll('input:required', 'select:requiered'));

    if (berror == true) {
        mostrarMensajeModal('error formulario');
    }
    else {

        let aRutas = [];
        let aInputs = [];
        let valido = true;

        let selectSucursal = document.querySelector('#sltSucursal');
        let sSucursal = selectSucursal.value;

        let inputNombrederuta = document.querySelector('#txtNombrederuta');
        let sNombrederuta = inputNombrederuta.value;

        let inputDescripcion = document.querySelector('#txtDescripcion');
        let sDescripcion = inputDescripcion.value;



        aRutas.push(sSucursal, sNombrederuta, sDescripcion);
        console.log(aRutas);
        aInputs.push(selectSucursal, inputNombrederuta, inputDescripcion);
        guardarDatoLocal('listaRutasLS', aRutas);
        mostrarMensajeModal('registro exitoso');
        limpiar();

    }
    
}

function limpiar() {
    document.querySelector('#sltSucursal').value = '';
    document.querySelector('#txtNombrederuta').value = '';
    document.querySelector('#txtDescripcion').value = '';

}

