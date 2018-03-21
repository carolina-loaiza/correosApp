(function() {
  var datosUsuario = obtenerDatoLocal('usuario');
  var perfilUsuario = document.querySelector('#userPerfilInfo');
  var imagenPerfil = document.querySelector('#userPerfilAvatar');
  var sideBarMenu = document.querySelector('#sideBarMenu');
  var rol = 'Rol';
  var editarPage = '#';

  switch (datosUsuario[11]) {
    case '1':
      rol = 'Administrador';
      break;
    case '2':
      rol = 'Cliente';
      editarPage = '../clientes/editarClientes.html';
      break;
    case '3':
      rol = 'Encargado de sucursal';
      break;
    case '4':
      rol = 'Encargado de aduanas';
      break;
    case '5':
      rol = 'Repartidor';
      break;
  }

  if (datosUsuario[7]) {
    imagenPerfil.setAttribute("src", datosUsuario[7]);
  }

  perfilUsuario.querySelector('h3').innerHTML = datosUsuario[0] + " " + datosUsuario[1];
  perfilUsuario.querySelector('h4').innerHTML = rol;
  perfilUsuario.querySelector('a').setAttribute("href", editarPage);
  
  
  //perfilUsuario.appendChild(.innerText());
/*    */

/*   <li>
    <a href="#">
      <span class="icon iconMenu"><i class="far fa-file-alt"></i></span>
      Nombre item
    </a>
  </li> */
})();