function getNuevosMetodos(){
    let listaMetodos = JSON.parse(localStorage.getItem('listaTarjetasLS'));

    if(listaMetodos == null){
        listaMetodos = [];
    }
    return listaMetodos;
}