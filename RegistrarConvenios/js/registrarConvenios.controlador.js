let botonGuardar = document.querySelector("#btnGuardar");
botonGuardar.addEventListener('click', obtenerConvenio);

function validarDatos(){
    let inputs = document.querySelectorAll('input:required,textarea:required');
    let bError = false;

    for(let i=0; i<inputs.length; i++){
        if(inputs[i].value == ''){
            bError = true;
            inputs[i].classList.add('error');
        }
        else{
            inputs[i].classList.remove('error');
        }
    }
    return bError;
}

function obtenerConvenio(){

    let bError = validarDatos();
    if (bError == true) {
        swal({
            title: "Ocurrió un error",
            text: "Por favor verifique los campos resaltados",
            icon: "error",
            button: "OK",
          });
    }
    else {
        let aNuevoConvenio = [];
        let valido = true;

        let nombre = document.querySelector('#txtNombre').value;
        let descripcion = document.querySelector('#txtDescripcion').value;

        aNuevoConvenio.push(nombre, descripcion, 'activo');
        setNuevosConvenios(aNuevoConvenio);

        console.log(aNuevoConvenio);

        swal({
            title: "Mensaje enviado correctamente",
            text: "En breve nos contactaremos con usted",
            icon: "success",
            button: "OK",
          });
    }
}