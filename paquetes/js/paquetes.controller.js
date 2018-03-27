(function () {


  var listaPaquetes = obtenerDatoLocal('listaPaquetes');
  var usuario = obtenerDatoLocal('usuario');
  var tipoUsuario = usuario[12];
  var correoUsuario = usuario[5];
  var estados = [];
  var listaEstadosUsuario = [];
  let filtroPaquetes = document.querySelector('#txtFiltro');
  filtroPaquetes.addEventListener('keyup', mostrarListaPaquetes);
  
  switch (tipoUsuario) {
    case "2":
      listaEstadosUsuario = listaPaquetes.filter(function (paquete) {
        return correoUsuario === paquete[8];
      });
      break;
    case "3":
      estados = ['En transito', 'Proceso de desalmacenaje'];
      listaEstadosUsuario = listaPaquetes.filter(function (paquete) {
        return paquete[9] === 'En transito' || paquete[9] === 'Proceso de desalmacenaje';
      });
      break;
    case "4":
      estados = ['Proceso de distribución', 'Recibido en el centro de distribución', 'Tránsito a destino'];
      listaEstadosUsuario = listaPaquetes.filter(function (paquete) {
        console.log(paquete[3] === usuario[10]);
        return (paquete[9] === 'Proceso de desalmacenaje' || paquete[9] === 'Recibido en el centro de distribución' || paquete[9] === 'Tránsito a destino') && (paquete[3] === usuario[10]);
      });
      console.log(listaEstadosUsuario);
      break;
    case "5":
      estados = ['Tránsito a destino', 'Entregado'];
      listaEstadosUsuario = listaPaquetes.filter(function (paquete) {
        console.log(paquete[10], usuario[5]);
        return (paquete[9] === 'Tránsito a destino' || paquete[9] === 'Entregado') && (paquete[10] === usuario[5]);
      });
      break;
  }

  function mostrarListaPaquetes() {
    let tbody = document.querySelector('#paquetesTabla tbody');
    let sFiltro = filtroPaquetes.value;
    tbody.innerHTML = '';
    document.querySelector('#estado3').style.display = "none";

    if(usuario[12] === '2') {
      document.querySelector('#paquetesTabla .mostrarEstado').style.display = "table-cell";
    } else {
      document.querySelector('#paquetesTabla .mostrarIDCliente').style.display = "table-cell";
      document.querySelector('#paquetesTabla .cambioEstado').style.display = "table-cell";
      document.querySelector('.estadosTitulos').style.display = "block";
      document.querySelector('#estado1').appendChild(document.createTextNode(estados[0]));
      document.querySelector('#estado2').appendChild(document.createTextNode(estados[1]));
    }

    if (usuario[12] === '4') {
      document.querySelector('#paquetesTabla .estadoSucursal').style.display = "table-cell";
      document.querySelector('#estado3').style.display = "block";
      document.querySelector('#estado3').appendChild(document.createTextNode(estados[2]));
    }

    for(let i = 0; i < listaEstadosUsuario.length; i++) {
        console.log(listaEstadosUsuario);
        if(listaEstadosUsuario[i][0].toLowerCase().includes(sFiltro) || listaEstadosUsuario[i][2].toLowerCase().includes(sFiltro) || listaEstadosUsuario[i][5].toLowerCase().includes(sFiltro)) {
          let fila = tbody.insertRow();
          
          if(usuario[12] != '2') {
            let clienteID = fila.insertCell();
            clienteID.appendChild(document.createTextNode(listaEstadosUsuario[i][8]));
          }
          let numeroTracking = fila.insertCell();
          let courier = fila.insertCell();
          let categoria = fila.insertCell();
          let peso = fila.insertCell();

          if(usuario[12] === '2') {
            let estadoCliente = fila.insertCell();
            estadoCliente.appendChild(document.createTextNode(listaEstadosUsuario[i][9]));
          }

          if(usuario[12] != '2') {
            let estadoSwitch = fila.insertCell();
            estadoSwitch.appendChild(crearEstadoSwitch(listaEstadosUsuario[i][0], listaEstadosUsuario[i][9]));
          }

          numeroTracking.appendChild(document.createTextNode(listaEstadosUsuario[i][0]));
          courier.appendChild(document.createTextNode(listaEstadosUsuario[i][2]));
          categoria.appendChild(document.createTextNode(listaEstadosUsuario[i][4]));
          peso.appendChild(document.createTextNode(listaEstadosUsuario[i][1]));

          if (usuario[12] === '4') {
            let estadoSucursal = fila.insertCell();
            let estadoSucursalTexto = listaEstadosUsuario[i][10] ? listaEstadosUsuario[i][10] : '';
            estadoSucursal.appendChild(document.createTextNode(estadoSucursalTexto));
          }
        }
    }
  }

  mostrarListaPaquetes();
 
  function crearEstadoSwitch(idPaquete, estado) {
    var onoffswitch = document.createElement('div');
    onoffswitch.classList.add('onoffswitch');

    var inputCheck = document.createElement('input');
    inputCheck.setAttribute('type', 'checkbox');
    inputCheck.setAttribute('name', 'onoffswitch');
    inputCheck.setAttribute('id', 'cambiarEstadoCheck'+idPaquete);

    if (estado === estados[1]) {
      inputCheck.setAttribute('checked', 'checked');
    }
    inputCheck.classList.add('onoffswitch-checkbox');
    inputCheck.dataset.paquete = idPaquete;
    inputCheck.addEventListener('change', cambiarEstado);
    
    onoffswitch.appendChild(inputCheck);

    var label = document.createElement('label'); 
    label.setAttribute('for', 'cambiarEstadoCheck'+idPaquete);
    label.classList.add('onoffswitch-label');

    var spanInner = document.createElement('span');
    spanInner.classList.add('onoffswitch-inner');

    var spanSwitch = document.createElement('span');
    spanSwitch.classList.add('onoffswitch-switch');

    label.appendChild(spanSwitch);
    label.prepend(spanInner);
    onoffswitch.appendChild(label);

    return onoffswitch;
  }

  function cambiarEstado() {
    if(this.checked) {
      var idPaquete = this.dataset.paquete
      var listaPaquetesActuales = obtenerDatoLocal('listaPaquetes');
      for(var i = 0; i < listaPaquetesActuales.length; i++) {
        if(listaPaquetesActuales[i][0] === idPaquete) {
          listaPaquetesActuales[i][9] = estados[1];
        }
      }
      localStorage.setItem('listaPaquetes', JSON.stringify(listaPaquetesActuales));

      if (estados[1] === "Entregado") {
        mostrarFactura();
      }
    };
  }

  function mostrarFactura() {
    swal({
      title: "Paquete entregado.",
      icon: "success",
      button: {
        text: "Ver factura",
        className: "button",
      },
    }).then(() => {
      window.location.href = '../factura/factura.html';
    });
  }
})();