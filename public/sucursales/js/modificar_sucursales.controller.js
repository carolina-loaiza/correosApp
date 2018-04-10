
    obtenerSucursal();

    let sNombre=getTemp();
        let infoRepartidor=buscarSucursal(sNombre);


    function obtenerSucursal()
    {
        let sNombre=getTemp();
        let infoRepartidor=buscarSucursal(sNombre);
        
        document.querySelector('#txtSucursal').value=infoRepartidor[0];
        document.querySelector('#txtDireccion').value=infoRepartidor[1];
        document.querySelector('#txtTelefono').value=infoRepartidor[2];
        
      
    }
    
    let botonActualizar=document.querySelector('#btnGuardar');
    botonActualizar.addEventListener('click',obtenerActualizar);

    function obtenerActualizar() {
       
            let aSucursales = [];
            let valido = true;
    
            let inputSucursal = document.querySelector('#txtSucursal');
            let sSucursal = inputSucursal.value;
    
            let inputDireccion = document.querySelector('#txtDireccion');
            let sDireccion = inputDireccion.value;
    
            let inputTelefono = document.querySelector('#txtTelefono');
            let sTelefono = inputTelefono.value;

            let activo = '1';
    
    
    
            aSucursales.push(sSucursal, sDireccion, sTelefono, activo);
            actualizarListaSucursales(aSucursales);
            removeTemp();
            window.location.href = 'listar_sucursal.html';
        }
    

    
    