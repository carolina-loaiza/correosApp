////INTERFAZ LISTAR
document.querySelector('#txtFiltro').addEventListener('keyup', mostrarListas );
mostrarListas();


function mostrarListas()
{
    let listarSucursales = getInfoContactos();
    let tbody = document.querySelector('#tblListaSucursal tbody');
    let sfiltro = document.querySelector('#txtFiltro').value;

    tbody.innerHTML = '';

    for (let i =0; i<listarSucursales.length;i++)
    {     
        if(listarSucursales[i][0].toLowerCase().includes(sfiltro))
        {
            let fila= tbody. insertRow();// CREA FILAS


            let sSucursal = fila.insertCell(); // INSERTA EN LA FILA EN LA POS 0 EL NOMBRE
            let sDireccion = fila.insertCell();
            let sTelefono = fila.insertCell();
            let sModificar = fila.insertCell();
            let sDesactivar = fila.insertCell();           

            sSucursal.appendChild(document.createTextNode(listarSucursales[i][0]));
            sDireccion.appendChild(document.createTextNode(listarSucursales[i][1]));
            sTelefono.appendChild(document.createTextNode(listarSucursales[i][2]));
            //sModificar.appendChild(document.createTextNode(listarSucursales[i][3]));
            //sDesactivar.appendChild(document.createTextNode(listarSucursales[i][4]));

            //BOTONES MODIFICAR Y DESACTIVAR
            //Se definen las variables de los  botones modificar y eleminar----------------------------------------------
            let botonModificar = document.createElement('i');//crea la variable del modificar con un icono
            botonModificar.classList.add("far", "fa-edit");//inserta el elemento icono
            

            let botonDesactivar =document.createElement('i');//crea la variable del modificar con un icono
            botonDesactivar.classList.add("fas", "fa-times");//inserta el elemento icono
            //Se definen las variables de los  botones modificar y eleminar-----------------------------------------------
            
           // let elemento = document.createElement('i');

            //elemento.setAttribute("href", "../modificar/modificar.html");
            sModificar.appendChild(botonModificar);
            sModificar.classList.add('acciones');

            sDesactivar.appendChild(botonDesactivar);
            sDesactivar.classList.add('acciones');
            
            


            botonDesactivar.dataset.desactivar = listarSucursales[i][1];
           
            sDesactivar.classList.add("iconos");
            
           
        }
       
    }
}
