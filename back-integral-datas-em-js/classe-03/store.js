function updateService(_year, _month, _day, hour) {
  const openSTore = 8;
  const closeStore = 18;
  
  if(hour >= openSTore  && hour <= closeStore ){
    return true
  }else{
    return false
  }
}
console.log(updateService(2015,1,1,12));