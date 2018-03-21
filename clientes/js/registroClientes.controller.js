(function () {
  var registrarClientes = document.querySelector('#registrarClientes');
  var imagePreview = document.querySelector('#previewFoto');
  var urlFotoPerfil = false;

  registrarClientes.addEventListener('click', guardarDatos);

  function initFotoPerfil() {
    $("input.cloudinary-fileupload[type=file]").unsigned_cloudinary_upload(unsignedUser, { cloud_name: imageCloudName, tags: 'browser_uploads' })
      .bind('cloudinarydone', function(e, data) {
        imagePreview.setAttribute("src", data.result.url);
        imagePreview.style.display = 'block';
        urlFotoPerfil = data.result.url;
        document.querySelector('#inputFotoPerfil').classList.remove('inputError');
      });
  };

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
      var direccion = document.querySelector('.formRegistroClientes textarea[name="direccion"').value;
      var fotoPerfil = urlFotoPerfil;

      if (edad < 18) {
        mostrarMensajeModal('error edad');
        return false;
      }
      
      infoCliente.push(primerNombre, segundoNombre, primerApellido, segundoApellido, cedula, correo, telefono_1, telefono_2
        , fecha_nacimiento, genero, direccion, fotoPerfil, tipoUsuario, activo);

      guardarDatoLocal('listaUsuarios', infoCliente);
      guardarDatoLocal('loginUsuarios', [correo, contraseña]);
      mostrarMensajeModal('registro exitoso de usuario', contraseña);
    }
  }

  initFotoPerfil();

})();