(function () {
  //obtenerDatoLocal('listaPaquete');
  //obtenerDatoLocal('listaEncargadosLS');
  var listaPaquetes = [["1234566","200","12345678","Sucursal #1","tp08","# tarjeta","200","200","test02@gmail.com","estado 1"],["1234566","200","421431212","Sucursal #2","vg12j","# tarjeta","200","200","test02@gmail.com","estado 1"],["1234566","200","421431212","Sucursal #2","vg12j","# tarjeta","200","200","test02@gmail.com","estado 1"],["2342344","200","421431212","Sucursal #2","vg12j","# tarjeta","200","200","test02@gmail.com","estado 1"],["453534","500","421431212","Sucursal #2","vg12j","# tarjeta","200","200","test02@gmail.com","estado 1"],["123","100","Nombre del courier #2","Sucursal #2","COSMETICOS","# tarjeta","100","100","test01@gmail.com","En transito"],["4324","100","Nombre del courier #3","Sucursal #3","EQUIPO DE SONIDO","# tarjeta","100","100","test01@gmail.com","En transito"]];
  [["nombreES","","apellidoES","213123123","ES@gmail.com","213123123","",25,"masculino","Sucursal #1",false,4,1]];
  var usuario = obtenerDatoLocal('usuario');
  var estadoInicial = usuario.length -1;
  var correoUsuario = usuario[5];
  var estados = [];
  var listaEstadosUsuario = [];
  
  switch (usuario[12]) {
    case '2':
      listaEstadosUsuario = listaEstadosUsuario.filter(function (paquete) {
        return correoUsuario === paquete[8];
      });
      console.log(listaEstadosUsuario);
    case '3':
      estados = ['En transito', 'Proceso de desalmacenaje'];
      break;
    case '4':
      estados = ['Proceso de distribución', 'Recibido en el centro de distribución', 'Tránsito a destino'];
      break;
    case '5':
      estados = ['Tránsito a destino', 'Entragdo'];
      break;
  }

  function mostrarListaPaquetes() {
    let tbody = document.querySelector('#paquetesTabla tbody');
    let sFiltro = document.querySelector('#txtFiltro').value;
    tbody.innerHTML = '';

    if(usuario[12] === '2') {
      document.querySelector('#paquetesTabla .mostrarEstado').style.display = "table-cell";
    } else {
      document.querySelector('#paquetesTabla .mostrarIDCliente').style.display = "table-cell";
    }

    for(let i = 0; i < listaPaquetes.length; i++) {
      if (correoUsuario === listaPaquetes[i][8]) {
        if(listaPaquetes[i][0].toLowerCase().includes(sFiltro) || listaPaquetes[i][2].toLowerCase().includes(sFiltro) || listaPaquetes[i][5].toLowerCase().includes(sFiltro)) {
          let fila = tbody.insertRow();
  
          let numeroTracking = fila.insertCell();
          let courier = fila.insertCell();
          let categoria = fila.insertCell();
          let peso = fila.insertCell();
          
          if(usuario[12] != '2') {
            let clienteID = fila.insertCell();
            clienteID.appendChild(document.createTextNode(usuario[0]));
          }

          numeroTracking.appendChild(document.createTextNode(listaPaquetes[i][0]));
          courier.appendChild(document.createTextNode(listaPaquetes[i][2]));
          categoria.appendChild(document.createTextNode(listaPaquetes[i][4]));
          peso.appendChild(document.createTextNode(listaPaquetes[i][1]));

          if(usuario[12] === '2') {
            let estadoCliente = fila.insertCell();
            estadoCliente.appendChild(document.createTextNode(listaPaquetes[i][9]));
          }
        }
      }
    }
  }
  //// revisar cada usuario agregar clave temporarl!!!!!!!!!!!
  mostrarListaPaquetes();
})();