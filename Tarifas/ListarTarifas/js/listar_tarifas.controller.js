
mostrarTarifas();

document.querySelector('#txtFiltro').addEventListener('keyup', mostrarTarifas);

function mostrarTarifas() {
    listaTarifas = obtenerDatoLocal('RegistroLS');
    let tbody = document.querySelector('#tblTarifas tbody');

    let sFiltro = document.querySelector('#txtFiltro').value;

    tbody.innerHTML = '';

    for(let i = 0; i < listaTarifas.length; i++) {
        if(listaTarifas[i][0].includes(sFiltro)) {
            let fila = tbody.insertRow();

            let cSucursal = fila.insertCell();
            let cTarifaPeso = fila.insertCell();
            let cTarifaKm = fila.insertCell();

            let cEditar = fila.insertCell();
            let cDesactivar = fila.insertCell();

            cEditar.classList.add('acciones');
            cDesactivar.classList.add('acciones');

            cSucursal.appendChild(document.createTextNode(listaTarifas[i][0]));
            cTarifaPeso.appendChild(document.createTextNode(listaTarifas[i][3]));
            cTarifaKm.appendChild(document.createTextNode(listaTarifas[i][4]));

            let atag = document.createElement('a');
            atag.setAttribute('href', "index_modificar.html");

            let botonEditar = document.createElement('i');
            botonEditar.classList.add("far", "fa-edit");

            atag.appendChild(botonEditar);
            atag.dataset.sucursal = listaTarifas[i][0];
            cEditar.appendChild(atag);

            atag.addEventListener('click', redirect);

            let botonDesactivar = document.createElement('i');
            botonDesactivar.classList.add("fas", "fa-times");
            botonDesactivar.dataset.sucursal = listaTarifas[i][0];
            cDesactivar.appendChild(botonDesactivar);


        }
    }
}

//funcion que redirige a modificar
function redirect() {
    let sSucursal = this.dataset.sucursal;
    setTemp(sSucursal);
}


//para desplegar las tarifas en la tabla, es necesario saber la posicion
//del nombre de la sucursal, y de las tarifas en el arreglo
//*buscar con el developer tool y el LS en chrome