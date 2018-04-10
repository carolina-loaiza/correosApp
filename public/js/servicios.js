const imageCloudName = 'app-correos-costarica';
const unsignedUser = 'pgl2jn3n';

if (typeof($) !== 'undefined' && $.cloudinary && $.cloudinary.unsigned_upload_tag) {
  $.cloudinary.unsigned_upload_tag(unsignedUser, { cloud_name: imageCloudName });
}

function calcularEdad(fecha) {
  let hoy = new Date();
  let nacimiento = new Date(fecha);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  return edad;
}

function generarDato(numero, contraseña) {
  if (contraseña) {
    return Math.random().toString(36).substring(4);
  }
  return Math.floor(Math.random() * Math.floor(999));
}

function validarInputsRequeridos(inputs) {
  let error = false;
  
  for(let i = 0; i < inputs.length; i++) {
    if((inputs[i].value == '' && inputs[i].type != 'file') || esInvalidoInput(inputs[i])) {
      error = true;
      inputs[i].classList.add('inputError');
    }
    else {
      inputs[i].classList.remove('inputError');
    }
  }

  return error;
}

function validarRegistroDoble(correo) {  
  let lista = obtenerDatoLocal('loginUsuarios');  
    for(let i = 0; i < lista.length; i++) {  
      if(correo == lista[i][0]) {   
        swal({  
          title: "Usuario ya registrado",  
          text: "Esta dirección de correo ya ha sido utilizada",  
          icon: "error",  
          button: {  
            text: "OK",  
            className: "button",  
          }})  
          return false;   
      }  
    }  
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
          className: "button",
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
          className: "button",
        },
        });
      break;
    case 'error edad':
      swal({
        title: "Necesita ser mayor de edad para ingresar",
        text: "Verifique la fecha de nacimiento",
        icon: "error",
        button: {
          text: "OK",
          className: "button",
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
          className: "button",
        },
      }).then(() => {
        window.location.href = '../iniciarSesion/index.html';
      });
      break;
  }
}


function esInvalidoInput (input) {
  var tipoInput = input.dataset.tipoInput;
  var valorInput = input.value;

  if (!tipoInput) {
    return false;
  }

  var esInvalido = false;
  var match = null;
  var maxlength = 1;
  var matchAlpha = /^[A-z]+$/gi;
  var matchNumber = /^\d+$/;
  var matchPhone = /^[0-9]{4}[-\s][0-9]{4}$/;
  var matchEmail = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/;
  var matchComment = /^[a-zA-Z0-9!?@#$%\^&*\s)(+=._-]*$/gi;

  if (tipoInput === 'email') {
    var tipoEmail = input.dataset.tipoEmail;
    console.log(tipoEmail);
    if (tipoEmail && !valorInput.includes(tipoEmail)) {
      return true;
    };
    
    match = matchEmail;
    maxlength = 40;
  }

  if (tipoInput === 'tel') {
    match = matchPhone;
    maxlength = 14;
  }

  if (tipoInput === 'numero') {
    maxlength = input.dataset.cantidad;

    if ((valorInput.length + '') != maxlength) {
      return true;
    };

    match = matchNumber;
  }

  if (tipoInput === 'texto') {
    match = matchAlpha;
    maxlength = 20;
  }

  if (tipoInput === 'textoNum') {
    match = matchComment;
    maxlength = 40;
  }

  var matches = valorInput.match(match);

  if (matches == null) {
    esInvalido = true;
  }

  return esInvalido;
}


function guardarDatos(datos, ruta){
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/'+ruta,
    type: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType : 'json',
    async: false,
    data: datos
  });
 
  peticion.done(function(response){
    console.log('El usuario se registró con éxito');
  });
 
  peticion.fail(function(){
    console.log('El usuario no se pudo registrar');
  });
}
 
function obtenerLista(ruta){
  let lista = [];
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/'+ ruta,
    type: 'get',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType : 'json',
    async:false,
    data:{}
  });

  peticion.done(function(usuarios){
    for(let i = 0; i < usuarios.length; i++){
      var dato = [];
      for (var key in usuarios[i]) {
        if (key != '__v') {
          dato.push(usuarios[i][key]);
        };
      }
      lista.push(dato);
    }
    console.log('Petición realizada con éxito');
  });

  peticion.fail(function(){
    lista = [];
    console.log('Ocurrió un error');
  });

  return lista;
}

console.log(obtenerLista('get_all_users'));