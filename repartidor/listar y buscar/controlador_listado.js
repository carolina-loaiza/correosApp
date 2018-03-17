
document.querySelector('#txtFiltro').addEventListener('keyup',mostrarRepartidores);

mostrarRepartidores();

function mostrarRepartidores() {
    let listaRepartidores = getListaRepartidores();

    let cuerpoTabla = document.querySelector('#tblbase tbody');
    let sFiltro = document.querySelector('#txtFiltro').value;

    cuerpoTabla.innerHTML = '';

    for (let i = 0; i < listaRepartidores.length; i++) {
        if (listaRepartidores[i][0].toLowerCase().includes(sFiltro.toLowerCase())) {
            let fila = cuerpoTabla.insertRow();

            let cPrimernombre = fila.insertCell();
            // let cSegundonombre = fila.insertCell();
            let cPrimerapellido = fila.insertCell();
            //let cSegundoApellido = fila.insertCell();
            // let cIdentificacion = fila.insertCell();
            let cTelefono1 = fila.insertCell();
            // let cTelefono2 = fila.insertCell();
            let cCorreo = fila.insertCell();
            //let cFechanacimiento = fila.insertCell();
            //let cGenero = fila.insertCell();
            //let cEdad = fila.insertCell();
            let cModificar = fila.insertCell();
            let cDesactivar = fila.insertCell();

            cPrimernombre.appendChild(document.createTextNode(listaRepartidores[i][0]));
            // cSegundonombre.appendChild(document.createTextNode(listaRepartidores[i][1]));
            cPrimerapellido.appendChild(document.createTextNode(listaRepartidores[i][2]));
            // cSegundoapellido.appendChild(document.createTextNode(listaRepartidores[i][3]));
            //cIdentificacion.appendChild(document.createTextNode(listaRepartidores[i][4]));
            cTelefono1.appendChild(document.createTextNode(listaRepartidores[i][5]));
            //cTelefono2.appendChild(document.createTextNode(listaRepartidores[i][6]));
            cCorreo.appendChild(document.createTextNode(listaRepartidores[i][7]));
            //cFechanacimiento.appendChild(document.createTextNode(listaRepartidores[i][8]));
            //cGenero.appendChild(document.createTextNode(listaRepartidores[i][9]));
            //cEdad.appendChild(document.createTextNode(listaRepartidores[i][10]));

            let botonEditar = document.createElement('i');
            //botonEditar.innerText = 'Modificar';
            botonEditar.classList.add("far","fa-edit");
            botonEditar.dataset.codigo = listaRepartidores[i][0];
            cModificar.appendChild(botonEditar);
            cModificar.classList.add('iconos');
            //botonEditar.href='../registrar/registrar.html';


            let botonDesactivar = document.createElement('i');
            //botonEliminar.innerText = 'Desacticar';
            botonDesactivar.classList.add("fas","fa-times");
            botonDesactivar.dataset.desactivar = listaRepartidores[i][1];
            cDesactivar.appendChild(botonDesactivar);
            cDesactivar.classList.add('iconos');


        }






    }
}

/*function obtenerDatosActualizar() {
    let aRepartidores = [];

    let sPrimernombre = document.querySelector('#txtPrimernombre').value;
    let sSegundonombre = document.querySelector('#txtSegundonombre').value;
    let sPrimerapellido = document.querySelector('#txtPrimerapellido').value;
    let sSegundoapellido = document.querySelector('#txtSegundoApellido').value;
    let sIdentificacion = document.querySelector('#txtIdentificacion').value;
    let sTelefono1 = document.querySelector('#txtTelefono1').value;
    let sTelefono2 = document.querySelector('#txtTelefono2').value;

    document.querySelector('#txtCorreo').disable=true;

    let sFechadenacimiento= document.querySelector('#txtFechadenacimiento').value;
    let selectGenero = document.querySelector('#stlGenero');

    
    aRepartidores.push(sIdentificacion, sNombre, sApellido, sCorreo);

    actualizarListaClientes(aInfoCliente);
    mostrarRepartidores();
    botonRegistrar.classList.remove('ocultar');
    botonActualizar.classList.add('ocultar');
}*/