var imagePreview = document.querySelector('#previewFoto');
var urlFotoPerfil = false;

function initFotoPerfil() {
    $("input.cloudinary-fileupload[type=file]").unsigned_cloudinary_upload(unsignedUser, { cloud_name: imageCloudName, tags: 'browser_uploads' })
      .bind('cloudinarydone', function(e, data) {
        imagePreview.setAttribute("src", data.result.url);
        imagePreview.style.display = 'block';
        urlFotoPerfil = data.result.url;
        document.querySelector('#inputFotoPerfil').classList.remove('inputError');
      });
  };
  initFotoPerfil();


obtenerRepartidor();

function obtenerRepartidor() {
    let sNombre = getTemp();
    let infoRepartidor = buscarRepartidor(sNombre);

    if (!sNombre && obtenerDatoLocal('usuario')) {
        infoRepartidor = obtenerDatoLocal('usuario');
    }

    document.querySelector('#txtPrimernombre').value = infoRepartidor[0];
    document.querySelector('#txtSegundonombre').value = infoRepartidor[1];
    document.querySelector('#txtPrimerapellido').value = infoRepartidor[2];
    document.querySelector('#txtSegundoapellido').value = infoRepartidor[3];
    document.querySelector('#txtIdentificacion').value = infoRepartidor[4];
    document.querySelector('#txtCorreo').value = infoRepartidor[5];
    //aqui iria la foto del perfil
    document.querySelector('#txtTelefono1').value = infoRepartidor[7];
    document.querySelector('#txtTelefono2').value = infoRepartidor[8];
    document.querySelector('#txtFechanacimiento').value = infoRepartidor[9];
    document.querySelector('#sltGenero').value = infoRepartidor[10];
    document.querySelector('#sltSucursal').value = infoRepartidor[11];
    urlFotoPerfil = infoRepartidor[6];

    if (urlFotoPerfil) {
        imagePreview.setAttribute("src", urlFotoPerfil);
        imagePreview.style.display = 'block';
    }

}

let botonActualizar = document.querySelector('#btnGuardar');
botonActualizar.addEventListener('click', obtenerActualizar);

function obtenerActualizar() {
    let inputs = document.querySelectorAll('input:required');
    let berror = validarInputsRequeridos(inputs);

    if (berror == true) {
        mostrarMensajeModal('error formulario');
    } else {
        let aRepartidores = [];
        let contraseña = generarDato(0, 'contraseña');

        let inputPrimernombre = document.querySelector('#txtPrimernombre');
        let sPrimernombre = inputPrimernombre.value;

        let inputSegundonombre = document.querySelector('#txtSegundonombre');
        let sSegundonombre = inputSegundonombre.value;

        let inputPrimerapellido = document.querySelector('#txtPrimerapellido');
        let sPrimerapellido = inputPrimerapellido.value;

        let inputSegundoapellido = document.querySelector('#txtSegundoapellido');
        let sSegundoapellido = inputSegundoapellido.value;

        let inputIdentificacion = document.querySelector('#txtIdentificacion');
        let sIdentificacion = inputIdentificacion.value;

        let inputTelefono1 = document.querySelector('#txtTelefono1');
        let sTelefono1 = inputTelefono1.value;

        let inputTelefono2 = document.querySelector('#txtTelefono2');
        let sTelefono2 = inputTelefono2.value;

        let sEdad = Calcularedad();

        let inputCorreo = document.querySelector('#txtCorreo');
        let sCorreo = inputCorreo.value;

        let fotoPerfil = urlFotoPerfil;

        let inputFechanacimiento = document.querySelector('#txtFechanacimiento');
        let sFechanacimiento = inputFechanacimiento.value;

        let selectGenero = document.querySelector('#sltGenero');
        let sGenero = selectGenero.value;

        let selectSucursal = document.querySelector('#sltSucursal');
        let sSucursal = selectSucursal.value;

        let sTipoUsuario = '5';

        let sActivo = '1';

        if(sEdad < 18) {
            mostrarMensajeModal('error edad');
            return false;
        }
        

        aRepartidores.push(sPrimernombre, sSegundonombre, sPrimerapellido, sSegundoapellido, sIdentificacion, sCorreo, fotoPerfil, sTelefono1, sTelefono2, sFechanacimiento, sGenero, sSucursal, sTipoUsuario, sActivo);          
        actualizarListaRepartidores(aRepartidores);
        actualizarListaUsuarios(aRepartidores);
        removeTemp();
        swal({
            title: "Información registrada correctamente",
            text: "Puede proceder",
            icon: "success",
            button: {
              text: "OK",
              className: "button",
            },
        }).then(() => {
            window.location.href = 'listar_repartidor.html';
        });
    }
}



function Calcularedad() {
    let hoy = new Date();
    let fecha = document.querySelector('#txtFechanacimiento').value;
    let nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad;
}

function validarEdad(pedad) {
    let eerror = false;
    let dato = document.querySelector('#txtFechanacimiento').value;
    pedad = Calcularedad(dato);

    if (pedad < 18) {
        eerror = true;
    }
    return eerror;
}