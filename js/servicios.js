const imageCloudName = 'app-correos-costarica';
const unsignedUser = 'pgl2jn3n';

$.cloudinary.unsigned_upload_tag(unsignedUser, { cloud_name: imageCloudName });

function calcularEdad(fecha) {
  let hoy = new Date();
  let nacimiento = new Date(fecha);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  return edad;
}

function validarInputsRequeridos(inputs) {
  let error = false;
  
  for(let i = 0; i < inputs.length; i++) {
    if(inputs[i].value == '' && inputs[i].type != 'file') {
      error = true;
      inputs[i].classList.add('inputError');
    }
    else {
      inputs[i].classList.remove('inputError');
    }
  }

  return error;
}

function mostrarMensajeModal(tipoMensaje, contraseñaTemporal) {
  switch (tipoMensaje) {
    case 'error formulario':
      swal({
        title: "Ocurrió un error",
        text: "Por favor verifique los campos resaltados",
        icon: "error",
        button: {
          text: "OK",
          className: "modalButton",
        },
      });
      break;
    case 'registro exitoso':
      swal({
        title: "Información registrada correctamente",
        text: "Puede proceder",
        icon: "success",
        button: {
          text: "OK",
          className: "modalButton",
        },
        });
      break;
    case 'registro exitoso de usuario':
      swal({
        title: "Información registrada correctamente",
        text: "Se ha enviado una contraseña temporal al correo electrónico registrado. Contraseña temporal: "+contraseñaTemporal,
        icon: "success",
        button: {
          text: "OK",
          className: "modalButton",
        },
      }).then(() => {
        console.log(window.location);
      });
      break;
  }
}