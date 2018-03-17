document.querySelector('#btnRegistrar').addEventListener('click', obtenerDatos);


function validar() {
    let inputs = document.querySelectorAll('input:required');
    let error = false;

    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value == '') {
            error = true;
            inputs[i].classList.add('error');
        }
        else {
            inputs[i].classList.remove('error');   
        
        
        }//else statement
    }//for loop
    return error;
}

function calcularEdad() {
    let hoy = new Date();
    let fecha = document.querySelector('#dtFecha').value;
    let nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad;
}


function obtenerDatos() {
    let error = validar();
    if(error == true) {
        swal({
            title: "Ocurrió un error",
            text: "Por favor verifique los campos resaltados",
            icon: "error",
            button: "OK",
          });
    }
    else {
        let infoEncargadoSucursal = [];

        let primerNombre = document.querySelector('#txtPrimerNombre').value;
        let segundoNombre = document.querySelector('#txtSegundoNombre').value;
        let primerApellido = document.querySelector('#txtPrimerApellido').value;
        let cedula = document.querySelector('#txtId').value;
        let correo = document.querySelector('#txtCorreo').value;
        let telefono_1 = document.querySelector('#txtTel1').value;
        let telefono_2 = document.querySelector('#txtTel2').value;
        let edad = calcularEdad();
        let genero = document.querySelector('#opGenero').value;
        let sucursal = document.querySelector('#opSucursal').value;

        //la foto no se guarda

        infoEncargadoSucursal.push(primerNombre, segundoNombre, primerApellido, cedula, correo, telefono_1, telefono_2
        , edad, genero, sucursal);
        setInfoEncargadosSucursal(infoEncargadoSucursal);

        swal({
            title: "Información registrada correctamente",
            text: "Puede proceder",
            icon: "success",
            button: "OK",
          });

    }//else
    
    
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