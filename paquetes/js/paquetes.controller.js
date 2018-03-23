(function () {

  var listaPaquetes = obtenerDatoLocal('listaPaquete');
  var usuario = obtenerDatoLocal('usuario');
  var estadoInicial = usuario.length -1;
  var estados = [];
  
  switch (usuario[12]) {
    case '3':
      estados = ['En transito.', 'Proceso de desalmacenaje'];
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

    for(let i = 0; i < listaPaquetes.length; i++) {
      if(listaPaquetes[i][0].toLowerCase().includes(sFiltro) || listaPaquetes[i][2].toLowerCase().includes(sFiltro) || listaPaquetes[i][5].toLowerCase().includes(sFiltro)) {
        let fila = tbody.insertRow();

        let numeroTracking = fila.insertCell();
        let courier = fila.insertCell();
        let categoria = fila.insertCell();
        let peso = fila.insertCell();
        
        numeroTracking.appendChild(document.createTextNode(listaPaquetes[i][0]));
        courier.appendChild(document.createTextNode(listaPaquetes[i][1]));
        categoria.appendChild(document.createTextNode(listaPaquetes[i][4]));
        peso.appendChild(document.createTextNode(listaPaquetes[i][1]));
      }
    }
  }

  mostrarListaPaquetes();
})();