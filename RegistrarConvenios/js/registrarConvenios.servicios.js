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