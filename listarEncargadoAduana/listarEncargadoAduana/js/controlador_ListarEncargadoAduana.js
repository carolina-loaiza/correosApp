////INTERFAZ LISTAR
document.querySelector('#txtFiltro').addEventListener('keyup', mostrarListas );
mostrarListas();


function mostrarListas()
{
    let listarEncargadoAduana = getListaEncAduanas();
    let tbody = document.querySelector('#tblListaEncargadoAduana tbody');
    let sfiltro = document.querySelector('#txtFiltro').value;

    tbody.innerHTML = '';

    for (let i =0; i<listarEncargadoAduana.length;i++)
    {     
        if(listarEncargadoAduana[i][0].toLowerCase().includes(sfiltro)||listarEncargadoAduana[i][1].toLowerCase().includes(sfiltro)
    ||listarEncargadoAduana[i][2].toLowerCase().includes(sfiltro)||listarEncargadoAduana[i][3].toLowerCase().includes(sfiltro)||
listarEncargadoAduana[i][4].toLowerCase().includes(sfiltro))
///PREGINTAR SI FILTRAR EL NUMERO ES DIFERENTE
        {
            let fila= tbody. insertRow();// CREA FILAS


            let sPrimerNombre = fila.insertCell(); // INSERTA EN LA FILA EN LA POS 0 EL NOMBRE
            let sPrimerApellido = fila.insertCell();
            let sCorreo = fila.insertCell();
            let sTelefono = fila.insertCell();
            let sCedula = fila.insertCell();
            // let sTelefono = fila.insertCell();
            // let sModificar = fila.insertCell();
            // let sDesactivar = fila.insertCell();           

            sPrimerNombre.appendChild(document.createTextNode(listarEncargadoAduana[i][0]));
            sPrimerApellido.appendChild(document.createTextNode(listarEncargadoAduana[i][1]));
            sCorreo.appendChild(document.createTextNode(listarEncargadoAduana[i][2]));
            sTelefono.appendChild(document.createTextNode(listarEncargadoAduana[i][3]));
            sCedula.appendChild(document.createTextNode(listarEncargadoAduana[i][4]));

            // sTelefono.appendChild(document.createTextNode(listarEncargadoAduana[i][2]));
            //sModificar.appendChild(document.createTextNode(listarEncargadoAduana[i][3]));
            //sDesactivar.appendChild(document.createTextNode(listarEncargadoAduana[i][4]));

            //BOTONES MODIFICAR Y DESACTIVAR
            //Se definen las variables de los  botones modificar y eleminar----------------------------------------------
        //     let botonModificar = document.createElement('i');//crea la variable del modificar con un icono
        //     botonModificar.classList.add("far", "fa-edit");//inserta el elemento icono
            

        //     let botonDesactivar =document.createElement('i');//crea la variable del modificar con un icono
        //     botonDesactivar.classList.add("fas", "fa-times");//inserta el elemento icono
        //     //Se definen las variables de los  botones modificar y eleminar-----------------------------------------------
            
        //    // let elemento = document.createElement('i');

        //     //elemento.setAttribute("href", "../modificar/modificar.html");
        //     sModificar.appendChild(botonModificar);
        //     sModificar.classList.add('acciones');

        //     sDesactivar.appendChild(botonDesactivar);
        //     sDesactivar.classList.add('acciones');
            
            


        //     botonDesactivar.dataset.desactivar = listarEncargadoAduana[i][1];
           
        //     sDesactivar.classList.add("iconos");
            
           
        }
       
    }
}
