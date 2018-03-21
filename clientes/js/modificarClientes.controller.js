(function () {
  document.querySelector('#desactivarCuenta').addEventListener('click', guardarDatos);

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
  }

  mostarDatosUsuarios();

})();