mostrarConvenios();

function mostrarConvenios(){
    let listaConvenios = getNuevosConvenios();
    let cuerpoTabla = document.querySelector('#tblConvenios tbody');
    cuerpoTabla.innerHTML = '';

    for(let i = 0; i <listaConvenios.length; i++){

        let fila = cuerpoTabla.insertRow(i);
        let cNombre = fila.insertCell();
        let cDescripcion = fila.insertCell();

        let sNombre = document.createTextNode(listaConvenios[i][0]);
        let sDescripcion = document.createTextNode(listaConvenios[i][1]);

        cNombre.appendChild(sNombre);
        cDescripcion.appendChild(sDescripcion);
    }
}