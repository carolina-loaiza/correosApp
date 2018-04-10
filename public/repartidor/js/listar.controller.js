
document.querySelector('#txtFiltro').addEventListener('keyup',mostrarRepartidores);

mostrarRepartidores();

function mostrarRepartidores() {
    let listaRepartidores = obtenerDatoLocal('listaRepartidoresLS');

    let cuerpoTabla = document.querySelector('#tblbase tbody');
    let sFiltro = document.querySelector('#txtFiltro').value;

    cuerpoTabla.innerHTML = '';

    for (let i = 0; i < listaRepartidores.length; i++) {
        if (listaRepartidores[i][10].toLowerCase().includes(sFiltro.toLowerCase())||listaRepartidores[i][0].toLowerCase().includes(sFiltro.toLowerCase())||listaRepartidores[i][2].toLowerCase().includes(sFiltro.toLowerCase())) {
            let fila = cuerpoTabla.insertRow();

            let cPrimernombre = fila.insertCell();
            let cPrimerapellido = fila.insertCell();
            //let cTelefono1 = fila.insertCell();
            //let cCorreo = fila.insertCell();
            let cSucursal=fila.insertCell();

            let cModificar = fila.insertCell();
            let cDesactivar = fila.insertCell();
            let cEstado= fila.insertCell();
            cModificar.classList.add('acciones');
            cDesactivar.classList.add('acciones');
            cPrimernombre.appendChild(document.createTextNode(listaRepartidores[i][0]));
            // cSegundonombre.appendChild(document.createTextNode(listaRepartidores[i][1]));
            cPrimerapellido.appendChild(document.createTextNode(listaRepartidores[i][2]));
            // cSegundoapellido.appendChild(document.createTextNode(listaRepartidores[i][3]));
            //cIdentificacion.appendChild(document.createTextNode(listaRepartidores[i][4]));
            //cTelefono1.appendChild(document.createTextNode(listaRepartidores[i][5]));
            //cTelefono2.appendChild(document.createTextNode(listaRepartidores[i][6]));
            //cCorreo.appendChild(document.createTextNode(listaRepartidores[i][7]));
            //cFechanacimiento.appendChild(document.createTextNode(listaRepartidores[i][8]));
            //cGenero.appendChild(document.createTextNode(listaRepartidores[i][9]));
            //cEdad.appendChild(document.createTextNode(listaRepartidores[i][11]));
            cSucursal.appendChild(document.createTextNode(listaRepartidores[i][11]));

            var estado = 'Activo';
            if (listaRepartidores[i][13] === '0') {
                estado = 'Inactivo';
            }
            cEstado.appendChild(document.createTextNode(estado));
         
            
            let botonEditar = document.createElement('i');
            botonEditar.classList.add("far","fa-edit");
            let elementa = document.createElement('a');
            elementa.setAttribute("href" , "modificar_repartidor.html");
            elementa.appendChild(botonEditar);
            elementa.addEventListener('click', redirect);
             elementa.dataset.nombre = listaRepartidores[i][0];
            cModificar.appendChild(elementa);

            let botonDesactivar = document.createElement('i');
            botonDesactivar.classList.add("far","fa-dot-circle");
            botonDesactivar.dataset.indice = i;
            botonDesactivar.addEventListener('click',desactivar);
            cDesactivar.appendChild(botonDesactivar);
            

        }






    }
}
function redirect(){
    let sNombre = this.dataset.nombre;

    setTemp(sNombre);
}

function desactivar(){
    let listaRepartidores= obtenerDatoLocal('listaRepartidoresLS');
    if(listaRepartidores[this.dataset.indice][13]=='1'){
        listaRepartidores[this.dataset.indice][13]='0'
    }
    else {
        listaRepartidores[this.dataset.indice][13]='1'
    };
    actualizarListaRepartidores(listaRepartidores[this.dataset.indice]);
    mostrarRepartidores();
}



