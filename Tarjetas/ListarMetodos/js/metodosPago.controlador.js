document.querySelector('#txtFiltro').addEventListener('keyup', mostrarMetodos);
mostrarMetodos();

function mostrarMetodos(){
    let sFiltro = document.querySelector('#txtFiltro').value;
    let listaMetodos = getNuevosMetodos();
    let cuerpoTabla = document.querySelector('#tblMetodos tbody');
    cuerpoTabla.innerHTML = '';

    for(let i = 0; i <listaMetodos.length; i++){
        if (listaMetodos[i][0].toLowerCase().includes(sFiltro.toLowerCase())){
            let fila = cuerpoTabla.insertRow();
            let cTitular = fila.insertCell();
            let cNumero = fila.insertCell();
            let cExpiracion = fila.insertCell();
            let cModificar = fila.insertCell();
            let cEliminar = fila.insertCell();

            cModificar.classList.add('acciones');
            cEliminar.classList.add('acciones');

            let sTitular = document.createTextNode(listaMetodos[i][0]);
            let sNumero = document.createTextNode(listaMetodos[i][1]);
            let sExpiracion = document.createTextNode(listaMetodos[i][1]);

            cTitular.appendChild(sTitular);
            cNumero.appendChild(sNumero);
            cExpiracion.appendChild(sExpiracion);

            //Creación del botón de editar
            let botonEditar = document.createElement('i');

            botonEditar.classList.add("far", "fa-edit", "ed-delink");
            botonEditar.dataset.codigo = listaMetodos[i][0];
            botonEditar.addEventListener('click', editar);
            cModificar.appendChild(botonEditar);

            //Creación del botón de deshabilitar
            let botonDeshabilitar = document.createElement('i');

            botonDeshabilitar.classList.add("fas", "fa-times", "ed-delink", "disable");
            botonDeshabilitar.dataset.codigo = listaMetodos[i][0];
            botonDeshabilitar.addEventListener('click', deshabilitar);       
            cEliminar.appendChild(botonDeshabilitar);
        }
    }
}
function editar(){

}
function deshabilitar(){

}