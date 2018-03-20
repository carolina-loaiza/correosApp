let botonActualizar = document.querySelector('#btnActualizar');
botonActualizar.addEventListener('click', registrarDatosActualizados);


obtenerEncargado();

function obtenerEncargado() {
    let sCorreo = getTemp();
    let infoEncargado = buscarEncargadoPorCorreo(sCorreo);

    document.querySelector('#txtPrimerNombre').value = infoEncargado[0];
    document.querySelector('#txtSegundoNombre').value = infoEncargado[1];
    document.querySelector('#txtPrimerApellido').value = infoEncargado[2];
    document.querySelector('#txtId').value = infoEncargado[3];
    document.querySelector('#txtCorreo').value = infoEncargado[4];
    document.querySelector('#txtCorreo').disabled = true;
    document.querySelector('#txtTel1').value = infoEncargado[5];
    document.querySelector('#txtTel2').value = infoEncargado[6];
    //edad no porque si la quiere modificar da igual si sale o no por el tipo de input
    document.querySelector('#opGenero').value = infoEncargado[8];
    document.querySelector('#opSucursal').value = infoEncargado[9];
}

function calcularEdad() {
    let hoy = new Date();
    let fecha = document.querySelector('#dtFecha').value;
    let nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad;
}

function registrarDatosActualizados() {
    let infoEncargado = [];

    let primerNombre = document.querySelector('#txtPrimerNombre').value;
        let segundoNombre = document.querySelector('#txtSegundoNombre').value;
        let primerApellido = document.querySelector('#txtPrimerApellido').value;
        let cedula = document.querySelector('#txtId').value;
        let correo = document.querySelector('#txtCorreo').value;
        let telefono_1 = document.querySelector('#txtTel1').value;
        let telefono_2 = document.querySelector('#txtTel2').value;
        let edad = calcularEdad();
        let genero = document.querySelector('#opGenero').value;
        let sucursal = document.querySelector('#opSucursal').value;

        infoEncargado.push(primerNombre, segundoNombre, primerApellido, 
        cedula, correo, telefono_1, telefono_2, edad, genero, sucursal);
        actualizarEncargado(infoEncargado);
        removeTemp();
        window.location.href = 'index.html';
}

