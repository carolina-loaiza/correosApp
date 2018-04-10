
guardarDatoLocal('listaRepartidoresLS', ["Marta","","Castro","","213123123","marta@correos.cr","123123123","",26,"masculino","Sucursal #2",false,"5","1"]);
    document.querySelector('#btnGuardar').addEventListener('click', asignarDatos);
    if (document.querySelector('.headerSesion button')) {
        document.querySelector('.headerSesion button').addEventListener('click', cerrarSesion);
    
    
        function cerrarSesion() {
            swal({
              title: "¿Está seguro de que desea cerrar sesión?",
              icon: "warning",
              buttons: {
                catch: {
                  text: "Cerrar sesión",
                  value: "Cerrar sesión",
                  className: "button"
                },
                cancel: "Cancelar",
              },
            }).then((botonUsuario) => {
              if (botonUsuario === 'Cerrar sesión') {
                localStorage.removeItem('usuario');
                window.location.href = '../iniciarSesion/index.html';
              }
            });
          }}

    //asignarDatos();
    function asignarDatos(){
        let berror=validar();
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

        let listaRepartidores= obtenerDatoLocal('listaRepartidoresLS')
        let listaPaquetes= obtenerDatoLocal('listaPaquetes');
        let infoPaquetes=[];
        let paquete = document.querySelector('#sltPaquete').value;
        let repartidor = document.querySelector('#sltRepartidor').value;

        for(i=0;i<listaPaquetes.length;i++){
            if (listaPaquetes[i][0] === paquete) {
                listaPaquetes[i].push(repartidor);
                listaPaquetes[i][9] = 'Tránsito a destino';
            }
        }

        localStorage.setItem('listaPaquetes', JSON.stringify(listaPaquetes));
    }}



        function agregarPaquetes(){
            let listaPaquetes= obtenerDatoLocal('listaPaquetes');
            for(let i=0;i<listaPaquetes.length;i++){
                let opcion=document.createElement('option');
                opcion.value=listaPaquetes[i][0]; //revisar la posicion en la fila
                opcion.innerText= listaPaquetes[i][0];
                document.getElementById('sltPaquete').appendChild(opcion);
            }
        }
        function agregarRepartidores(){
            let listaRepartidores=obtenerDatoLocal('listaRepartidoresLS')
            console.log(listaRepartidores);
            for(let i=0;i<listaRepartidores.length;i++){
                let opcion=document.createElement('option');
                opcion.value=listaRepartidores[i][5]; //revisar la posicion en la fila
                opcion.innerText=listaRepartidores[i][5];
                document.getElementById('sltRepartidor').appendChild(opcion);
            }
        }

agregarPaquetes();
agregarRepartidores();

function validar() {
    let aInputs = document.querySelectorAll(':required');
    let berror = false;

    for (let i = 0; i < aInputs.length; i++) {
        if (aInputs[i].value === '') {
            berror = true;
            aInputs[i].classList.add('input_error');
        }
        else { aInputs[i].classList.remove('input_error'); }


    } return berror;
}
