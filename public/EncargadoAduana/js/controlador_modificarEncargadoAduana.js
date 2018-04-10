
obtenerEncargadoAduana();

let botonActualizar = document.querySelector('#btnGuardar');
botonActualizar.addEventListener('click',obtenerEncAdua_Actualizar);


function obtenerEncargadoAduana()
{
    let snombreENC=getTempEncAdu();
    let infoAduana=buscarEncargadoAduana(snombreENC);
 
    console.log(infoAduana);
    
    document.querySelector('#txtNombre').value=infoAduana[1];
    document.querySelector('#txtSegundonombre').value = infoAduana[2];
    document.querySelector('#txtPrimerApellido').value=infoAduana[3];
    document.querySelector('#txtSegundoapellido').value = infoAduana[4];
    document.querySelector('#txtIdentificacion').value = infoAduana[5]
    document.querySelector('#txtCorreo').value = infoAduana[6];
    document.querySelector('#txtTelefono1').value = infoAduana[7];
    document.querySelector('#txtTelefono2').value = infoAduana[8];
    document.querySelector('#txtFechanacimiento').value = infoAduana[9];
    document.querySelector('#sltGenero').value = infoAduana[10];
    document.querySelector('#sltSucursal').value = infoAduana[11];


    document.querySelector('#txtPuestoReal').value = infoAduana[13];


    /*lo de abajo ese push no va aqui solo es de referencia
    aEncAduanas.push(regiEncaAdunaID,sPrimernombre, sSegundonombre, sPrimerapellido, sSegundoapellido, sIdentificacion, sCorreo, sTelefono1, sTelefono2,sFechanacimiento, sGenero, sSucursal,sPuestoReal,tipoUsuario, activo);
    */
       
}


function obtenerEncAdua_Actualizar() 
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
        let sPrimernombre = inputNombre.value;

        let inputSegundoNombre = document.querySelector('#txtSegundonombre');
        let sSegundoNombre = inputSegundoNombre.value;

        let inputPrimerApellido = document.querySelector('#txtPrimerApellido');
        let sPrimerApellido = inputPrimerApellido.value;

        let inputSegundoApellido = document.querySelector('#txtSegundoapellido');
        let sSegundoApellido = inputSegundoApellido.value;

        let inputIdentificacion = document.querySelector('#txtIdentificacion');
        let sIdentificacion = inputIdentificacion.value;
        
        let inputCorreo = document.querySelector('#txtCorreo');//3
        let sCorreo = inputCorreo.value;

        let inputTelefono1 =document.querySelector('#txtTelefono1');//4
        let sTelefono1 = inputTelefono1.value;

        let inputTelefono2 = document.querySelector('#txtTelefono2');
        let sTelefono2 = inputTelefono2.value;       

        let inputFechaNacimiento = document.querySelector('#txtFechanacimiento');//5
        let sFechaNacimiento = inputFechaNacimiento.value;

        let inputGenero = document.querySelector('#sltGenero');
        let sGenero = inputGenero.value;

        let inputSucursal = document.querySelector('#sltSucursal');
        let sSucursal = inputSucursal.value;

        
        let tipoUsuario = '3';
        let activo = '1';


        let temp = getTempEncAdu();
        
      
        aAduana.push(temp,sPrimernombre, sSegundoNombre, sPrimerApellido, sSegundoApellido,sIdentificacion, sCorreo, sTelefono1, sTelefono2,sFechaNacimiento, sGenero, sSucursal, tipoUsuario, activo);

        //????????????????????????????????????????????????????? como meto tipoUsuario y activo???

       
        actualizarListaEncAduanas(aAduana);
        removeTemp();
        window.location.href = 'listarEncargadoAduana.html';
            
        
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

