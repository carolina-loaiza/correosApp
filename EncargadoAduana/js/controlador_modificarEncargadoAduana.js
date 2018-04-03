
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
    document.querySelector('#txtIdentificacion').value = infoAduana[2];
    document.querySelector('#txtCorreo').value = infoAduana[3];
    document.querySelector('#txtTelefono1').value = infoAduana[4];

    document.querySelector('#txtFechanacimiento').value = infoAduana[5];//este se ingresa dif

    document.querySelector('#txtSegundonombre').value = infoAduana[6];
    document.querySelector('#txtSegundoapellido').value = infoAduana[7];

    //agregar foto [8] 
    document.querySelector('#txtTelefono2').value = infoAduana[9];
    //Genero [10]
    //seleccione sucursal [11]

        
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

        

        let inputNombre = document.querySelector('#txtNombre');//0
        let sNombre = inputNombre.value;

        let inputPrimerApellido = document.querySelector('#txtPrimerApellido');//1
        let sPrimerApellido = inputPrimerApellido.value;

        let inputIdentificacion = document.querySelector('#txtIdentificacion');//2
        let sIdentificacion = inputIdentificacion.value;

        let inputCorreo = document.querySelector('#txtCorreo');//3
        let sCorreo = inputCorreo.value;

        let inputTelefono1 =document.querySelector('#txtTelefono1');//4
        let sTelefono1 = inputTelefono1.value;

        let inputFechaNacimiento = document.querySelector('#txtFechanacimiento');//5
        let sFechaNacimiento = inputFechaNacimiento.value;

        let inputSegundoNombre = document.querySelector('#txtSegundonombre');//6
        let sSegundoNombre = inputSegundoNombre.value;

        let inputSegundoApellido = document.querySelector('#txtSegundoapellido');//7
        let sSegundoApellido = inputSegundoApellido.value;

        let inputTelefono2 = document.querySelector('#txtTelefono2');
        let sTelefono2 = inputTelefono2.value;       


        let temp = getTemp();
        
      
        aAduana.push(sNombre, sPrimerApellido, sIdentificacion, sCorreo, sTelefono1,sFechaNacimiento, sSegundoNombre,sSegundoApellido,sTelefono2);
        console.log(aAduana);

        // aInputs.push( inputNombre, inputPrimerApellido, inputTelefono );//TALVES HAY QUE AGREGARLE EL TEMP****
        actualizarListaEncAduanas(aAduana);
        removeTemp();
        window.location.href = 'listarEncargadoAduana.html';
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

