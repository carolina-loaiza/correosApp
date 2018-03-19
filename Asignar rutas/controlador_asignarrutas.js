//let botonSeleccionar=document.querySelector('#btnGuardar');


//seleccionarSucursal();


function mostrarRepartidores(){
    let listaRepatidores =getlistaRepartidores();
    let cuerpoTabla=document.querySelector("#tblbase tbody");
    let indice= document.querySelector('#sltSucursal');
    cuerpoTabla.innerHTML='';

    for(let i=0;i<listaRepartidores.lenght;i++){
        if(listaRepartidores[i][10].tolowerCase().includes(indice(tolowerCase))){
            let fila=cuerpoTabla.insertRow();
            let cNombre=fila.insertCell();
            let cApellido=fila.insertCell();

            cNombre.appendChild(document.createTextNode(listaRepatidores[i][0]));
            cApellido.appendChild(document.createTextNode(listaRepatidores[i])[2]);
        }
    }

}
function mostrarRutas(){
    let listaRutas =getlistaRep();
    let cuerpoTabla=document.querySelector("#tblbase tbody");
    let indice= document.querySelector('#sltSucursal');
    cuerpoTabla.innerHTML='';

    for(let i=0;i<listaRepartidores.lenght;i++){
        if(listaRepartidores[i][10].tolowerCase().includes(indice(tolowerCase))){
            let fila=cuerpoTabla.insertRow();
            let cNombre=fila.insertCell();
            let cApellido=fila.insertCell();

            cNombre.appendChild(document.createTextNode(listaRepatidores[i][0]));
            cApellido.appendChild(document.createTextNode(listaRepatidores[i])[2]);
        }
    }

}