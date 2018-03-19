//Obtiene datos

let botonGuardar = document.querySelector('#btnGuardar');
botonGuardar.addEventListener('click', obtenerDatos);

//Funcion de obtener datos.

function obtenerDatos() {
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

        let selectSucursal = document.querySelector('#sltSucursal');
        let sSucursal = selectSucursal.value;

        let inputNombrederuta = document.querySelector('#txtNombrederuta');
        let sNombrederuta = inputNombrederuta.value;

        let inputDescripcion = document.querySelector('#txtDescripcion');
        let sDescripcion = inputDescripcion.value;



        aRutas.push(sSucursal, sNombrederuta, sDescripcion);
        console.log(aRutas);
        aInputs.push(selectSucursal, inputNombrederuta, inputDescripcion);
        setListaRutas(aRutas);
    
        swal({
            title: 'Datos Correctos',
            text: 'Continue',
            icon: 'success',
            button: "Ok",


        })
        limpiar();

    }
    
}

//Validacion

function validar() {
    let aInputs = document.querySelectorAll('input:required', 'select:requiered');
    let berror = false;

    for (let i = 0; i < aInputs.length; i++) {
        if (aInputs[i].value === '') {
            berror = true;
            aInputs[i].classList.add('input_error');
        }
        else { aInputs[i].classList.remove('input_error'); }


    } return berror;
}




function limpiar() {
    document.querySelector('#sltSucursal').value = '';
    document.querySelector('#txtNombrederuta').value = '';
    document.querySelector('#txtDescripcion').value = '';

}

