function setNuevasTarjetas(paNuevaTarjeta){
    let listaTarjetas = getNuevasTarjetas();

    listaTarjetas.push(paNuevaTarjeta);

    localStorage.setItem('listaTarjetasLS', JSON.stringify(listaTarjetas));
}
function getNuevasTarjetas(){
    let listaTarjetas = JSON.parse(localStorage.getItem('listaTarjetasLS'));

    if(listaTarjetas == null){
        listaTarjetas = [];
    }
    return listaTarjetas;
}