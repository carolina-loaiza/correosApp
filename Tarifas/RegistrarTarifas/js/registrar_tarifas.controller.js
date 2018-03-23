document.querySelector('#btnRegistrar').addEventListener('click', obtenerDatos);


//jala las sucursales ya registradas del LS
let listaSucursales = obtenerDatoLocal('RegistroLS');


function agregarSucursales() {
    for(let i = 0; i < listaSucursales.length; i++) {
        //crea un elemento opcion para meterlo en el select
        let opcion = document.createElement('option');
        opcion.value = listaSucursales[i][0];
        opcion.innerText = listaSucursales[i][0];
        document.getElementById('opSucursal').appendChild(opcion);
    }
}

agregarSucursales();




function obtenerDatos() {
    let inputs = document.querySelectorAll('input:required, select:required');
    let error = validarInputsRequeridos(inputs);

    if(error == true) {
        mostrarMensajeModal('error formulario');
    }
    else {
        let tarifaPeso = document.querySelector('#numTarifaPeso').value;
        let sucursalElegida = document.querySelector('#opSucursal').value;
        let tarifaKm = document.querySelector('#numTarifaKm').value;
        let sActivo = 1;

        for (let i= 0; i < listaSucursales.length; i++) {
            //si la sucursal de las registradas coincide con la sucursal seleccionada
            //se insertan en el arreglo las tarifas registradas
            if(listaSucursales[i][0] == sucursalElegida){
                listaSucursales[i].push(tarifaPeso);
                listaSucursales[i].push(tarifaKm)
                listaSucursales[i].push(sActivo);
            }
        }

        localStorage.setItem('RegistroLS', JSON.stringify(listaSucursales));
        mostrarMensajeModal('registro exitoso');

    }//else
    
    
}

