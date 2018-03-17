mostrarEncargados();

document.querySelector('#txtFiltro').addEventListener('keyup', mostrarEncargados);



function mostrarEncargados() {
    listaEncargados = getInfoEncargadoSucursal();
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
    atag.addEventListener('click', setTemp(sCorreo));
}


//funcion que despliega los datos en un formulario nuevo para modificarlos
/*function obtenerEncargado() {

    //aqui seria get temp
    guardarTemp(sCorreo);
    
    
    //let infoEncargado = buscarEncargadoPorCorreo(sCorreo);
    //esta se llama en el controlador de 
    console.log(infoEncargado);

    document.querySelector('#txtPrimerNombre').value = infoEncargado[0];
    document.querySelector('#txtSegundoNombre').value = infoEncargado[1];
    document.querySelector('#txtPrimerApellido').value = infoEncargado[2];
    document.querySelector('#txtId').value = infoEncargado[3];
    document.querySelector('#txtCorreo').value = infoEncargado[4];
    document.querySelector('#txtTel1').value = infoEncargado[5];
    document.querySelector('#txtTel2').value = infoEncargado[6];
    //edad no porque si la quiere modificar da igual si sale o no por el tipo de input
    document.querySelector('#opGenero').value = infoEncargado[8];
    document.querySelector('#opSucursal').value = infoEncargado[9];
}*/



