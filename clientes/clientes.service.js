function buscarClientePorCorreo(pCorreo) {
    let listaClientes = obtenerDatoLocal('listaUsuarios');
    let clienteEncontrado = [];
    
    for(let i = 0; i < listaClientes.length; i++) {
        if(pCorreo == listaClientes[i][5]) {
           clienteEncontrado = listaClientes[i];
           break; 
            }//if
        }//for
        return clienteEncontrado;
    }
    
    function setTemp(data){
        localStorage.setItem('tempLS', JSON.stringify(data));
    }
    
    function getTemp (){
        return JSON.parse(localStorage.getItem('tempLS'));
    }
    
    
    //esta funcion se llama una vez actualizados los datos
    function removeTemp (){
        localStorage.removeItem('tempLS');
    }
    //CAMBIAR
    function actualizarCliente(pInfoCliente) {
        let listaCientes = obtenerDatoLocal('listaUsuarios');
    
        for(let i = 0; i < listaClientes.length; i++) {
            //si los correos coinciden, los datos se sobre escriben
            if(pInfoCliente[5] == listaClientes[i][5]) {
                listaClientes[i][0] = pInfoCliente[0];
                listaClientes[i][1] = pInfoCliente[1];
                listaClientes[i][2] = pInfoCliente[2];
                listaClientes[i][3] = pInfoCliente[3];
                listaClientes[i][4] = pInfoCliente[4];
                listaClientes[i][5] = pInfoCliente[5];
                listaClientes[i][6] = pInfoCliente[6];
                listaClientes[i][7] = pInfoCliente[7];
                listaClientes[i][8] = pInfoCliente[8];
                listaClientes[i][9] = pInfoCliente[9];
                listaClientes[i][10] = pInfoCliente[10];  
                listaClientes[i][11] = pInfoCliente[11];  
                listaClientes[i][12] = pInfoCliente[12];     
            }//if
        }//for loop
        localStorage.setItem('listaUsuarios', JSON.stringify(listaClientes));
    }