function setDataStorage(key, data){
  let setData = getDataStorage(key);
  setData.push(data);
  
  localStorage.setItem(key, JSON.stringify(setData));
}

function getDataStorage(key){
  let getData = JSON.parse(localStorage.getItem(key));

  if(getData == null){
    getData = [];
  }

  return getData;
}