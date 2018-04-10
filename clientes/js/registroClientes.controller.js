(function () {
  var registrarClientes = document.querySelector('#registrarClientes');
  var modificarCliente = document.querySelector('#modificarClientes');
  var imagePreview = document.querySelector('#previewFoto');
  var urlFotoPerfil = false;

  if (registrarClientes) {
    registrarClientes.addEventListener('click', guardarDatos);
  }

  if (modificarCliente) {
    modificarCliente.addEventListener('click', guardarDatos);
  }

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

  function guardarDatos() {
    let inputs = document.querySelectorAll('#formRegistroClientes input:required, #formRegistroClientes textarea:required, #formRegistroClientes select[name="genero"]');
    let error = validarInputsRequeridos(inputs);
    if(error == true ) {
      mostrarMensajeModal('error formulario');
    }
    else {
      var infoCliente = [];
      var contraseña = generarDato(0, 'contraseña');
      let tipoUsuario = '2';
      let activo = '1';

      var primerNombre = document.querySelector('.formRegistroClientes input[name="nombre"').value;
      var segundoNombre = document.querySelector('.formRegistroClientes input[name="segundoNombre"').value;
      var primerApellido = document.querySelector('.formRegistroClientes input[name="primerApellido"').value;
      var segundoApellido = document.querySelector('.formRegistroClientes input[name="segundoApellido"').value;
      var cedula = document.querySelector('.formRegistroClientes input[name="cedula"').value;
      var correo = document.querySelector('.formRegistroClientes input[name="email"').value;
      var telefono_1 = document.querySelector('.formRegistroClientes input[name="telefono1"').value;
      var telefono_2 = document.querySelector('.formRegistroClientes input[name="telefono2"').value;
      var fecha_nacimiento = document.querySelector('.formRegistroClientes input[name="fechaNacimiento"').value;
      var edad = calcularEdad(document.querySelector('.formRegistroClientes input[name="fechaNacimiento"').value);
      var genero = document.querySelector('.formRegistroClientes select[name="genero"').value;
      var provincia = document.querySelector('.formRegistroClientes input[name="provincia"').value;
      var canton = document.querySelector('.formRegistroClientes input[name="canton"').value;
      var distrito = document.querySelector('.formRegistroClientes input[name="distrito"').value;
      var direccion = document.querySelector('.formRegistroClientes textarea[name="direccion"').value;
      var fotoPerfil = urlFotoPerfil;

      if (edad < 18) {
        mostrarMensajeModal('error edad');
        return false;
      }

      let registroDoble = validarRegistroDoble(correo);
      if(registroDoble == false) {
        return false;
      }
      //cambiar el orden
      infoCliente.push(primerNombre, segundoNombre, primerApellido, segundoApellido, cedula, correo, fotoPerfil, telefono_1, telefono_2,
      fecha_nacimiento, genero, provincia, canton, distrito, direccion, tipoUsuario, activo);

      if (this.dataset.modificar) {
        var listaClientes = obtenerDatoLocal('listaClientesLS');

        for(var i = 0; i < listaClientes.length; i++) {
          if (listaClientes[i][5] === correo) {
            listaClientes[i] = infoCliente;
            if (!getTemp()) { 
              localStorage.setItem('usuario', JSON.stringify(infoCliente));
            }
          }
        }
        localStorage.setItem('listaClientesLS', JSON.stringify(listaClientes));
        mostrarMensajeModal('registro exitoso');
      } else {
        // console.log(infoCliente);
        guardarDatoLocal('listaClientes', infoCliente);
        guardarDatoLocal('listaUsuarios', infoCliente);
        guardarDatoLocal('loginUsuarios', [correo, contraseña]);
        limpiar();
        mostrarMensajeModal('registro exitoso de usuario', contraseña);
      }
    }
  }

})();

function limpiar() {
  document.querySelector('.formRegistroClientes input[name="nombre"').value = '';
  document.querySelector('.formRegistroClientes input[name="segundoNombre"').value = '';
  document.querySelector('.formRegistroClientes input[name="primerApellido"').value = '';
  document.querySelector('.formRegistroClientes input[name="segundoApellido"').value = '';
  document.querySelector('.formRegistroClientes input[name="cedula"').value = '';
  document.querySelector('.formRegistroClientes input[name="email"').value = '';
  document.querySelector('.formRegistroClientes input[name="telefono1"').value = '';
  document.querySelector('.formRegistroClientes input[name="telefono2"').value = '';
  document.querySelector('.formRegistroClientes input[name="provincia"').value = '';
  document.querySelector('.formRegistroClientes input[name="canton"').value = '';
  document.querySelector('.formRegistroClientes input[name="distrito"').value = '';
  document.querySelector('.formRegistroClientes textarea[name="direccion"').value = '';
}