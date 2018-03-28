document.querySelector('#btnRegistrar').addEventListener('click', obtenerDatos);

function validar() {
    let inputs = document.querySelectorAll('input:required');
    let error = false;

    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value == '') {
            error = true;
            inputs[i].classList.add('error');
        }
        else {
            inputs[i].classList.remove('error');
        }//else statement
    }//for loop
    return error;
}//function

function obtenerDatos() {
    let error = validar();
    if(error == true) {
        swal({
            title: "Ocurrió un error",
            text: "Por favor ingrese un nombre de courier",
            icon: "error",
            button: "OK",
          });
    }//if
    else {
        let couriers = [];

        let numero = document.querySelector('#numCourier').value;
        let nombre = document.querySelector('#txtNombre').value;
        let sActivo = '1';


        couriers.push(numero, nombre, sActivo);
        guardarDatoLocal('listaCouriersLS', couriers);
        //con el servicio global las funciones de get y set ya no son necesarias
        //setInfoCouriers(couriers);

        limpiar()
;        swal({
            title: "Información registrada correctamente",
            text: "Puede proceder",
            icon: "success",
            button: "OK",
          });
    }//else
}//function

function limpiar() {
    document.querySelector('#txtNombre').value = '';
}

