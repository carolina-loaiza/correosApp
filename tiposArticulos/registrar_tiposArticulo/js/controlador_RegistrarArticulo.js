//////REGISTRAR tipos de articulo


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
        var aRegistroArticulos = [];
        

        //var sUsr = 'adrian';        
        var sCategoria = document.querySelector('#txtCategoria').value;  
        var sImpuestos = document.querySelector('#txtImpuestos').value;
               
    
        aRegistroArticulos=[sCategoria,sImpuestos];
        console.log(aRegistroArticulos);

        setInfoRegistro(aRegistroArticulos);
        
     
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

