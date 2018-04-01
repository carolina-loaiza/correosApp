obtenerTarjeta();

function obtenerTarjeta(){
    let sNumero=getTemp();
    let infoTarjeta=buscarTarjeta(sNumero);

    console.log(infoTarjeta);
    
    document.querySelector('#txtTitular').value=infoTarjeta[1];
    document.querySelector('#txtNumero').value=infoTarjeta[2];
    document.querySelector('#txtmm').value=infoTarjeta[3];
    document.querySelector('#txtyy').value=infoTarjeta[4];
    document.querySelector('#txtcvv').value=infoTarjeta[5];
}

let botonActualizar=document.querySelector('#btnGuardar');
botonActualizar.addEventListener('click',obtenerActualizar);

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

function obtenerActualizar(){

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

        let nombreTitutar = document.querySelector('#txtTitular').value;
        let numeroTarjeta = document.querySelector('#txtNumero').value;
        let year = document.querySelector('#txtyy').value;
        let month = document.querySelector('#txtmm').value;
        let cvv = document.querySelector('#txtcvv').value;

        aNuevaTarjeta.push(nombreTitutar, numeroTarjeta, year, month, cvv, '1');
        actualizarlistaTarjetas(aNuevaTarjeta);
        removeTemp();
        limpiar();

        console.log(aNuevaTarjeta);

        swal({
            title: "Convenio registrado exitosamente",
            text: "Ahora puedes hacer envíos de un nuevo documento",
            icon: "success",
            button: "OK",
        }).then(() => {
            window.location.href = '../Tarjetas/tarjetas.html';
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
