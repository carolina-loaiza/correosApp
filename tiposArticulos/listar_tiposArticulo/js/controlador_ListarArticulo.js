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
                   

            sNombre.appendChild(document.createTextNode(listarArticulos[i][1]));
            sPorcentage.appendChild(document.createTextNode(listarArticulos[i][2]));
       
            //BOTONES MODIFICAR Y DESACTIVAR
            //Se definen las variables de los  botones modificar y eleminar----------------------------------------------
            let botonModificar = document.createElement('i');//crea la variable del modificar con un icono
            botonModificar.classList.add("far", "fa-edit");//inserta el elemento icono
            
            let botonDesactivar =document.createElement('i');//crea la variable del modificar con un icono
            botonDesactivar.classList.add("fas", "fa-times");//inserta el elemento icono
            //Se definen las variables de los  botones modificar y eleminar-----------------------------------------------
            
           // let elemento = document.createElement('i');

            
            let elementA = document.createElement('a');
            elementA.setAttribute("href", "../modificar_tiposArticulo/modificar_TiposArticulo.html");
            elementA.appendChild(botonModificar);
            elementA.addEventListener('click' ,redirect);
            elementA.dataset.nombre = listarArticulos[i][0];

            sModificar.appendChild(elementA);

            elementA.appendChild(botonModificar);
            sModificar.classList.add('acciones');

            sDesactivar.appendChild(botonDesactivar);
            sDesactivar.classList.add('acciones');


            botonDesactivar.dataset.nombre = listarArticulos[i][0];
           
            sDesactivar.classList.add("iconos");
            
           
        }
       
    }
}


function redirect()
{
    let sNombre = this.dataset.nombre;
    setTemp(sNombre);
}