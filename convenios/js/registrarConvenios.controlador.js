let botonGuardar = document.querySelector("#btnGuardar");
botonGuardar.addEventListener('click', obtenerConvenio);


function obtenerConvenio(){
    let inputs = document.querySelectorAll('input:required');
    let bError = validarInputsRequeridos(inputs);
    if (bError == true) {
        mostrarMensajeModal('error formulario')
    }
    else {
        let aNuevoConvenio = [];
        let valido = true;
        let activo = '1';

        let nombre = document.querySelector('#txtNombre').value;
        let descripcion = document.querySelector('#txtDescripcion').value;
        let id = document.querySelector('#numId').value;

        aNuevoConvenio.push(nombre, descripcion, activo, id);
        guardarDatoLocal('listaConveniosLS', aNuevoConvenio); 

        limpiar();

        mostrarMensajeModal('registro exitoso');
    }
}
function limpiar(){
    document.querySelector('#txtNombre').value = "";
    document.querySelector('#txtDescripcion').value = "";
}