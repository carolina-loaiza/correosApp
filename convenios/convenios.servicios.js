function setNuevosConvenios(paNuevosConvenios){
    let listaConvenios = getNuevosConvenios();

    listaConvenios.push(paNuevosConvenios);

    localStorage.setItem('listaConveniosLS', JSON.stringify(listaConvenios));
}
function getNuevosConvenios(){
    let listaConvenios = JSON.parse(localStorage.getItem('listaConveniosLS'));

    if(listaConvenios == null){
        listaConvenios = [];
    }
    return listaConvenios;
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

function buscarConvenio(pNombre){
    let listaConvenios=getNuevosConvenios();
    let convenioEncontrado=[];
    for(let i=0;i<listaConvenios.length;i++){
    if(pNombre == listaConvenios[i][0]){
        convenioEncontrado=listaConvenios[i];
    }}
    return convenioEncontrado;
}

function actualizarListaConvenios(pinfoConvenios){
    let listaConvenios=getNuevosConvenios();
    for(let i=0;i<listaConvenios.length;i++){
        if(listaConvenios[i][0]==pinfoConvenios[0]){
            listaConvenios[i]=pinfoConvenios;
            localStorage.setItem('listaConveniosLS',JSON.stringify(listaConvenios));
        }
    }
}