//retorna un arreglo con los correos de los encargados de sucursal
//se llama al darle click al boton de editar
function buscarEncargadoPorCorreo(pCorreo) {
let listaEncargados = obtenerDatoLocal('listaEncargadosLS');
let encargadoEncontrado = [];

for(let i = 0; i < listaEncargados.length; i++) {
    if(pCorreo == listaEncargados[i][4]) {
       encargadoEncontrado = listaEncargados[i];
       break; 
        }//if
    }//for
    return encargadoEncontrado;
}

function setTemp(data){
    localStorage.setItem('tempLS', JSON.stringify(data));
}

function getTemp (){
    return JSON.parse(localStorage.getItem('tempLS'));
}


//esta funcion se llama una vez actualizados los datos
function removeTemp (){
    localStorage.removeItem('tempLS');
}

function actualizarEncargado(pInfoEncargado) {
    let listaEncargados = obtenerDatoLocal('listaEncargadosLS');

    for(let i = 0; i < listaEncargados.length; i++) {
        //si los correos coinciden, los datos se sobre escriben
        if(pInfoEncargado[4] == listaEncargados[i][4]) {
            listaEncargados[i] = pInfoEncargado;  
        }//if
    }//for loop
    localStorage.setItem('listaEncargadosLS', JSON.stringify(listaEncargados));
}