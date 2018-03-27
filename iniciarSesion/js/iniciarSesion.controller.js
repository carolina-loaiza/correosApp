(function() {
  var checkUsuario = document.querySelector('#checkUsuario');
  var sesionEmail = document.querySelector('#sesionEmail');
  var sesionPassword = document.querySelector('#sesionPassword');
  checkUsuario.addEventListener('click', validarDatosIngreso);

  sesionEmail.addEventListener('keyup', quitarMensajeError);
  sesionPassword.addEventListener('keyup', quitarMensajeError);

  //if (obtenerDatoLocal('listaUsuarios').length === 0 && obtenerDatoLocal('loginUsuarios').length === 0) {
    // Datos usuarios de prueba
    var listaUsuarios = [
      ["Felipe","","Castro","","213123123","ocoto@correos.cr","123123123","",26,"masculino","Sucursal #1",false,"4","1"],
      ["Alvarado","","Castro","","213123123","alva@correos.cr","123123123","",26,"masculino","Sucursal #2",false,"4","1"],
      ["Marta","","Castro","","213123123","marta@correos.cr","123123123","",26,"masculino","Sucursal #2",false,"5","1"],
      ["Carla", "", "Arias", "", "213123123", "carla@gmail.com", "23123123123", "", "1999-11-11", "femenino", "lugar de habitación", false, "2", "1"],
      ["Esteban", "", "Ramirez", "", "213123123", "esteban@gmail.com", "23123123123", "", "1999-11-11", "femenino", "lugar de habitación", false, "2", "1"],
      ["Carlos", "", "Ramirez", "", "213123123", "carlos@aduanas.cr", "23123123123", "", "1999-11-11", "masculino", "lugar de habitación", false, "3", "1"]
    ];
    // Datos de inicar sesion de prueba
    var loginUsuarios = [
      ["ocoto@correos.cr", "12345"],
      ["alva@correos", "12345"],
      ["marta@correos.cr", "12345"],
      ["carla@gmail.com", "12345"],
      ["esteban@gmail.com", "12345"],
      ["carlos@aduanas.cr", "12345"]
    ];

    listaUsuarios.forEach(usuario => guardarDatoLocal('listaUsuarios', usuario));
    loginUsuarios.forEach(loginData => guardarDatoLocal('loginUsuarios', loginData));
  //}


  function validarDatosIngreso() {
    var datosValidos = false;
    var loginUsuarios = obtenerDatoLocal('loginUsuarios');
    var error = validarInputsRequeridos([sesionEmail, sesionPassword]);
    if(error == true) {
      mostrarMensajeModal('error formulario');
      return false;
    }

    loginUsuarios.forEach(log => {
      if(log[0] === sesionEmail.value && log[1] === sesionPassword.value) {
        obtenerUsuario(log[0]);
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

  function obtenerUsuario(email) {
    var usuario = false;
    usuario = obtenerDatoLocal('listaUsuarios').filter(usuario => {
      var activo = usuario.length-1;
      return usuario[5] === email && usuario[activo] === '1';
    });

    if (usuario[0] && usuario[0].length != 0) {
      var tipoUsuario = usuario[0].length-2;
      localStorage.setItem('usuario', JSON.stringify(usuario[0]));
      redireccionarUsuario(usuario[0][tipoUsuario]);
    } else {
      mostrarMensajeModal('error formulario');
    }
  }

  function redireccionarUsuario(tipoUsuario) {
    console.log(tipoUsuario)
    switch (tipoUsuario) {
      case '1':
        window.location.href = '../clientes/listarClientes.html';
        break;
      case '2':
        window.location.href = '../paquetes/alertarPaquete.html';
        break;
      case '3':
        window.location.href = '../paquetes/listarPaquetes.html';
        break;
      case '4':
        window.location.href = '../paquetes/listarPaquetes.html';
        break;
      case '5':
        window.location.href = '../paquetes/listarPaquetes.html';
        break;
      default:
        mostrarMensajeModal('error formulario');
        break;
    };
  }
})()