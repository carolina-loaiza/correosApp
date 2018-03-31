
function buscarRepartidor(pNombre){
    let listaRepartidores=obtenerDatoLocal('listaRepartidoresLS');
    let repartidorEncontrado=[];
    for(let i=0;i<listaRepartidores.length;i++){
    if(pNombre == listaRepartidores[i][0]){
        repartidorEncontrado=listaRepartidores[i];
    }}
    return repartidorEncontrado;
}

function setTemp(data){
    localStorage.setItem('tempLs', JSON.stringify(data));
}
function getTemp(){
    return JSON.parse(localStorage.getItem('tempLs'));
}

function removeTemp(){
   localStorage.removeItem('tempLs');
}


function actualizarListaRepartidores(pinfoRepartidores){
    let listaRepartidores=obtenerDatoLocal('listaRepartidoresLS');
    for(let i=0;i<listaRepartidores.length;i++){
        if(listaRepartidores[i][7]==pinfoRepartidores[7]){
            listaRepartidores[i]=pinfoRepartidores;
        }
    }
    localStorage.setItem('listaRepartidoresLS',JSON.stringify(listaRepartidores));

}

