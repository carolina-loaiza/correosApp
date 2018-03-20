function buscarRuta(pNombre){
  let listaRutas=obtenerDatoLocal('listaRutasLS');
  let rutaEncontrada=[];
  for(let i=0;i<listaRutas.length;i++){
  if(pNombre == listaRutas[i][1]){
      rutaEncontrada=listaRutas[i];
  }}
  return rutaEncontrada;
}

function setTemp(data){
  localStorage.setItem('tempLs', JSON.stringify(data));

}

function getTemp(){
   return JSON.parse(localStorage.getItem('tempLs'));
}

function removeTemp(){
  localStorage.removeItem('tempLs');
}

function actualizarListaRutas(pinfoRutas){
  let listaRutas=obtenerDatoLocal('listaRutasLS');
  for(let i=0;i<listaRutas.length;i++){
      if(listaRutas[i][0]==pinfoRutas[0]){
          listaRutas[i]=pinfoRutas;
          localStorage.setItem('listaRutasLS',JSON.stringify(listaRutas));
      }
  }
}