document.querySelector('#txtFiltro').addEventListener('keyup', mostrarConvenios);
mostrarConvenios();

function mostrarConvenios(){
    let sFiltro = document.querySelector('#txtFiltro').value;
    let listaConvenios = getNuevosConvenios();
    let cuerpoTabla = document.querySelector('#tblConvenios tbody');
    cuerpoTabla.innerHTML = '';


    for(let i = 0; i <listaConvenios.length; i++){

        if(listaConvenios[i][3]=="1"){

            if (listaConvenios[i][1].toLowerCase().includes(sFiltro.toLowerCase())){
                let fila = cuerpoTabla.insertRow();
                let cNombre = fila.insertCell();
                let cDescripcion = fila.insertCell();
                let cModificar = fila.insertCell();
                let cEliminar = fila.insertCell();

                cModificar.classList.add('acciones');
                cEliminar.classList.add('acciones');

                let sNombre = document.createTextNode(listaConvenios[i][1]);
                let sDescripcion = document.createTextNode(listaConvenios[i][2]);

                cNombre.appendChild(sNombre);
                cDescripcion.appendChild(sDescripcion);

                //Creación del botón de editar-------------
                let botonEditar = document.createElement('i');
                botonEditar.classList.add("far", "fa-edit", "ed-delink");
                let elementa = document.createElement('a');  
                elementa.setAttribute("href", "../ModificarConvenios/modificarConvenios.html"); 
                elementa.appendChild(botonEditar);
                elementa.addEventListener('click', redirect);
                elementa.dataset.nombre = listaConvenios[i][0]; 

                cModificar.appendChild(elementa);


                //Creación del botón de deshabilitar---------
                let botonDeshabilitar = document.createElement('i');
                botonDeshabilitar.classList.add("fas", "fa-times", "ed-delink", "disable");
                let elementb = document.createElement('a');
                elementb.appendChild(botonDeshabilitar);
                elementb.addEventListener('click', eliminar); 
                elementb.dataset.codigo = i;
                    
                cEliminar.appendChild(elementb);
            }
        }
    }
}
function eliminar(){

    let id = this.dataset.codigo;
    swal({
        title: '¿Está seguro que desea eliminar el convenio?',
        text: 'En caso de continuar desaparecerá de la lista de convenios',
        icon: 'warning',
        buttons:{
            catch:{
                text:'Eliminar',
                value:'Eliminar',
                className:'button',
            },
            cancel:'Cancelar'
        },
    })
    .then((botonUsuario) =>{
        if(botonUsuario === "Eliminar"){
            let listaConvenios = getNuevosConvenios();
            if(listaConvenios[id][3]=="1"){
                listaConvenios[id][3]="0"
            } else{listaConvenios[id][3]="1"}
        actualizarListaConvenios(listaConvenios[id]);
        mostrarConvenios();
        console.log(listaConvenios);
            }
        }
    )
}

function redirect(){
    let sNombre = this.dataset.nombre;
    setTemp(sNombre);
}

