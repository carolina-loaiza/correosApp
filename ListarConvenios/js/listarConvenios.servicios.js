function getNuevosConvenios(){
    let listaConvenios = JSON.parse(localStorage.getItem('listaConveniosLS'));

    if(listaConvenios == null){
        listaConvenios = [];
    }
    return listaConvenios;
}