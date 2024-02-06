let myPromise = new Promise(function(resolve,reject){
    const a = 10;
    const b = 20;
    if(a == b){
        resolve("Yes, They are equal");
    }else{
        reject("No, They are not equal");
    }
})

// console.log(myPromise);

myPromise.then(function(data){   //success
    console.log(data);
})

myPromise.catch(function(error){ // failure
    console.log(error);
})

myPromise.finally(function(){
    console.log("Promise no longer in pending state")
})
