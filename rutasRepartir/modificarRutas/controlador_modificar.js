
//obtines
    obtenerRuta();

    function obtenerRuta(){
        let sNombre=getTemp();
        let infoRuta=buscarRuta(sNombre);

        console.log(infoRuta);

        document.querySelector('#sltSucursal').value=infoRuta[0];
        document.querySelector('#txtNombrederuta').value=infoRuta[1];
        document.querySelector('#txtDescripcion').value=infoRuta[2];



      
    }
let botonActualizar=document.querySelector('#btnGuardar');
botonActualizar.addEventListener('click',obtenerActualizar);



function obtenerActualizar() {
    let berror = validarInputsRequeridos(document.querySelectorAll('input:required','select:requiered'));

    if (berror == true) {
        mostrarMensajeModal('error formulario');
    }
    else {

        let aRutas = [];
        let aInputs = [];
        let valido = true;

        let selectSucursal=document.querySelector('#sltSucursal');
        let sSucursal=selectSucursal.value;

        let inputNombrederuta = document.querySelector('#txtNombrederuta');
        let sNombrederuta = inputNombrederuta.value;

        let inputDescripcion = document.querySelector('#txtDescripcion');
        let sDescripcion = inputDescripcion.value;

       

        aRutas.push( sSucursal,sNombrederuta,sDescripcion);
        console.log(aRutas);
        aInputs.push(selectSucursal,inputNombrederuta, inputDescripcion);
        actualizarListaRutas(aRutas);
        removeTemp();
        mostrarMensajeModal('registro exitoso');
        window.location.href='../listarRutas/listado.html';
    } 
    
}


//limpia pantalla

/*function limpiar() {
    document.querySelector('#sltSucursal').value="";
    document.querySelector('#txtNombrederuta').value = "";
    document.querySelector('#txtDescripcion').value = "";
    
}*/







