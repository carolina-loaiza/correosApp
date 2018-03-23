mostrarEncargados();

document.querySelector('#txtFiltro').addEventListener('keyup', mostrarEncargados);
listaEncargados = obtenerDatoLocal('listaEncargadosLS');



function mostrarEncargados() {
    listaEncargados = obtenerDatoLocal('listaEncargadosLS');
    let tbody = document.querySelector('#tblEncargadosSucursal tbody');
    
    let sFiltro = document.querySelector('#txtFiltro').value;

    tbody.innerHTML = '';

    for(let i = 0; i < listaEncargados.length; i++) {
        
        if(listaEncargados[i][13] == '1') {
            if(listaEncargados[i][0].toLowerCase().includes(sFiltro) || listaEncargados[i][2].toLowerCase().includes(sFiltro) || listaEncargados[i][4].toLowerCase().includes(sFiltro) || listaEncargados[i][9].toLowerCase().includes(sFiltro)) {
           let fila = tbody.insertRow();
           
           let cPrimerNombre = fila.insertCell();
           let cPrimerApellido = fila.insertCell();
           let cCorreo = fila.insertCell();
           let cTelefono = fila.insertCell();
           let cSucursal = fila.insertCell();

           let cEditar = fila.insertCell();
           let cDesactivar = fila.insertCell();

           cEditar.classList.add('acciones');
           cDesactivar.classList.add('acciones');

           cPrimerNombre.appendChild(document.createTextNode(listaEncargados[i][0]));
           cPrimerApellido.appendChild(document.createTextNode(listaEncargados[i][2]));
           cCorreo.appendChild(document.createTextNode(listaEncargados[i][5]));
           cTelefono.appendChild(document.createTextNode(listaEncargados[i][6]));
           cSucursal.appendChild(document.createTextNode(listaEncargados[i][10]));

           let atag = document.createElement('a');
           atag.setAttribute('href', "index_modificar.html");

           //creacion de boton de configuracion
           let botonEditar = document.createElement('i');
           botonEditar.classList.add("far", "fa-edit");

           atag.appendChild(botonEditar);
           atag.dataset.correo = listaEncargados[i][5];
           cEditar.appendChild(atag);

           atag.addEventListener('click', redirect);
           
           let botonDesactivar = document.createElement('i');
           botonDesactivar.classList.add("fas", "fa-times");
           botonDesactivar.dataset.indice = i;
           botonDesactivar.addEventListener('click', eliminar);
           cDesactivar.appendChild(botonDesactivar);

           
       }//if
    }//if estado
    }//for loop
}


//funcion que redirige a un html con formulario nuevo
function redirect() {
    let sCorreo = this.dataset.correo; 
    setTemp(sCorreo);
}

function eliminar() {
    var id = this.dataset.indice;
    swal({
        title: "¿Está seguro de eliminar al encargado?",
        text: "Si lo hace, el registro del encargado desaparecerá por completo",
        icon: "warning",
        buttons: {
          catch: {
              text: 'Eliminar',
              value: 'Eliminar',
              className: 'button',
          },
          cancel: 'Cancelar'
        },
      })
      .then((botonUsuario) => {
          if(botonUsuario === "Eliminar") {
              let listaEncargados = obtenerDatoLocal('listaEncargadosLS');
              console.log(listaEncargados[id]);
              if(listaEncargados[id][13] == '1') {
                  listaEncargados[id][13] = '0'
              }
              else {listaEncargados[id][13] = '1'}
              actualizarEncargado(listaEncargados[id]);
              mostrarEncargados();
          }
      })


}









