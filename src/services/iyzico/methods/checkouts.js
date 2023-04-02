import iyzipay from "../connection/iyzipay";

//3ds ödeme işleminin tamamlanıp tamamlanmadıgını kontrol edicez
export const initialize=(data)=>{
    return new Promise((resolve,reject)=>{
        iyzipay.checkoutFormInitialize.create(data,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}

export const getForPayment=(data)=>{
    return new Promise((resolve,reject)=>{
        iyzipay.checkoutForm.retrieve(data,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}