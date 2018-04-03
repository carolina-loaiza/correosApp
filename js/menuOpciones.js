(function() {
  var datosUsuario = obtenerDatoLocal('usuario');
  var paginaActual = document.title;
  var paginaRegistroClientes = paginaActual.includes('Registrar cliente');

  if (!paginaRegistroClientes && (!datosUsuario || datosUsuario.length === 0)) {
    window.location.href = '../iniciarSesion/index.html';
  }

  if (document.querySelector('#cerrarSesion')) {
    document.querySelector('#cerrarSesion').addEventListener('click', cerrarSesion);
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

  var menuOpciones = document.querySelector('#menuOpciones');
  var rol = 'Rol';
  var editarPage = '#';

  switch (datosUsuario[12]) {
    case '1':
      rol = 'Administrador';
      break;
    case '2':
      rol = 'Cliente';
      editarPage = '../clientes/editarClientes.html';      
      menuOpciones.prepend(crearLinkMenu('../Tarjetas/tarjetas.html', 'Formas de pago', ['fas', 'fa-credit-card']));
      menuOpciones.prepend(crearLinkMenu('../paquetes/listarPaquetes.html', 'Listar paquetes', ['far', 'fa-list-alt']));
      menuOpciones.prepend(crearLinkMenu('../paquetes/alertarPaquete.html', 'Alertar paquetes', ['fas', 'fa-cube']));
      break;
    case '3':
      rol = 'Encargado de aduanas';
      editarPage = '../EncAduanas/modificar.html';
      menuOpciones.prepend(crearLinkMenu('../paquetes/listarPaquetes.html', 'Listar paquetes', ['far', 'fa-list-alt']));
      break;
    case '4':
      rol = 'Encargado de sucursal';
      editarPage = '../encargadoSucursal/index_modificar.html';
      menuOpciones.prepend(crearLinkMenu('../clientes/registroClientes.html', 'Registrar cliente', ['fas', 'fa-file-alt']));
      menuOpciones.prepend(crearLinkMenu('../repartidor/registrar_repartidor.html', 'Registrar repartidor', ['fas', 'fa-file-alt']));
      menuOpciones.prepend(crearLinkMenu('../clientes/listarClientes.html', 'Listar clientes', ['far', 'fa-list-alt']));
      menuOpciones.prepend(crearLinkMenu('../repartidor/listar_repartidor.html', 'Listar repartidores', ['far', 'fa-list-alt']));
      menuOpciones.prepend(crearLinkMenu('../asignarpaquetesrepartidor/asignarpaquetes_repartidor.html', 'Asignar paquetes', ['fas', 'fa-cube']));
      menuOpciones.prepend(crearLinkMenu('../paquetes/listarPaquetes.html', 'Listar paquetes', ['far', 'fa-list-alt']));
      break;
    case '5':
      rol = 'Repartidor';
      editarPage = '../repartidor/modificar_repartidor.html';
      menuOpciones.prepend(crearLinkMenu('../paquetes/listarPaquetes.html', 'Listar paquetes', ['far', 'fa-list-alt']));
      break;
  }

  if (datosUsuario[11]) {
    document.querySelector('#userPerfilAvatar').setAttribute("src", datosUsuario[11]);
  }

  document.querySelector('#userNombre').innerText = rol + " " + datosUsuario[0] + " " + datosUsuario[2];
  document.querySelector('#editarPerfil').setAttribute("href", editarPage);

  if (paginaActual.includes('Editar perfil')){
    document.querySelector('#editarPerfilText').classList.add('activo');
  }

  if (paginaRegistroClientes && (!datosUsuario || datosUsuario.length === 0)){
    menuOpciones.style.display = 'none';
    document.querySelector('#userNombre').style.display = 'none';
    document.querySelector('#userPerfilAvatar').style.display = 'none';
    document.querySelector('#editarPerfil').style.display = 'none';
  }
  
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
    var contenedorText = document.createElement('span');
    contenedorText.appendChild(document.createTextNode(text));
    contenedorText.classList.add('linkTexto');

    if (paginaActual.includes(text)){
      contenedorText.classList.add('activo');
    }

    link.appendChild(contenedorText);
    link.prepend(contenedorIcono);
    menuItem.appendChild(link);

    return menuItem;
  }

})();