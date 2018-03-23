//Obtiene datos

let botonGuardar = document.querySelector('#btnGuardar');
botonGuardar.addEventListener('click', obtenerDatos);

//Funcion de obtener datos.

function obtenerDatos() {
    let berror = validar();

    if (berror == true) {
        swal({
            title: "Ocurrió un error",
            text: "Faltan los datos de los campos resaltados",
            icon: "error",
            button: "Ok",
            //Mensaje de error
        });
    }
    else {

        let aRepartidores = [];
        let aInputs = [];
        let valido = true;

        let inputPrimernombre = document.querySelector('#txtPrimernombre');
        let sPrimernombre = inputPrimernombre.value;

        let inputSegundonombre = document.querySelector('#txtSegundonombre');
        let sSegundonombre = inputSegundonombre.value;

        let inputPrimerapellido = document.querySelector('#txtPrimerapellido');
        let sPrimerapellido = inputPrimerapellido.value;

        let inputSegundoapellido = document.querySelector('#txtSegundoapellido');
        let sSegundoapellido = inputSegundoapellido.value;

        let inputIdentificacion = document.querySelector('#txtIdentificacion');
        let sIdentificacion = inputIdentificacion.value;

        let inputTelefono1 = document.querySelector('#txtTelefono1');
        let sTelefono1 = inputTelefono1.value;

        let inputTelefono2 = document.querySelector('#txtTelefono2');
        let sTelefono2 = inputTelefono2.value;

        let inputCorreo = document.querySelector('#txtCorreo');
        let sCorreo = inputCorreo.value;

        let inputFechanacimiento = document.querySelector('#txtFechanacimiento');
        let sFechanacimiento = inputFechanacimiento.value;

        let selectGenero = document.querySelector('#sltGenero');
        let sGenero = selectGenero.value;

        let selectSucursal = document.querySelector('#sltSucursal');
        let sSucursal = selectSucursal.value;

        let sTipoUsuario = 5;

        let sActivo = 1;

        let eerror = validarEdad();

        if (eerror == true) {
            swal({
                title: "Necesita ser mayor de edad para ingresar",
                text: "Verifique la fecha de nacimiento",
                icon: "error",
                button: {
                    text: "OK", className: "button",
                },
            });
        }

        else {
            let sEdad = Calcularedad();

            aRepartidores.push(sPrimernombre, sSegundonombre, sPrimerapellido, sSegundoapellido, sIdentificacion, sTelefono1, sTelefono2, sCorreo, sFechanacimiento, sGenero, sSucursal, sEdad, sTipoUsuario, sActivo);
            console.log(aRepartidores);
            aInputs.push(inputPrimernombre, inputSegundonombre, inputPrimerapellido, inputSegundoapellido, inputIdentificacion, inputTelefono1, inputTelefono2, inputCorreo, inputFechanacimiento, selectGenero, selectSucursal);
            setListaRepartidores(aRepartidores);

            swal({
                title: 'Información registrada correctamente',
                text: 'Puede continuar',
                icon: 'success',
                button: { text: "Ok" , className: "button",}


            })


            limpiar();


        }


    }
}

//Validacion

function validar() {
    let aInputs = document.querySelectorAll('input:required,select:required');
    let berror = false;

    for (let i = 0; i < aInputs.length; i++) {
        if (aInputs[i].value === '') {
            berror = true;
            aInputs[i].classList.add('input_error');
        }
        else { aInputs[i].classList.remove('input_error'); }


    } return berror;
}


function Calcularedad() {
    let hoy = new Date();
    let fecha = document.querySelector('#txtFechanacimiento').value;
    let nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad;
}


function validarEdad(pedad) {
    let eerror = false;
    let dato=document.querySelector('#txtFechanacimiento').value;
    pedad = Calcularedad(dato);
    if (pedad < 18) {
        eerror = true;
    }
return eerror;
}





let imagenUrl = '';
$(function () {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'pabskun', api_key: '896788142178273' });

    // Upload button
    let uploadButton = $('#btnSeleccionarImagen');

    // Upload button event
    uploadButton.on('click', function (e) {
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'pabskun', upload_preset: 'proyecto', tags: ['cgal'] },
            function (error, result) {
                if (error) console.log(error);
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
    return $.cloudinary.url(id, options);
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
