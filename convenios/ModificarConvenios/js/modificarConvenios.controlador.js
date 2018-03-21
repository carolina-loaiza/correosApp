obtenerConvenio();

function obtenerConvenio(){
    let sNombre=getTemp();
    let infoConvenio=buscarConvenio(sNombre);

    console.log(infoConvenio);
    
    document.querySelector('#txtNombre').value=infoConvenio[0];
    document.querySelector('#txtDescripcion').value=infoConvenio[1];
}

let botonActualizar=document.querySelector('#btnGuardar');
botonActualizar.addEventListener('click',obtenerActualizar);

function obtenerActualizar() {
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

        aNuevoConvenio.push(nombre, descripcion, '1');
        actualizarListaConvenios(aNuevoConvenio);
        removeTemp();
        console.log(aNuevoConvenio);

        swal({
            title: "Convenio registrado exitosamente",
            text: "Ahora puedes hacer envíos de un nuevo documento",
            icon: "success",
            button: "OK",
          });

    }
}
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