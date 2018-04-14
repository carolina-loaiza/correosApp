
let listaEncargados = obtenerListaDB('all_users_by_type?type=4');
document.querySelector('#txtFiltro').addEventListener('keyup', mostrarEncargados);
mostrarEncargados();

function mostrarEncargados() {
    let tbody = document.querySelector('#tblEncargadosSucursal tbody');  
    let sFiltro = document.querySelector('#txtFiltro').value;
    tbody.innerHTML = '';

    for(let i = 0; i < listaEncargados.length; i++) {
        var activo = listaEncargados[i].length-1;
        if (listaEncargados[i][activo] === '1') {
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
                cTelefono.appendChild(document.createTextNode(listaEncargados[i][7]));
                cSucursal.appendChild(document.createTextNode(listaEncargados[i][11]));

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
            }
       }//if
    }//if estado
}


//funcion que redirige a un html con formulario nuevo
function redirect() {
    let sCorreo = this.dataset.correo; 
    setTemp(sCorreo);
}

function eliminar() {
    let id = this.dataset.indice;
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
              if(listaEncargados[id][14] == '1') {
                  listaEncargados[id][14] = '0'
              }
              else {listaEncargados[id][14] = '1'}
              actualizarEncargado(listaEncargados[id]);
              mostrarEncargados();
          }
      })


}









