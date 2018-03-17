function getListaRepartidores(){
    let listaRepartidores=JSON.parse(localStorage.getItem('listaRepartidoresLS'));

    if(listaRepartidores==null){
        listaRepartidores=[];
    }
    return listaRepartidores;
        
    }
    function setListaRepartidores(pinfoRepartidores){
        let listaRepartidores=getListaRepartidores();
        listaRepartidores.push(pinfoRepartidores);

        localStorage.setItem('listaRepartidoresLS',JSON.stringify(listaRepartidores));

    }
function buscarRepartidorPorNombre(pNombre){
    let listaRepartidores=getListaRepartidores();
    let repartidorEncontrado=[];
    for(let i=0;i<listaRepartidores.length;i++);
    if(listaRepartidores[i][0]==pNombre){
        repartidorEncontrado=listaRepartidores[i];
    }
    return repartidorEncontrado;
}