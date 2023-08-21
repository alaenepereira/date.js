const promotion = (startOfPromotion, customerRequest) =>{

  return customerRequest < (startOfPromotion).setDate(startOfPromotion.getDate() + 30)

}

let startOfPromotion =  new Date(2023,7,13,10,30)

let customerRequest = new Date(2023,9,13,10,30)
console.log(promotion(startOfPromotion,customerRequest));