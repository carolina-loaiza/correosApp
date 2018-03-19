
document.querySelector('#txtFiltro').addEventListener('keyup',mostrarRutas);

mostrarRutas();

function mostrarRutas() {
    let listaRutas = obtenerDatoLocal('listaRutasLS');

    let cuerpoTabla = document.querySelector('#tblbase tbody');
    let sFiltro = document.querySelector('#txtFiltro').value;

    cuerpoTabla.innerHTML = '';

    for (let i = 0; i < listaRutas.length; i++) {
        if (listaRutas[i][0].toLowerCase().includes(sFiltro.toLowerCase())||listaRutas [i][1].toLowerCase().includes(sFiltro.toLowerCase())) {
            let fila = cuerpoTabla.insertRow();
            let cSucursal =fila.insertCell();
            let cNombrederuta = fila.insertCell();
            //let cDescripcion= fila.insertCell();
            
            let cModificar = fila.insertCell();
            let cDesactivar = fila.insertCell();
            cModificar.classList.add('acciones');
            cDesactivar.classList.add('acciones');
            cSucursal.appendChild(document.createTextNode(listaRutas[i][0]));
            cNombrederuta.appendChild(document.createTextNode(listaRutas[i][1]));
            //cDescripcion.appendChild(document.createTextNode(listaRutas[i][2]));
            
            let botonEditar  = document.createElement('i');
            botonEditar.classList.add("far","fa-edit");
            let elementa = document.createElement('a');
            elementa.setAttribute("href" , "../modificarRutas/modificar.html");
            elementa.appendChild(botonEditar);
            

            elementa.addEventListener('click', redirect);

            elementa.dataset.nombre = listaRutas[i][1];

            cModificar.appendChild(elementa);
            
            


            let botonDesactivar = document.createElement('i');
            botonDesactivar.classList.add("fas","fa-times");
            botonDesactivar.dataset.nombre = listaRutas[i][1];
            cDesactivar.appendChild(botonDesactivar);



        }




    }
}
function redirect(){
    let sNombre = this.dataset.nombre;

    setTemp(sNombre);
}

