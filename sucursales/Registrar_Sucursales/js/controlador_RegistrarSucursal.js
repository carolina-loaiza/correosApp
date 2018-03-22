//////REGISTRAR INTERFAZ

document.querySelector('#btnRegistrar').addEventListener('click',registrar);

function registrar()
{
    var error = validar();
    
    if(error==true)
    {
        swal('error','Existen campos vacios','warning');
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

        setInfoRegistro(aRegistro);
        
     
        swal('Registro exitoso','Existen Campos Vacios','success');
    }
}

function validar()
{
    var inputs = document.querySelectorAll('input:required');
    var bError = false;

    for(var i = 0; i < inputs.length; i++)
    {
        if (inputs[i].value == '')
        {
            bError = true;
            inputs[i].classList.add('error');
        }
        else
        {
            inputs[i].classList.remove('error');
        }
    } 
    return bError;
} 

