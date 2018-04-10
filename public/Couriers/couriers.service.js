
function buscarCourierPorNombre(pCourier) {
    let listaCouriers = obtenerDatoLocal('listaCouriersLS');
    let courierEcontrado = [];

    for(let i = 0; i < listaCouriers.length; i++) {
        if(pCourier == listaCouriers[i][0]) {
            courierEcontrado = listaCouriers[i];
            break;
        }//if
    }//for
    return courierEcontrado;
}

function setTemp(data) {
    localStorage.setItem('tempLS', JSON.stringify(data));
}

function getTemp() {
    return JSON.parse(localStorage.getItem('tempLS'));
}

function removeTemp() {
    localStorage.removeItem('tempLS')
}

function actualizarCourier(pInfoCourier) {
    let listaCouriers = obtenerDatoLocal('listaCouriersLS');

    for(let i = 0; i < listaCouriers.length; i++) {
        if(pInfoCourier[0] == listaCouriers[i][0]) {
            listaCouriers[i][0] = pInfoCourier[0];
            listaCouriers[i][1] = pInfoCourier[1];
            listaCouriers[i][2] = pInfoCourier[2];
        }//if
    }//for loop
    localStorage.setItem('listaCouriersLS', JSON.stringify(listaCouriers));
}

