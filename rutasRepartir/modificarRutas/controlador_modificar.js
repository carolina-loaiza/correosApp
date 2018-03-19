
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
    let berror = validar();

    if (berror == true) {
        swal({
            title: "Ocurrió un error",
            text: "Faltan los datos de los campos resaltados",
            icon: "error",
            button: "Ok",
            //Mensaje de error
        });
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
        swal({
            title: 'Datos Correctos',
            text: 'Continue',
            icon: 'success',
            button: "Ok",


        });
        window.location,href='../listar y buscar/listado.html';

    }
    
}

//Validacion

function validar() {
    let aInputs = document.querySelectorAll('input:required','select:requiered');
    let berror = false;

    for (let i = 0; i < aInputs.length; i++) {
        if (aInputs[i].value === '') {
            berror = true;
            aInputs[i].classList.add('input_error');
        }
        else { aInputs[i].classList.remove('input_error'); }


    } return berror;
}


//limpia pantalla

/*function limpiar() {
    document.querySelector('#sltSucursal').value="";
    document.querySelector('#txtNombrederuta').value = "";
    document.querySelector('#txtDescripcion').value = "";
    
}*/







