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

        let selectGenero = document.querySelector('#stlGenero');
        let sGenero = selectGenero.value;

        let sEdad = Calcularedad();

        aRepartidores.push(sPrimernombre, sSegundonombre, sPrimerapellido, sSegundoapellido, sIdentificacion, sTelefono1, sTelefono2, sCorreo, sFechanacimiento, sGenero, sEdad);
        console.log(aRepartidores);
        aInputs.push(inputPrimernombre, inputSegundonombre, inputPrimerapellido, inputSegundoapellido, inputIdentificacion, inputTelefono1, inputTelefono2, inputCorreo, inputFechanacimiento, selectGenero);
        setListaRepartidores(aRepartidores);

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

function mostrar() {
    let listaRepartidores = getListaRepartidores();

    let cuerpoTabla = document.querySelector('#tblRepartidores tbody');
    let sFiltro = document.querySelector('#txtFiltro').value.toLowerCase();

    cuerpoTabla.innerHTML = '';

    for (let i = 0; i < listaRepartidores.length; i++) {
        if (listaRepartidores[i][1].toLowerCase().includes(sFiltro) || listaRepartidores[i][2].toLowerCase.includes(sFiltro)) {
            let fila = cuerpoTabla.insertRow();

            let cPrimernombre = fila.insertCell();
            // let cSegundonombre = fila.insertCell();
            let cPrimerapellido = fila.insertCell();
            //let cSegundoApellido = fila.insertCell();
            // let cIdentificacion = fila.insertCell();
            let cTelefono1 = fila.insertCell();
            // let cTelefono2 = fila.insertCell();
            let cCorreo = fila.insertCell();
            //let cFechanacimiento = fila.insertCell();
            //let cGenero = fila.insertCell();
            //let cEdad = fila.insertCell();
            let cModificar = fila.insertCell();
            let cEliminar = fila.inserCell();

            cPrimernombre.appendChild(document.createTextNode(listaRepartidores[i][0]));
            // cSegundonombre.appendChild(document.createTextNode(listaRepartidores[i][1]));
            cPrimerapellido.appendChild(document.createTextNode(listaRepartidores[i][2]));
            // cSegundoapellido.appendChild(document.createTextNode(listaRepartidores[i][3]));
            //cIdentificacion.appendChild(document.createTextNode(listaRepartidores[i][4]));
            cTelefono1.appendChild(document.createTextNode(listaRepartidores[i][5]));
            //cTelefono2.appendChild(document.createTextNode(listaRepartidores[i][6]));
            cCorreo.appendChild(document.createTextNode(listaRepartidores[i][7]));
            //cFechanacimiento.appendChild(document.createTextNode(listaRepartidores[i][8]));
            //cGenero.appendChild(document.createTextNode(listaRepartidores[i][9]));
            //cEdad.appendChild(document.createTextNode(listaRepartidores[i][10]));

        }
    }
}

/*let botonEditar =documet.createElment('button');
botonEditar.innerText='Modificar';
botonEditar.dataset.indicar=listaRepartidores[i][0];
cConfiguracion.appendChild(botonEditar);


let botonEliminar=document.createElement('button');
botonEliminar.innerText='Desacticar';
botonEliminar.dataset.indicar=listaRepartidores[i][1];
cConfiguracion.appendChild(botonEliminar);*/

let imagenUrl = "";
$(function () {
    $.cloudinary.config({ cloud_name: 'pabskun', api_key: '896788142178273' });

    let uploadButton = $('#btnSeleccionarImagen');

    uploadButton.on('click', function (e) {
        cloudinary.openUploadWidget({ cloud_name: 'pabskun', upload_preset: 'proyecto', tags: ['cgal'] },
            function (error, result) {
                if (error) console.log(error);
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
    document.querySelector('txtPrimernombre').value = "";
    document.querySelector('txtSegundonombre').value = "";
    document.querySelector('txtPrimerapellido').value = "";
    document.querySelector('txtSegundoapellido').value = "";
    document.querySelector('txtIdentificacion').value = "";
    document.querySelector('txtCorreo').value = "";
    document.querySelector('txtTelefono 1').value = "";
    document.querySelector('txtTelefono 2').value = "";
    document.querySelector('txtFechanacimiento').value = "";
    document.querySelector('stlGenero').value = "";
}

