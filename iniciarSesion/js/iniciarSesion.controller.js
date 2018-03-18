(function() {
  var checkUsuario = document.querySelector('#checkUsuario');
  var sesionEmail = document.querySelector('#sesionEmail');
  var sesionPassword = document.querySelector('#sesionPassword');
  checkUsuario.addEventListener('click', validarDatosIngreso);

  sesionEmail.addEventListener('keyup', quitarMensajeError);
  sesionPassword.addEventListener('keyup', quitarMensajeError);

  function validarDatosIngreso() {
    var datosValidos = false;

    if (sesionEmail.value === '' || sesionPassword.value === '') {
      mostarMensajeError();
      return false;
    };

    loginUsuarios.forEach(log => {
      if(log[2] === sesionEmail.value && log[3] === sesionPassword.value) {
        obtenerUsuario(log[1]);
        datosValidos = true;
        return true;
      }
    });

    if (!datosValidos) {
      mostarMensajeError();
    }
  }

  function mostarMensajeError() {
    sesionPassword.classList.add('inputError');
    sesionEmail.classList.add('inputError');
  }

  function quitarMensajeError() {
    this.classList.remove('inputError');
  }

  function obtenerUsuario(id) {
    var usuario = false;

    usuario = dataUsuarios.filter(usuario => usuario[0] === id);

    if (usuario) {
      setDataStorage('usuario', usuario);
    } else {
      mostarMensajeError();
    }
  }
})()