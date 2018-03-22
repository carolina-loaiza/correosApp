let btnRegistro = document.querySelector('#btnGuardar');

btnRegistro.addEventListener('click', obtenerDatosTarjeta);

function validarDatos(){

    let inputs = document.querySelectorAll('input:required');
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

function obtenerDatosTarjeta(){

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
        let aNuevaTarjeta = [];
        let valido = true;
        let tarjetaId = Math.random().toString(36).substring(8);

        let nombreTitutar = document.querySelector('#txtTitular').value;
        let numeroTarjeta = document.querySelector('#txtNumero').value;
        let year = document.querySelector('#txtyy').value;
        let month = document.querySelector('#txtmm').value;
        let cvv = document.querySelector('#txtcvv').value;

        aNuevaTarjeta.push(tarjetaId, nombreTitutar, numeroTarjeta, year, month, cvv,'1',  '1');
        setNuevasTarjetas(aNuevaTarjeta);
        limpiar();

        console.log(aNuevaTarjeta);

        swal({
            title: "Método de pago registrado exitosamente",
            text: "Ahora puedes hacer uso de tu nuevo método",
            icon: "success",
            button: "OK",
          });
        }
}
function limpiar(){
    document.querySelector('#txtTitular').value = '';
    document.querySelector('#txtNumero').value = '';
    document.querySelector('#txtyy').value = '';
    document.querySelector('#txtmm').value = '';
    document.querySelector('#txtcvv').value = '';
}
