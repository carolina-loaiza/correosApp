
    obtenerSucursal();

    function obtenerSucursal()
    {
        let sNombre=getTemp();
        let infoRepartidor=buscarSucursal(sNombre);

        console.log(infoRepartidor);
        
        document.querySelector('#txtSucursal').value=infoRepartidor[0];
        document.querySelector('#txtDireccion').value=infoRepartidor[1];
        document.querySelector('#txtTelefono').value=infoRepartidor[2];
        
      
    }
    
    let botonActualizar=document.querySelector('#btnGuardar');
    botonActualizar.addEventListener('click',obtenerActualizar);

    function obtenerActualizar() 
    {
        let berror = validar();
    
        if (berror == true) 
        {
            swal({
                title: "Ocurrió un error",
                text: "Faltan los datos de los campos resaltados",
                icon: "error",
                button: "Ok",
                
            });
        }
        else
        {
    
            let aSucursales = [];
            let aInputs = [];
            let valido = true;
    
            let inputSucursal = document.querySelector('#txtSucursal');
            let sSucursal = inputSucursal.value;
    
            let inputDireccion = document.querySelector('#txtDireccion');
            let sDireccion = inputDireccion.value;
    
            let inputTelefono = document.querySelector('#txtTelefono');
            let sTelefono = inputTelefono.value;
    
    
            //let sEdad = Calcularedad();
    
            aSucursales.push(sSucursal, sDireccion, sTelefono);
            console.log(aSucursales);

            aInputs.push(inputSucursal, inputDireccion, inputTelefono);
            actualizarListaSucursales(aSucursales);
            removeTemp();
            swal({
                title: 'Datos Correctos',
                text: 'Continue',
                icon: 'success',
                button: "Ok",
    
    
            })  
    
        }
    }
    
    //Validacion
    
    function validar() 
    {
        let aInputs = document.querySelectorAll('input:required,select:required');
        let berror = false;
    
        for (let i = 0; i < aInputs.length; i++) 
        {
            if (aInputs[i].value === '') 
            {
                berror = true;
                aInputs[i].classList.add('input_error');
            }
            else { aInputs[i].classList.remove('input_error'); }
    
    
        } return berror;
    }
    
    
    // function Calcularedad() 
    // {
    //     let hoy = new Date();
    //     let fecha = document.querySelector('#txtFechanacimiento').value;
    //     let nacimiento = new Date(fecha);
    //     let edad = hoy.getFullYear() - nacimiento.getFullYear();
    //     return edad;
    // }