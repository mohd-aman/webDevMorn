function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink == 'Coffee'){
            resolve("Order for Coffee is placed");
        }else{
            reject("Order not Placed, we don't serve any other drink")
        }
    })
}

function processDrink(orderStatus){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(`${orderStatus} and it is ready to be served`);
        },1000);
    })
}

function generateBill(orderProcessed){
    return new Promise(function(resolve){
        resolve(`${orderProcessed} and Bill is 100Rs`)
    })
}

let placeOrderPromise = placeOrder('Coffee');

placeOrderPromise.then(function(orderStatus){
    console.log(orderStatus);
    return processDrink(orderStatus);
}).then(function(orderProcessed){
    console.log(orderProcessed);
    return generateBill(orderProcessed);
}).then(function(bill){
    console.log(bill);
})

placeOrderPromise.catch(function(error){
    console.log(error)
})