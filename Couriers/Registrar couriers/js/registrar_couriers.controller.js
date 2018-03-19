document.querySelector('#btnRegistrar').addEventListener('click', obtenerDatos);

function validar() {
    let input = document.querySelectorAll('input:required');
    let error = false;

    for(let i = 0; i < input.length; i++) {
        if(input[i].value == '') {
            error = true;
            input[i].classList.add('error');
        }
        else {
            input[i].classList.remove('error');
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
        let courier = [];

        let nombre = document.querySelector('#txtNombre').value;


        courier.push(nombre);
        setInfoCouriers(courier);

        swal({
            title: "Información registrada correctamente",
            text: "Puede proceder",
            icon: "success",
            button: "OK",
          });
    }//else
}//function