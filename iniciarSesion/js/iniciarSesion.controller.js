(function() {
  var checkUsuario = document.querySelector('#checkUsuario');
  var sesionEmail = document.querySelector('#sesionEmail');
  var sesionPassword = document.querySelector('#sesionPassword');
  checkUsuario.addEventListener('click', obtenerUsuario);

  function obtenerUsuarios() {
    return dataUsuarios;
  }

  function obtenerUsuario() {
    var usuario = false;

    if (sesionEmail.value === '' && sesionPassword.value === '') {
      return false;
    }

    var usuarios = obtenerUsuarios();
    usuario = usuarios.filter(usuario => {
      var password = usuario.length-2;
      return usuario[8] === sesionEmail.value && usuario[password] === sesionPassword.value;
    });

    if (usuario) {
      
    }
  }
})()