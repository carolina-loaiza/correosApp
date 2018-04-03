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
    ||listarEncargadoAduana[i][2].toLowerCase().includes(sfiltro)||listarEncargadoAduana[i][3].includes(sfiltro)||
listarEncargadoAduana[i][4].includes(sfiltro))
///PREGINTAR SI FILTRAR EL NUMERO ES DIFERENTE
        {
            let fila= tbody. insertRow();// CREA FILAS


            let sPrimerNombre = fila.insertCell(); //INSERT EN LA FIL EN LA POS 0 EL NOMBRE
            let sPrimerApellido = fila.insertCell();
            let sCorreo = fila.insertCell();
            let sTelefono = fila.insertCell();
            let sCedula = fila.insertCell();
            let sModificar = fila.insertCell();
            let sDesactivar = fila.insertCell();                      


            sPrimerNombre.appendChild(document.createTextNode(listarEncargadoAduana[i][0]));
            sPrimerApellido.appendChild(document.createTextNode(listarEncargadoAduana[i][2]));
            sTelefono.appendChild(document.createTextNode(listarEncargadoAduana[i][5]));
            sCorreo.appendChild(document.createTextNode(listarEncargadoAduana[i][7]));
            sCedula.appendChild(document.createTextNode(listarEncargadoAduana[i][4]));

            let botonModificar =document.createElement('i');
            botonModificar.classList.add("far" , "fa-edit");

             
            let botonDesactivar =document.createElement('i');
            botonDesactivar.classList.add("fas", "fa-times");

    

            let elementA = document.createElement('a');
            elementA.setAttribute("href" , "modificarEncargadoAduana.html")
            elementA.appendChild(botonModificar);

            elementA.addEventListener('click' , redirect);
            elementA.dataset.codigo = listarEncargadoAduana[i][0];

            sModificar.appendChild(elementA);

            elementA.appendChild(botonModificar);
            sModificar.classList.add('acciones');

            sDesactivar.appendChild(botonDesactivar);
            sDesactivar.classList.add('acciones');


            botonDesactivar.dataset.codigo = listarEncargadoAduana[i][0];

            sDesactivar.classList.add('iconos');
            
           
           
        }
       
    }
}



function redirect()
{
    let sNombre = this.dataset.codigo;
    setTemp(sNombre);
}