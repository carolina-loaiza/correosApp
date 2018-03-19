(function() {
  var checkUsuario = document.querySelector('#checkUsuario');
  var sesionEmail = document.querySelector('#sesionEmail');
  var sesionPassword = document.querySelector('#sesionPassword');
  checkUsuario.addEventListener('click', validarDatosIngreso);

  sesionEmail.addEventListener('keyup', quitarMensajeError);
  sesionPassword.addEventListener('keyup', quitarMensajeError);

  if (obtenerDatoLocal('dataUsuarios').length === 0 && obtenerDatoLocal('loginUsuarios').length === 0) {
    // Datos usuarios de prueba
    var dataUsuarios = [
      ["u132","primer nombre", "segundo nombre", "primer apellido", "segundo apellido", "cédula", "teléfono 1", "teléfono 2", "foto", "correo@electrónico.com", "fecha de nacimiento", "género", "lugar de habitación", 1],
      ["u234","primer nombre", "segundo nombre", "primer apellido", "segundo apellido", "cédula", "teléfono 1", "teléfono 2", "foto", "correo@electrónico.gf", "fecha de nacimiento", "género", "lugar de habitación", 2],
      ["u334","primer nombre", "segundo nombre", "primer apellido", "segundo apellido", "cédula", "teléfono 1", "teléfono 2", "foto", "correo@electrónico.cr", "fecha de nacimiento", "género", "lugar de habitación", 3]
    ];
    // Datos de inicar sesion de prueba
    var loginUsuarios = [
      ["l134", "u132", "correo@electronico.com", "contraseña"],
      ["l243", "u234", "correo@electronico.gf", "contraseña"],
      ["l323", "u334", "correo@electronico.cr", "contraseña"],
    ];

    dataUsuarios.forEach(usuario => guardarDatoLocal('dataUsuarios', usuario));
    loginUsuarios.forEach(loginData => guardarDatoLocal('loginUsuarios', loginData));
  }


  function validarDatosIngreso() {
    var datosValidos = false;
    var listaUsuarios = obtenerDatoLocal('loginUsuarios');
    var error = validarInputsRequeridos([sesionEmail, sesionPassword]);
    if(error == true) {
      mostrarMensajeModal('error formulario');
      return false;
    }

    listaUsuarios.forEach(log => {
      if(log[2] === sesionEmail.value && log[3] === sesionPassword.value) {
        obtenerUsuario(log[1]);
        datosValidos = true;
        return true;
      }
    });

    if (!datosValidos) {
      mostarMensajeError();
      mostrarMensajeModal('error formulario');
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

    usuario = obtenerDatoLocal('dataUsuarios').filter(usuario => usuario[0] === id);

    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
    } else {
      mostarMensajeError();
      mostrarMensajeModal('error formulario');
    }
  }
})()