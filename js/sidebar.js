(function() {
  var datosUsuario = obtenerDatoLocal('usuario');

  if (!datosUsuario || datosUsuario.length === 0) {
    window.location.href = '../iniciarSesion/index.html';
  }

  if (document.querySelector('.headerSesion button')) {
    document.querySelector('.headerSesion button').addEventListener('click', cerrarSesion);
  }

  function cerrarSesion() {
    swal({
      title: "¿Está seguro de que desea cerrar sesión?",
      icon: "warning",
      buttons: {
        catch: {
          text: "Cerrar sesión",
          value: "Cerrar sesión",
          className: "button"
        },
        cancel: "Cancelar",
      },
    }).then((botonUsuario) => {
      if (botonUsuario === 'Cerrar sesión') {
        localStorage.removeItem('usuario');
        window.location.href = '../iniciarSesion/index.html';
      }
    });
  }

  var perfilUsuario = document.querySelector('#userPerfilInfo');
  var imagenPerfil = document.querySelector('#userPerfilAvatar');
  var sideBarMenu = document.querySelector('#sideBarMenu');
  var rol = 'Rol';
  var editarPage = '#';

  switch (datosUsuario[12]) {
    case '1':
      rol = 'Administrador';
      break;
    case '2':
      rol = 'Cliente';
      editarPage = '../clientes/editarClientes.html';
      sideBarMenu.appendChild(crearLinkMenu('../paquetes/alertarPaquete.html', 'Alertar Paquete', ['fas', 'fa-cube']));
      sideBarMenu.appendChild(crearLinkMenu('../paquetes/listarPaquetes.html', 'Listar paquetes', ['far', 'fa-list-alt']));
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

  perfilUsuario.querySelector('h3').innerText = datosUsuario[0] + " " + datosUsuario[2];
  perfilUsuario.querySelector('h4').innerText = rol;
  perfilUsuario.querySelector('a').setAttribute("href", editarPage);
  
  
  function crearLinkMenu(href, text, iconoClass) {
    var menuItem = document.createElement('li');
    var link = document.createElement('a');
    link.setAttribute('href', href);
    var contenedorIcono = document.createElement('span'); 
    contenedorIcono.classList.add('icon', 'iconMenu');
    var icono = document.createElement('i');
    iconoClass.forEach(className => {
      icono.classList.add(className);
    });
    contenedorIcono.appendChild(icono);
    link.appendChild(document.createTextNode(text));
    link.prepend(contenedorIcono);
    menuItem.appendChild(link);

    return menuItem;
  }
})();