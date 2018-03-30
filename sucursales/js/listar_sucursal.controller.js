////INTERFAZ LISTAR
document.querySelector('#txtFiltro').addEventListener('keyup', mostrarListas);
mostrarListas();


function mostrarListas() {
    let listarSucursales = obtenerDatoLocal('RegistroLS');
    let tbody = document.querySelector('#tblListaSucursal tbody');
    let sfiltro = document.querySelector('#txtFiltro').value;

    tbody.innerHTML = '';

    for (let i = 0; i < listarSucursales.length; i++) {
        if(listarSucursales[i][3] == '1') {
        if (listarSucursales[i][0].toLowerCase().includes(sfiltro) || listarSucursales[i][1].toLowerCase().includes(sfiltro)) {
            let fila = tbody.insertRow(); // CREA FILAS


            let sSucursal = fila.insertCell(); // INSERTA EN LA FILA EN LA POS 0 EL NOMBRE
            let sDireccion = fila.insertCell();
            let sTelefono = fila.insertCell();
            let sModificar = fila.insertCell();
            let sDesactivar = fila.insertCell();

            sSucursal.appendChild(document.createTextNode(listarSucursales[i][0]));
            sDireccion.appendChild(document.createTextNode(listarSucursales[i][1]));
            sTelefono.appendChild(document.createTextNode(listarSucursales[i][2]));
            //sModificar.appendChild(document.createTextNode(listarSucursales[i][3]));
            //sDesactivar.appendChild(document.createTextNode(listarSucursales[i][4]));

            //BOTONES MODIFICAR Y DESACTIVAR
            //Se definen las variables de los  botones modificar 
            let botonModificar = document.createElement('i'); //crea la variable del modificar con un icono
            botonModificar.classList.add("far", "fa-edit"); //inserta el elemento icono
            let botonDesactivar = document.createElement('i'); //crea la variable del modificar con un icono
            botonDesactivar.classList.add("fas", "fa-times"); //inserta el elemento icono
            botonDesactivar.dataset.indice = i;
            botonDesactivar.addEventListener('click', eliminar);

            let elementa = document.createElement('a');
            elementa.setAttribute("href", "modificar_sucursales.html");
            elementa.appendChild(botonModificar);
            elementa.addEventListener('click', redirect);
            elementa.dataset.sucursal = listarSucursales[i][0];

            sModificar.appendChild(elementa);

            elementa.appendChild(botonModificar);
            sModificar.classList.add('acciones');

            sDesactivar.appendChild(botonDesactivar);
            sDesactivar.classList.add('acciones');
            sDesactivar.classList.add("iconos");


        }//if filtro
      }//if estado
    }//for loop
}


function redirect() {
    let sNombre = this.dataset.sucursal;
    setTemp(sNombre);
}

function eliminar() {
    var id = this.dataset.indice;
    swal({
        title: "¿Está seguro de eliminar la sucursal?",
        text: "Si lo hace, el registro de la misma desaparecerá por completo",
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
              let listarSucursales = obtenerDatoLocal('RegistroLS');
              if(listarSucursales[id][3] == '1') {
                  listarSucursales[id][3] = '0'
              }
              else {listarSucursales[id][3] = '1'}
              actualizarListaSucursales(listarSucursales[id]);
              mostrarListas();
          }
      })


}









