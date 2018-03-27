function getListaEncAduanas()
{
    let ListaEncAduanas = JSON.parse(localStorage.getItem('ListaEncAduanasLS'));

    if(ListaEncAduanas==null)
    {
        ListaEncAduanas=[];
    }
    return ListaEncAduanas;
    
}


function setListaEncAduanas(pinfoRepartidores)
{
    let ListaEncAduanas = getListaEncAduanas();
    ListaEncAduanas.push(pinfoRepartidores);

    localStorage.setItem('ListaEncAduanasLS',JSON.stringify(ListaEncAduanas));

}

///////////////////////////////////////////////////////////////////////////////////

function buscarRepartidor(pNombre)
{
    let ListaEncAduanas=getListaEncAduanas();
    let encAduanaEncontrado=[];
    for(let i=0;i<ListaEncAduanas.length;i++){
    if(pNombre == ListaEncAduanas[i][0]){
        encAduanaEncontrado=ListaEncAduanas[i];
    }}
    return encAduanaEncontrado;
}





function setTemp(data)
{
    localStorage.setItem('tempAduanaLs', JSON.stringify(data));
}

function getTemp()
{
    return JSON.parse(localStorage.getItem('tempAduanaLs'));
}

function removeTemp()
{
   localStorage.removeItem('tempAduanaLs');
}


function actualizarListaEncAduanas(pinfoRepartidores)
{
    let ListaEncAduanas=getListaEncAduanas();
    for(let i=0;i<ListaEncAduanas.length;i++)
    {
        if(ListaEncAduanas[i][0]==pinfoRepartidores[0])
        {
            ListaEncAduanas[i]=pinfoRepartidores;
            localStorage.setItem('ListaEncAduanasLS',JSON.stringify(ListaEncAduanas));
        }
    }
}