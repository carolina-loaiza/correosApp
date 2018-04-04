let botonActualizar=document.querySelector('#btnGuardar');
botonActualizar.addEventListener('click',obtenerActualizar);

obtenerConvenio();

function obtenerConvenio(){
    let sNombre=getTemp();
    let infoConvenio=buscarConvenio(sNombre);

    console.log(infoConvenio);
    
    document.querySelector('#txtNombre').value=infoConvenio[0];
    document.querySelector('#txtDescripcion').value=infoConvenio[1];
    document.querySelector('#numId').value = infoConvenio[3];
}



function obtenerActualizar() {
   
        let aNuevoConvenio = [];

        let nombre = document.querySelector('#txtNombre').value;
        let descripcion = document.querySelector('#txtDescripcion').value;
        let activo = '1';
        let id = document.querySelector('#numId').value;

        aNuevoConvenio.push(nombre, descripcion, activo, id);
        actualizarListaConvenios(aNuevoConvenio);
        removeTemp();
        window.location.href = 'ListarConvenios.html'

    }

