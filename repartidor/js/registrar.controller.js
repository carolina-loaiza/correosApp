//Obtiene datos

let botonGuardar = document.querySelector('#btnGuardar');
botonGuardar.addEventListener('click', obtenerDatos);

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

function agregarSucursales() {
    let lista = obtenerDatoLocal('RegistroLS');
    for(let i = 0; i < lista.length; i++) {
        let opcion = document.createElement('option');
        opcion.value = lista[i][0];
        opcion.innerText = lista[i][0];
        document.getElementById('sltSucursal').appendChild(opcion);
    }
}

agregarSucursales();

//Funcion de obtener datos.

function obtenerDatos() {
    let inputs = document.querySelectorAll('input:required');
    let berror = validarInputsRequeridos(inputs);

    if (berror == true) {
        mostrarMensajeModal('error formulario');
    }
    else {

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
        

            aRepartidores.push(sPrimernombre, sSegundonombre, sPrimerapellido, sSegundoapellido, sIdentificacion, sCorreo, sTelefono1, sTelefono2, sFechanacimiento, sGenero, sSucursal, fotoPerfil, sTipoUsuario, sActivo);
 
            guardarDatoLocal('listaRepartidoresLS',aRepartidores);
            guardarDatoLocal('listaUsuarios', aRepartidores);
            guardarDatoLocal('loginUsuarios', [sCorreo, contraseña]);
            mostrarMensajeModal('registro exitoso de usuario', contraseña);
        

    }
}

//Validacion




function Calcularedad() {
    let hoy = new Date();
    let fecha = document.querySelector('#txtFechanacimiento').value;
    let nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad;
}



function limpiar() {
    document.querySelector('#txtPrimernombre').value = "";
    document.querySelector('#txtSegundonombre').value = "";
    document.querySelector('#txtPrimerapellido').value = "";
    document.querySelector('#txtSegundoapellido').value = "";
    document.querySelector('#txtIdentificacion').value = "";
    document.querySelector('#txtCorreo').value = "";
    document.querySelector('#txtTelefono1').value = "";
    document.querySelector('#txtTelefono2').value = "";
    document.querySelector('#txtFechanacimiento').value = "";
}

