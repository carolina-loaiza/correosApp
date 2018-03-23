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
      ["nombre","","apellido","","213123123","k@gmail.com","123123123","",26,"masculino","Sucursal #1",false,"4","1"],
      ["nombre","","apellido","","213123123","g@gmail.com","123123123","",26,"masculino","Sucursal #2",false,"4","1"],
      ["encargadoAduana","","apellido","","213123123","f@gmail.com","123123123","",26,"masculino","Sucursal #2",false,"3","1"],
      ["Carla", "", "Arias", "", "213123123", "test02@gmail.com", "23123123123", "", "1999-11-11", "femenino", "lugar de habitación", false, "2", "1"],
      ["Maria", "", "Castro", "", "213123123", "test01@gmail.com", "23123123123", "", "1999-11-11", "femenino", "lugar de habitación", false, "2", "1"],
      ["Marta", "", "Ramirez", "", "213123123", "test03@gmail.com", "23123123123", "", "1999-11-11", "femenino", "lugar de habitación", false, "2", "1"],
      ["Esteban", "", "Ramirez", "", "213123123", "test04@gmail.com", "23123123123", "", "1999-11-11", "femenino", "lugar de habitación", false, "1", "1"],
      ["Carlos", "", "Ramirez", "", "213123123", "test05@gmail.com", "23123123123", "", "1999-11-11", "masculino", "lugar de habitación", false, "3", "1"]
    ];
    // Datos de inicar sesion de prueba
    var loginUsuarios = [
      ["k@gmail.com", "contraseña"],
      ["p@gmail.com", "contraseña"],
      ["f@gmail.com", "contraseña"],
      ["test02@gmail.com", "contraseña"],
      ["test01@gmail.com", "contraseña"],
      ["test03@gmail.com", "contraseña"],
      ["test04@gmail.com", "contraseña"],
      ["test05@gmail.com", "contraseña"]
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