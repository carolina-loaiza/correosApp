let botonActualizar = document.querySelector('#btnActualizar');
botonActualizar.addEventListener('click', registrarDatosActualizados);

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
//mete las sucursales en el select de registro 
function agregarSucursales() {
   let lista = obtenerDatoLocal('RegistroLS');
   for(let i = 0; i < lista.length; i++) {
       let opcion = document.createElement('option');
       opcion.value = lista[i][0];
       opcion.innerText = lista[i][0];
       document.getElementById('opSucursal').appendChild(opcion);
   }
}

agregarSucursales();

obtenerEncargado();


function obtenerEncargado() {
    let sCorreo = getTemp();
    let infoEncargado = buscarEncargadoPorCorreo(sCorreo);

    if (!sCorreo && obtenerDatoLocal('usuario')) {
        infoEncargado = obtenerDatoLocal('usuario');
    }

    document.querySelector('#txtPrimerNombre').value = infoEncargado[0];
    document.querySelector('#txtSegundoNombre').value = infoEncargado[1];
    document.querySelector('#txtPrimerApellido').value = infoEncargado[2];
    document.querySelector('#txtSegundoApellido').value = infoEncargado[3];
    document.querySelector('#txtId').value = infoEncargado[4];
    document.querySelector('#txtCorreo').value = infoEncargado[5];
    document.querySelector('#txtCorreo').disabled = true;
    document.querySelector('#txtTel1').value = infoEncargado[6];
    document.querySelector('#txtTel2').value = infoEncargado[7];
    //edad no porque si la quiere modificar da igual si sale o no por el tipo de input
    document.querySelector('#opGenero').value = infoEncargado[9];
    document.querySelector('#opSucursal').value = infoEncargado[10];
}

function registrarDatosActualizados() {
    let infoEncargado = [];

    let primerNombre = document.querySelector('#txtPrimerNombre').value;
        let segundoNombre = document.querySelector('#txtSegundoNombre').value;
        let primerApellido = document.querySelector('#txtPrimerApellido').value;
        let segundoApellido = document.querySelector('#txtSegundoApellido').value;
        let cedula = document.querySelector('#txtId').value;
        let correo = document.querySelector('#txtCorreo').value;
        let telefono_1 = document.querySelector('#txtTel1').value;
        let telefono_2 = document.querySelector('#txtTel2').value;
        let edad = calcularEdad(document.querySelector('#dtFecha').value);
        let genero = document.querySelector('#opGenero').value;
        let sucursal = document.querySelector('#opSucursal').value;
        let fotoPerfil = urlFotoPerfil;
        let sTipoUsuario = '4';
        let sActivo = '1';

        infoEncargado.push(primerNombre, segundoNombre, primerApellido, segundoApellido,  
        cedula, correo, telefono_1, telefono_2, edad, genero, sucursal, fotoPerfil, sTipoUsuario, sActivo);
        actualizarEncargado(infoEncargado);
        removeTemp();
        window.location.href = 'index_listar.html';
}
