mostrarCouriers();
console.log(obtenerDatoLocal('listaCouriersLS'));

document.querySelector('#txtFiltro').addEventListener('keyup', mostrarCouriers);

function mostrarCouriers() {
    listaCouriers = obtenerDatoLocal('listaCouriersLS');
    let tbody = document.querySelector('#tblCouriers tbody');

    let sFiltro = document.querySelector('#txtFiltro').value;

    tbody.innerHTML = '';

    for(let i = 0; i < listaCouriers.length; i++) {
        if(listaCouriers[i][2] == '1') {
        if (listaCouriers[i][1].toLowerCase().includes(sFiltro)) {
            let fila = tbody.insertRow();

            let cNumero = fila.insertCell();
            let cNombre = fila.insertCell();

            let cEditar = fila.insertCell();
            let cDesactivar = fila.insertCell();

            cEditar.classList.add('acciones');
            cDesactivar.classList.add('acciones');

            cNumero.appendChild(document.createTextNode(listaCouriers[i][0]));
            cNombre.appendChild(document.createTextNode(listaCouriers[i][1]));
            //crea un elemento anchor y le asocia el href del html de modificar
            let atag = document.createElement('a');
            atag.setAttribute('href', "index_modificar.html");
            //se crea un icono de editar
            let botonEditar = document.createElement('i');
            botonEditar.classList.add("far", "fa-edit");
            //se envuelve al icono de editar en el elemento anchor
            atag.appendChild(botonEditar);
            atag.dataset.nombre = listaCouriers[i][0];
            cEditar.appendChild(atag);


            //funcion que redirige a formulario para modificar
            atag.addEventListener('click', redirect);


            let botonDesactivar = document.createElement('i');
            botonDesactivar.classList.add("fas", "fa-times");
            botonDesactivar.dataset.indice = i;
            botonDesactivar.addEventListener('click', eliminar);
            cDesactivar.appendChild(botonDesactivar);

        }//if statement
       }//if activo
     }//for loop
}//funcion

function redirect() {
    var sNombre = this.dataset.nombre;
    setTemp(sNombre);

}

function eliminar() {
        let id = this.dataset.indice;
        swal({
            title: "¿Está seguro de eliminar el courier?",
            text: "Si lo hace, el registro del mismo desaparecerá por completo",
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
                  let listaCouriers = obtenerDatoLocal('listaCouriersLS');
                  console.log(listaCouriers);
                  if(listaCouriers[id][2] == '1') {
                      listaCouriers[id][2] = '0'
                  }
                  else {listaCouriers[id][2] = '1'}
                  actualizarCourier(listaCouriers[id]);
                  mostrarCouriers();
              }
          })
    
    
    }
