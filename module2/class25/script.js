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

async function serveOrder(){
    try{
        let orderStatus = await placeOrder("Coffee");
        let orderProcessed = await processDrink(orderStatus);
        let bill = await generateBill(orderProcessed);
        console.log(bill);
    }catch(error){
        console.log(error);
    }
}

serveOrder();