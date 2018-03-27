//Obtiene datos

let botonGuardar = document.querySelector('#btnGuardar');
botonGuardar.addEventListener('click', obtenerDatos);

//Funcion de obtener datos.

function obtenerDatos()
{
    let berror = validar();

    if (berror == true)
    {
        swal({
            title: "Ocurrió un error",
            text: "Faltan los datos de los campos resaltados",
            icon: "error",
            button: "Ok",
            //Mensaje de error
        });
    }
    else
    {
        //primer nombre = 0
        //primer apellido = 2
        //telefono =  5
        let aEncAduanas = [];
        let valido = true;

        let inputPrimernombre = document.querySelector('#txtPrimernombre');//0
        let sPrimernombre = inputPrimernombre.value;

        let inputSegundonombre = document.querySelector('#txtSegundonombre');//1
        let sSegundonombre = inputSegundonombre.value;

        let inputPrimerapellido = document.querySelector('#txtPrimerapellido');//2
        let sPrimerapellido = inputPrimerapellido.value;

        let inputSegundoapellido = document.querySelector('#txtSegundoapellido');//3
        let sSegundoapellido = inputSegundoapellido.value;

        let inputIdentificacion = document.querySelector('#txtIdentificacion');//4
        let sIdentificacion = inputIdentificacion.value;

        let inputTelefono1 = document.querySelector('#txtTelefono1');//5
        let sTelefono1 = inputTelefono1.value;

        let inputTelefono2 = document.querySelector('#txtTelefono2');
        let sTelefono2 = inputTelefono2.value;

        let inputCorreo = document.querySelector('#txtCorreo');
        let sCorreo = inputCorreo.value;

        let inputFechanacimiento = document.querySelector('#txtFechanacimiento');
        let sFechanacimiento = inputFechanacimiento.value;

        let selectGenero = document.querySelector('#sltGenero');
        let sGenero = selectGenero.value;

        let selectSucursal= document.querySelector('#sltSucursal');
        let sSucursal = selectSucursal.value;

        let inputPuestoReal = document.querySelector('#txtPuestoReal');
        let sPuestoReal = inputPuestoReal.value;

        let sEdad = Calcularedad();

        aEncAduanas.push(sPrimernombre, sSegundonombre, sPrimerapellido, sSegundoapellido, sIdentificacion, sTelefono1, sTelefono2, sCorreo, sFechanacimiento, sGenero, sSucursal,sEdad, sPuestoReal, '1');
        console.log(aEncAduanas);
        setListaEncAduanas(aEncAduanas);
    
        swal({
            title: 'Datos Correctos',
            text: 'Continue',
            icon: 'success',
            button: "Ok",
        })
        limpiar();
    }
}

//Validacion

function validar() {
    let aEncAduanas = document.querySelectorAll('input:required,select:required');
    let berror = false;

    for (let i = 0; i < aEncAduanas.length; i++) {
        if (aEncAduanas[i].value === '') {
            berror = true;
            aEncAduanas[i].classList.add('input_error');
        }
        else { aEncAduanas[i].classList.remove('input_error'); }

    } return berror;
}

function Calcularedad() {
    let hoy = new Date();
    let fecha = document.querySelector('#txtFechanacimiento').value;
    let nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad;
}

let imagenUrl = '';
$(function() {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'pabskun', api_key: '896788142178273'});

    // Upload button
    let uploadButton = $('#btnSeleccionarImagen');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'pabskun', upload_preset: 'proyecto', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = 'https://res.cloudinary.com/x-treem/image/upload/' + id;
          console.log(imagenUrl);
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}

function limpiar() {
    document.querySelector('#txtPrimernombre').value = "";
    document.querySelector('#txtSegundonombre').value = "";
    document.querySelector('#txtPrimerapellido').value = "";
    document.querySelector('#txtSegundoapellido').value = "";
    document.querySelector('#txtIdentificacion').value = "";
    document.querySelector('#txtCorreo').value = "";
    document.querySelector('#txtTelefono1').value = "";
    document.querySelector('#txtTelefono2').value = "";
    document.querySelector('#txtFechanacimiento').value = "";
    document.querySelector('#sltGenero').value = "";
    document.querySelector('#sltSucursal').value = "";
}

