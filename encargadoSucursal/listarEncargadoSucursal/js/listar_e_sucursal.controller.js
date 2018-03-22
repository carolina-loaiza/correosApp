mostrarEncargados();

document.querySelector('#txtFiltro').addEventListener('keyup', mostrarEncargados);



function mostrarEncargados() {
    listaEncargados = obtenerDatoLocal('listaEncargadosLS');
    let tbody = document.querySelector('#tblEncargadosSucursal tbody');
    
    let sFiltro = document.querySelector('#txtFiltro').value;

    tbody.innerHTML = '';

    for(let i = 0; i < listaEncargados.length; i++) {
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
           cCorreo.appendChild(document.createTextNode(listaEncargados[i][4]));
           cTelefono.appendChild(document.createTextNode(listaEncargados[i][5]));
           cSucursal.appendChild(document.createTextNode(listaEncargados[i][9]));

           let atag = document.createElement('a');
           atag.setAttribute('href', "index_modificar.html");

           //creacion de boton de configuracion
           let botonEditar = document.createElement('i');
           botonEditar.classList.add("far", "fa-edit");

           atag.appendChild(botonEditar);
           atag.dataset.correo = listaEncargados[i][4];
           cEditar.appendChild(atag);

           atag.addEventListener('click', redirect);


           

           

           let botonDesactivar = document.createElement('i');
           botonDesactivar.classList.add("fas", "fa-times");
           botonDesactivar.dataset.correo = listaEncargados[i][4];
           cDesactivar.appendChild(botonDesactivar);
       }//if
    }//for loop

}


//funcion que redirige a un html con formulario nuevo
function redirect() {
    let sCorreo = this.dataset.correo; 
    setTemp(sCorreo);
}






