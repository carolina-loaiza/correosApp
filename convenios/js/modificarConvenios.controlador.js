let botonActualizar=document.querySelector('#btnGuardar');
botonActualizar.addEventListener('click',obtenerActualizar);

obtenerConvenio();

function obtenerConvenio(){
    let sNombre=getTemp();
    let infoConvenio=buscarConvenio(sNombre);

    console.log(infoConvenio);
    
    document.querySelector('#txtNombre').value=infoConvenio[1];
    document.querySelector('#txtDescripcion').value=infoConvenio[2];
}



function obtenerActualizar() {
   
        let aNuevoConvenio = [];

        let id = getTemp();
        let nombre = document.querySelector('#txtNombre').value;
        let descripcion = document.querySelector('#txtDescripcion').value;
        let activo = '1';

        aNuevoConvenio.push(id, nombre, descripcion, activo);
        actualizarListaConvenios(aNuevoConvenio);
        removeTemp();
        window.location.href = 'ListarConvenios.html'

    }

