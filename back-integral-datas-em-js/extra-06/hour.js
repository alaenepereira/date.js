
const promotion = (startOfPromotion, customerRequest) =>{

  return + customerRequest <+ (startOfPromotion).setHours(startOfPromotion.getHours() + 24)

}

let startOfPromotion =  new Date(2023,7,13,10,30)

let customerRequest = new Date(2023,7,14,10,40)
console.log(promotion(startOfPromotion,customerRequest));