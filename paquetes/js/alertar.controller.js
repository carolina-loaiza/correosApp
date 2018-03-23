(function () {
  var listaCouriers = [["12345678","Nombre del courier #1"],["42342421","Nombre del courier #2"],["421431212","Nombre del courier #3"]];
  var listaSucursales = [["Sucursal #1","Direccion Sucursal #1","312423423", "200", "200"],["Sucursal #2","Direccion Sucursal #2","453453455", "200", "200"],["Sucursal #3","Direccion Sucursal #3","564334535", "200", "200"]];
  var listaCategorias = [["tp08","COSMETICOS","29.95","1"],["j1va","DESODORANTES","21.95","1"],["vg12j","EQUIPO DE SONIDO","49.27","1"],["1wg7","IPHONE","13","1"]];
  var listaTarjetas = [["Nombre titular", "# tarjeta", "23234", "213213", "213123", "test02@gmail.com"], ["Nombre titular", "# tarjeta", "23234", "213213", "213123", "test02@gmail.com"], ["Nombre titular", "# tarjeta", "23234", "213213", "213123", "test02@gmail.com"], ["Nombre titular", "# tarjeta", "23234", "213213", "213123", "test01@gmail.com"]];
  var alertarPaquete = document.querySelector('#alertarPaquete');
  alertarPaquete.addEventListener('click', registrarPaquete);

  //var listaSucursales = obtenerDatoLocal('RegistroLS');

  function agregarCouriers() {
    for(var i = 0; i < listaCouriers.length; i++) {
      var opcion = document.createElement('option');
      opcion.value = listaCouriers[i][1];
      opcion.innerText = listaCouriers[i][1];
      document.getElementById('opCourier').appendChild(opcion);
    }
  }

  function agregarSucursales() {
    for(var i = 0; i < listaSucursales.length; i++) {
      var opcion = document.createElement('option');
      opcion.value = listaSucursales[i][0];
      opcion.innerText = listaSucursales[i][0];
      document.getElementById('opSucursal').appendChild(opcion);
    }
  }

  function agregarCategorias() {
    for(var i = 0; i < listaCategorias.length; i++) {
      var opcion = document.createElement('option');
      opcion.value = listaCategorias[i][1];
      opcion.innerText = listaCategorias[i][1];
      document.getElementById('opCategoria').appendChild(opcion);
    }
  }

  function agregarTarjetas() {
    for(var i = 0; i < listaTarjetas.length; i++) {
      var opcion = document.createElement('option');
      opcion.value = listaTarjetas[i][1];
      opcion.innerText = listaTarjetas[i][1];
      document.getElementById('opTarjeta').appendChild(opcion);
    }
  }

  agregarCouriers();
  agregarTarjetas();
  agregarSucursales();
  agregarCategorias();


  function registrarPaquete() {
    var inputs = document.querySelectorAll('#formAlertarPaquete input:required, #formAlertarPaquete select[name="opCourier"], #formAlertarPaquete select[name="opSucursal"], #formAlertarPaquete select[name="opCategoria"], #formAlertarPaquete select[name="opTarjeta"]');
    var error = validarInputsRequeridos(inputs);

    if(error == true) {
      mostrarMensajeModal('error formulario');
    }
    else {
      var paquete = [];

      var numeroTracking = document.querySelector('#numeroTracking').value;
      var peso = document.querySelector('#peso').value;
      var courier = document.querySelector('#opCourier').value;
      var sucursal = document.querySelector('#opSucursal').value;
      var categoria = document.querySelector('#opCategoria').value;
      var tarjeta = document.querySelector('#opTarjeta').value;
      var precioInicial = document.querySelector('#precioInicial').value;
      var precioFinal = precioInicial;
      var usuarioEmail = obtenerDatoLocal('usuario');
      var estadoInicial = 'En transito'; 

      paquete.push(numeroTracking, peso, courier, sucursal, categoria, tarjeta, precioInicial, precioFinal, usuarioEmail[5], estadoInicial);
      guardarDatoLocal('listaPaquete', paquete);
      mostrarMensajeModal('registro exitoso');
    }
  }
})();