//Obtiene datos

let botonGuardar = document.querySelector('#btnGuardar');
botonGuardar.addEventListener('click', obtenerDatos);
var imagePreview = document.querySelector('#previewFoto');
var urlFotoPerfil = false;

function initFotoPerfil() {
    $("input.cloudinary-fileupload[type=file]").unsigned_cloudinary_upload(unsignedUser, { cloud_name: imageCloudName, tags: 'browser_uploads' })
      .bind('cloudinarydone', function(e, data) {
        imagePreview.setAttribute("src", data.result.url);
        imagePreview.style.display = 'block';
        urlFotoPerfil = data.result.url;
        document.querySelector('#inputFotoPerfil').classList.remove('inputError');
      });
  };

  initFotoPerfil();

//Funcion de obtener datos.

function obtenerDatos() {
    let inputs = document.querySelectorAll('#registroEncAduanasForm input:required, #registroEncAduanasForm textarea:required, #registroEncAduanasForm select[name="genero"]');
    let error = validarInputsRequeridos(inputs);

    if(error == true ) {
      mostrarMensajeModal('error formulario');
    } else { 
        //primer nombre = 0
        //primer apellido = 2
        //telefono =  5
        let aEncAduanas = [];
        let regiEncaAdunaID = Math.random().toString(36).substring(8);

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
        let selectSucursal= document.querySelector('#sltSucursal');
        let sSucursal = selectSucursal.value;
        let inputPuestoReal = document.querySelector('#txtPuestoReal');
        let sPuestoReal = inputPuestoReal.value;
        //let sEdad = Calcularedad();

        let sEdad = Calcularedad();

        let tipoUsuario = '3';
        let activo = '1';
        var fotoPerfil = urlFotoPerfil;

        if (sEdad < 18) {
            mostrarMensajeModal('error edad');
            return false;
        }


        aEncAduanas.push(sPrimernombre, sSegundonombre, sPrimerapellido, sSegundoapellido, sIdentificacion, sCorreo, sTelefono1, sTelefono2,
             sFechanacimiento, sGenero, sSucursal, fotoPerfil, sPuestoReal, tipoUsuario, activo);
        
        setListaEncAduanas(aEncAduanas);
    
        swal({
            title: 'Datos Correctos',
            text: 'Continue',
            icon: 'success',
            button: "Ok",
        });

        limpiar();
    }
}



function Calcularedad() {
    let hoy = new Date();
    let fecha = document.querySelector('#txtFechanacimiento').value;
    let nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad;
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

