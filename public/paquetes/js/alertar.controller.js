(function () {
  //Tiene que jalar couriers
  var listaCouriers = [["12345678","Nombre del courier #1"],["42342421","Nombre del courier #2"],["421431212","Nombre del courier #3"]];
  //Tiene que jalar tarjetas (me parece que tarjetas no tiene un registro local).
  var listaTarjetas = [["Nombre titular", "# tarjeta", "23234", "213213", "213123", "test02@gmail.com"], ["Nombre titular", "# tarjeta", "23234", "213213", "213123", "test02@gmail.com"], ["Nombre titular", "# tarjeta", "23234", "213213", "213123", "test02@gmail.com"], ["Nombre titular", "# tarjeta", "23234", "213213", "213123", "test01@gmail.com"]];
  var datosUsuario = obtenerDatoLocal('usuario');
  var listaSucursales = obtenerListaTarifaDB();
  var listaCategorias = obtenerListaTipoArticuloDB();
  var sucursalUsuario = listaSucursales.filter(function(tarifa) {
    return tarifa[2] === datosUsuario[15];
  })[0];

  var alertarPaquete = document.querySelector('#alertarPaquete');
  alertarPaquete.addEventListener('click', registrarPaquete);

  function agregarCouriers() {
    for(var i = 0; i < listaCouriers.length; i++) {
      var opcion = document.createElement('option');
      opcion.value = listaCouriers[i][1];
      opcion.innerText = listaCouriers[i][1];
      document.getElementById('opCourier').appendChild(opcion);
    }
  }

  function agregarSucursales() {
    document.getElementById('sucursal').value = datosUsuario[15];
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
      var peso = parseInt(document.querySelector('#peso').value);
      var courier = document.querySelector('#opCourier').value;
      var sucursal = document.querySelector('#sucursal').value;
      var sucursalPeso = sucursalUsuario[1];
      var sucursalKilo = sucursalUsuario[3];
      var categoriaUsuario = document.querySelector('#opCategoria').value;
      var categoriaImpuesto = listaCategorias.filter(function(categoria) {
        return categoria[1] === categoriaUsuario;
      })[0];

      var precioInicial = parseInt(document.querySelector('#precioInicial').value);
      var usuarioEmail = datosUsuario[5];
      var tarjeta = document.querySelector('#opTarjeta').value;
      var estadoInicial = 'En transito';

      paquete.push(numeroTracking, peso, courier, sucursal, sucursalPeso, sucursalKilo, categoriaUsuario, categoriaImpuesto[2],
        precioInicial, 0, usuarioEmail, tarjeta, estadoInicial);
 
      guardarPaquetesDB(paquete);
      mostrarMensajeModal('registro exitoso');
      document.getElementById('formAlertarPaquete').reset();
    }
  }


  function guardarPaquetesDB(datos){
    let mensaje = false;
  
    let peticion = $.ajax({
      url: 'http://localhost:4000/api/save_paquete',
      type: 'post',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async: false,
      data: {data: JSON.stringify(datos)} 
    });
   
    peticion.done(function(response){
      mensaje = 'Se registró con éxito';
    });
  
    peticion.fail(function(){
      mensaje = false;
    });
  
    return mensaje;
  }
})();