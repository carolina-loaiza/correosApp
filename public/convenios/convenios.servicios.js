// import { listarConv } from "../../api/components/convenios/convenios.api";


function setTemp(data){
    localStorage.setItem('tempLs', JSON.stringify(data));
}
function getTemp(){
    return JSON.parse(localStorage.getItem('tempLs'));
}

function removeTemp(){
   localStorage.removeItem('tempLs');
}

function buscarConvenio(pId){
    let listaConvenios=obtenerDatoLocal('listaConveniosLS');
    let convenioEncontrado=[];
    for(let i=0;i<listaConvenios.length;i++){
    if(pId == listaConvenios[i][0]){
        convenioEncontrado=listaConvenios[i];
        break;
    }
}
    return convenioEncontrado;
}

function actualizarListaConvenios(pinfoConvenios){
    let listaConvenios=obtenerDatoLocal('listaConveniosLS');
    
    for(let i=0;i<listaConvenios.length;i++){
        if(pinfoConvenios[0] == listaConvenios[i][0]){
            listaConvenios[i]=pinfoConvenios;
        }//if
    }//for
    localStorage.setItem('listaConveniosLS',JSON.stringify(listaConvenios));
}



function guardarConvenio(pDatosConvenio){

    let peticion = $.ajax({
        url: 'http://localhost:4000/api/save_convenio',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async:false,
        data:{
            'nombre' : pDatosConvenio[0],
            'descripcion' : pDatosConvenio[1],
            'activo' : pDatosConvenio[2]
        }
    });

    peticion.done(function(response){
        console.log('El convenio se registró con éxito');
    });
    
    peticion.fail(function(){
        console.log('El convenio no se pudo registrar');
    })
}

function obtenerConveniosbd(){
    let listaConvenios = [];

    let peticion = $.ajax({
      url: 'http://localhost:4000/api/listar_conv',
      type: 'get',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType : 'json',
      async:false,
      data:{}
    });
  
    peticion.done(function(convenios){
  
      for(let i = 0; i < convenios.length; i++){
        listaConvenios.push(convenios[i]);
      }
  
      console.log('Petición realizada con éxito');
    });
  
    peticion.fail(function(){
        listaConvenios = [];
      console.log('Ocurrió un error');
    });
  
    console.log(listaConvenios);
    
    return listaConvenios;
}
