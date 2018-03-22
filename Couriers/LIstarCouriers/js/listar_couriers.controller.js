mostrarCouriers();

document.querySelector('#txtFiltro').addEventListener('keyup', mostrarCouriers);

function mostrarCouriers() {
    listaCouriers = getInfoCourier();
    let tbody = document.querySelector('#tblCouriers tbody');

    let sFiltro = document.querySelector('#txtFiltro').value;

    tbody.innerHTML = '';

    for(let i = 0; i < listaCouriers.length; i++) {
        if (listaCouriers[i][1].toLowerCase().includes(sFiltro)) {
            let fila = tbody.insertRow();

            let cNombre = fila.insertCell();

            let cEditar = fila.insertCell();
            let cDesactivar = fila.insertCell();

            cEditar.classList.add('acciones');
            cDesactivar.classList.add('acciones');

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
            botonDesactivar.dataset.nombre = listaCouriers[i][0];
            cDesactivar.appendChild(botonDesactivar);

        }//if statement
     }//for loop
}//funcion

function redirect() {
    let sNombre = this.dataset.nombre;
    setTemp(sNombre);
}

