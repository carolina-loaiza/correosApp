(function () {
  document.querySelector('#desactivarCuenta').addEventListener('click', desactivarCuenta);

  function mostarDatosUsuarios() {
    var datosUsuario = obtenerDatoLocal('usuario');

    document.querySelector('.formRegistroClientes input[name="nombre"').value = datosUsuario[0]
    document.querySelector('.formRegistroClientes input[name="segundoNombre"').value = datosUsuario[1]
    document.querySelector('.formRegistroClientes input[name="primerApellido"').value = datosUsuario[2]
    document.querySelector('.formRegistroClientes input[name="segundoApellido"').value = datosUsuario[3]
    document.querySelector('.formRegistroClientes input[name="cedula"').value = datosUsuario[4]
    document.querySelector('.formRegistroClientes input[name="email"').value = datosUsuario[5]
    document.querySelector('.formRegistroClientes input[name="telefono1"').value = datosUsuario[6]
    document.querySelector('.formRegistroClientes input[name="telefono2"').value = datosUsuario[7]
    document.querySelector('.formRegistroClientes input[name="fechaNacimiento"').value = datosUsuario[8]
    document.querySelector('.formRegistroClientes select[name="genero"').value = datosUsuario[9]
    document.querySelector('.formRegistroClientes textarea[name="direccion"').value = datosUsuario[10]

    if (datosUsuario[11]) {
      document.querySelector('#previewFoto').setAttribute("src", datosUsuario[11]);
    }
  };

  mostarDatosUsuarios();

  function desactivarCuenta() {
    swal({
      title: "¿Está seguro de que desea desactivar la cuenta?",
      text: "Si desactiva la cuenta no puede volver a ingresar al sistema.",
      icon: "warning",
      buttons: {
        catch: {
          text: "Desactivar",
          value: "Desactivar",
          className: "button"
        },
        cancel: "Cancelar",
      },
    }).then((botonUsuario) => {
      if (botonUsuario === 'Desactivar') {
        console.log("Desactivar");
        var listaUsuarios = obtenerDatoLocal('listaUsuarios');
        var datosUsuario = obtenerDatoLocal('usuario');

        for(var i = 0; i < listaUsuarios.length; i++) {
          if (listaUsuarios[i][5] === datosUsuario[5]) {
            var activo = listaUsuarios[i].length-1;
            listaUsuarios[i][activo] = '0';
          }
        };

        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
        localStorage.removeItem('usuario');
        window.location.href = '../iniciarSesion/index.html';
      }
    });
  }

})();