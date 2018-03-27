
obtenerSucursal();
let botonActualizar = document.querySelector('#btnGuardar');
botonActualizar.addEventListener('click',obtenerActualizar);



function obtenerSucursal()
{
    let sNombre=getTemp();
    let infoAduana=buscarRepartidor(sNombre);

    console.log(infoAduana);
    
    document.querySelector('#txtNombre').value=infoAduana[0];
    document.querySelector('#txtPrimerApellido').value=infoAduana[1];
    document.querySelector('#txtTelefono').value = infoAduana[2];
    
}


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

        let aAduana = [];
        let aInputs = [];
        let valido = true;

        let inputNombre = document.querySelector('#txtNombre');
        let sNombre = inputNombre.value;

        let inputPrimerApellido = document.querySelector('#txtPrimerApellido');
        let sPrimerApellido = inputPrimerApellido.value;

        let inputTelefono = document.querySelector('#txtTelefono');
        let sTelefono = inputTelefono.value;


        let temp = getTemp();
        

        aAduana.push(temp, sNombre, sPrimerApellido, sTelefono);
        console.log(aAduana);

        aInputs.push( inputNombre, inputPrimerApellido, inputTelefono );//TALVES HAY QUE AGREGARLE EL TEMP****
        actualizarListaEncAduanas(aAduana);
        removeTemp();
        //limpiar();


      
        
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
        else 
        {
             aInputs[i].classList.remove('input_error');
        }


    } return berror;
}

function limpiar()
{
    document.querySelector('#txtNombre').value = '';
    document.querySelector('#txtPrimerApellido').value = '';
    document.querySelector('#txtTelefono').value = '';
        
}

