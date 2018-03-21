function getListaEncAduanas(){
    let ListaEncAduanas = JSON.parse(localStorage.getItem('ListaEncAduanasLS'));

    if(ListaEncAduanas==null){
        ListaEncAduanas=[];
    }
    return ListaEncAduanas;
        
    }
    function setListaEncAduanas(pinfoRepartidores){
        let ListaEncAduanas = getListaEncAduanas();
        ListaEncAduanas.push(pinfoRepartidores);

        localStorage.setItem('ListaEncAduanasLS',JSON.stringify(ListaEncAduanas));

    }
function buscarRepartidor(pNombre){
    let ListaEncAduanas=getListaEncAduanas();
    let repartidorEncontrado=[];
    for(let i=0;i<ListaEncAduanas.length;i++){
    if(pNombre == ListaEncAduanas[i][0]){
        repartidorEncontrado=ListaEncAduanas[i];
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


function actualizarListaEncAduanas(pinfoRepartidores){
    let ListaEncAduanas=getListaEncAduanas();
    for(let i=0;i<ListaEncAduanas.length;i++){
        if(ListaEncAduanas[i][7]==pinfoRepartidores[7]){
            ListaEncAduanas[i]=pinfoRepartidores;
            localStorage.setItem('ListaEncAduanasLS',JSON.stringify(ListaEncAduanas));
        }
    }
}