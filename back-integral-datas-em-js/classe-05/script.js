function updateService(year, month, dayWeek, hour) {
  const openSTore = 8;
  const closeStore = 18;
  const weekend = 12;
  const day = new Date(year,month,dayWeek).getDay()

  
  if(hour >= openSTore  && hour <= closeStore && day > 0 && day < 7){
    console.log(true); 
  } else if(hour >= openSTore  && hour <= weekend && day > 0 && day < 7){
    console.log(true);
  }else{
    console.log(false); 
  }
}
updateService(2021,3,24,9,30);