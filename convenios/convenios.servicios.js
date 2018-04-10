

function setTemp(data){
    localStorage.setItem('tempLs', JSON.stringify(data));
}
function getTemp(){
    return JSON.parse(localStorage.getItem('tempLs'));
}

function removeTemp(){
   localStorage.removeItem('tempLs');
}

function buscarConvenio(pId){
    let listaConvenios=obtenerDatoLocal('listaConveniosLS');
    let convenioEncontrado=[];
    for(let i=0;i<listaConvenios.length;i++){
    if(pId == listaConvenios[i][0]){
        convenioEncontrado=listaConvenios[i];
        break;
    }
}
    return convenioEncontrado;
}

function actualizarListaConvenios(pinfoConvenios){
    let listaConvenios=obtenerDatoLocal('listaConveniosLS');
    
    for(let i=0;i<listaConvenios.length;i++){
        if(pinfoConvenios[0] == listaConvenios[i][0]){
            listaConvenios[i]=pinfoConvenios;
        }//if
    }//for
    localStorage.setItem('listaConveniosLS',JSON.stringify(listaConvenios));
}
