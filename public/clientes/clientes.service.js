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
                listaClientes[i] = pInfoCliente;    
            }//if
        }//for loop
        localStorage.setItem('listaUsuarios', JSON.stringify(listaClientes));
    }