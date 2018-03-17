function getInfoEncargadoSucursal() {
    let listaEncargados = JSON.parse(localStorage.getItem('listaEncargadosLS'));
    if(listaEncargados == null) {
        listaEncargados = [];
    }
    return listaEncargados;
}

function setInfoEncargadosSucursal(pInfoEncargado) {
    let listaEncargados = getInfoEncargadoSucursal();
     listaEncargados.push(pInfoEncargado);
     localStorage.setItem('listaEncargadosLS', JSON.stringify(listaEncargados));


}
//retorna un arreglo con los correos de los encargados de sucursal
//se llama al darle click al boton de editar
function buscarEncargadoPorCorreo(pCorreo) {
let listaEncargados = getInfoEncargadoSucursal();
let encargadoEncontrado = [];

for(let i = 0; i < listaEncargados.length; i++) {
    if(pCorreo == listaEncargados[i][4]) {
       encargadoEncontrado = listaEncargados[i];
       break; 
        }//if
    }//for
    return encargadoEncontrado;
}