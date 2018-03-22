// let botonActualizar = document.querySelector('#btnGuardar');
// botonActualizar.addEventListener('click', registrarDatosActualizados);

// obtenerTipoArticulo();

// function obtenerTipoArticulo() {
//     let sNombre = getTemp();
//     let infoTipo = buscarSucursal(sNombre);

//     document.querySelector('#txtCategoria').value = infoTipo[0];
//     document.querySelector('#txtImpuestos').value = infoTipo[1];



// }

// function modificarDatosActualizados()
// {
//     let infoTipoArticulo = [];

//     let 
// }


obtenerSucursal();

function obtenerSucursal()
{
    let sNombre=getTemp();
    let infoRepartidor=buscarSucursal(sNombre);

    console.log(infoRepartidor);
    
    document.querySelector('#txtCategoria').value=infoRepartidor[1];
    document.querySelector('#txtImpuestos').value=infoRepartidor[2];
    
  
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

        let aArticulos = [];
        let aInputs = [];
        let valido = true;

        let inputCategoria = document.querySelector('#txtCategoria');
        let sCategoria = inputCategoria.value;

        let inputImpuestos = document.querySelector('#txtImpuestos');
        let sImpuestos = inputImpuestos.value;
        let temp = getTemp();
        

        aArticulos.push(temp,sCategoria, sImpuestos);
        console.log(aArticulos);

        aInputs.push(inputCategoria, inputImpuestos);
        actualizarListaArticulos(aArticulos);
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