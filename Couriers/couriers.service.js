function getInfoCourier() {
    let listaCouriers = JSON.parse(localStorage.getItem('listaCouriersLS'));
    if(listaCouriers == null) {
        listaCouriers = [];
    }
    return listaCouriers;
}

function setInfoCouriers(pInfoCourier) {
    let listaCouriers = getInfoCourier();
    listaCouriers.push(pInfoCourier);
    localStorage.setItem('listaCouriersLS', JSON.stringify(listaCouriers));
}

function buscarCourierPorNombre(pCourier) {
    let listaCouriers = getInfoCourier();
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
    let listaCouriers = getInfoCourier();

    for(let i = 0; i < listaCouriers.length; i++) {
        if(pInfoCourier[0] == listaCouriers[i][0]) {
            listaCouriers[i][0] = pInfoCourier[0];
            listaCouriers[i][1] = pInfoCourier[1];
        }//if
    }//for loop
    localStorage.setItem('listaCouriersLS', JSON.stringify(listaCouriers));
}

