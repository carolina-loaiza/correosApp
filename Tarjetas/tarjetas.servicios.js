function setNuevasTarjetas(paNuevaTarjeta) {
    let listaTarjetas = getNuevasTarjetas();

    listaTarjetas.push(paNuevaTarjeta);

    localStorage.setItem('listaTarjetasLS', JSON.stringify(listaTarjetas));
}

function getNuevasTarjetas() {
    let listaTarjetas = JSON.parse(localStorage.getItem('listaTarjetasLS'));

    if (listaTarjetas == null) {
        listaTarjetas = [];
    }
    return listaTarjetas;
}

function setTemp(data) {
    localStorage.setItem('tempLs', JSON.stringify(data));
}

function getTemp() {
    return JSON.parse(localStorage.getItem('tempLs'));
}

function removeTemp() {
    localStorage.removeItem('tempLs');
}

function buscarTarjeta(pNumero) {
    let listaTarjetas = getNuevasTarjetas();
    let tarjetaEncontrada = [];
    for (let i = 0; i < listaTarjetas.length; i++) {
        if (pNumero == listaTarjetas[i][0]) {
            tarjetaEncontrada = listaTarjetas[i];
        }
    }
    return tarjetaEncontrada;
}

function actualizarlistaTarjetas(pinfoTarjetas) {
    let listaTarjetas = getNuevasTarjetas();
    for (let i = 0; i < listaTarjetas.length; i++) {
        if (listaTarjetas[i][0] == pinfoTarjetas[0]) {
            listaTarjetas[i] = pinfoTarjetas;
            localStorage.setItem('listaTarjetasLS', JSON.stringify(listaTarjetas));
        }
    }
}