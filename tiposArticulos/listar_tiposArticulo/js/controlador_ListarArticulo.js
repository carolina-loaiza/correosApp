////INTERFAZ LISTAR ARTICULOS

document.querySelector('#txtFiltro').addEventListener('keyup', mostrarListas );
mostrarListas();


function mostrarListas()
{
    let listarArticulos = getInfoContactos();
    let tbody = document.querySelector('#tblListaArticulo tbody');
    let sfiltro = document.querySelector('#txtFiltro').value;

    tbody.innerHTML = '';

    for (let i =0; i<listarArticulos.length;i++)
    {     
        if(listarArticulos[i][0].toLowerCase().includes(sfiltro))
        {
            let fila= tbody. insertRow();// CREA FILAS


            let sNombre = fila.insertCell(); // INSERTA EN LA FILA EN LA POS 0 
            let sPorcentage = fila.insertCell();
            let sModificar = fila.insertCell();
            let sDesactivar = fila.insertCell();
                   

            sNombre.appendChild(document.createTextNode(listarArticulos[i][0]));
            sPorcentage.appendChild(document.createTextNode(listarArticulos[i][1]));
            //sTelefono.appendChild(document.createTextNode(listarArticulos[i][2]));
            //sModificar.appendChild(document.createTextNode(listarArticulos[i][3]));
            //sDesactivar.appendChild(document.createTextNode(listarArticulos[i][4]));

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
            
            


            botonDesactivar.dataset.desactivar = listarArticulos[i][1];
           
            sDesactivar.classList.add("iconos");
            
           
        }
       
    }
}
