//////REGISTRAR INTERFAZ

document.querySelector('#btnRegistrar').addEventListener('click',registrar);

function registrar()
{
    var error = validarInputsRequeridos(document.querySelectorAll('input:required'));
    
    if(error==true)
    {
        mostrarMensajeModal('error formulario');
    }
    else
    {
        var aRegistro = [];
        var infoRegistro = [];  

        //var sUsr = 'adrian';        
        var sSucursal = document.querySelector('#txtSucursal').value;  
        var sDireccion = document.querySelector('#txtDireccion').value;
        var sTelefono = document.querySelector('#txtTelefono').value;       
    
        aRegistro=[sSucursal,sDireccion,sTelefono];
        console.log(aRegistro);

        guardarDatoLocal('RegistroLS', aRegistro); 
        mostrarMensajeModal('registro exitoso');
    }
};
