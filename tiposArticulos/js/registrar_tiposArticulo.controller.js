//////REGISTRAR tipos de articulo


document.querySelector('#btnRegistrar').addEventListener('click', registrar);

function registrar() {
    let inputs = document.querySelectorAll('input:required');
    let error = validarInputsRequeridos(inputs);

    if (error == true) {
        mostrarMensajeModal('error formulario');
    } else {
        let aRegistroArticulos = [];
        let articuloID = Math.random().toString(36).substring(8);


        //let sUsr = 'adrian';        
        let sCategoria = document.querySelector('#txtCategoria').value;
        let sImpuestos = document.querySelector('#txtImpuestos').value;
        let sActivo = '1';


        aRegistroArticulos = [articuloID, sCategoria, sImpuestos, sActivo];

        guardarDatoLocal('RegistroArticulosLS', aRegistroArticulos);
        limpiar();
        mostrarMensajeModal('registro exitoso');
    }
}

    function limpiar() {
        document.querySelector('#txtCategoria').value = '';
        document.querySelector('#txtImpuestos').value = '';
}