import iyzipay from "../connection/iyzipay";

//ilk adım- işlemi başlatan kısım kullanıcıya sms dogrulamasına yönlendirilmesi
export const initializePayment=(data)=>{
    return new Promise((resolve,reject)=>{
        iyzipay.threedsInitialize.create(data,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}

export const completePayment=(data)=>{
    return new Promise((resolve,reject)=>{
        iyzipay.threedsPayment.create(data,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}