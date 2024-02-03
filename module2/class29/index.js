function p1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("My name is Alex");
        },1000)
    })
}

function p2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("My age is 25");
        },2000)
    })
}

function p3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("I am Cricketer")
        },3000)
    })
}

//Promise combinators
//.all, .allSettled, .race, .any

//all
// Promise.all([p1(),p2(),p3()]).then(function(res){
//     console.log(res);
// }).catch(function(err){
//     console.log("Error"+err);
// })

// allSettled
// settled means promise is no longer in pending state.
// Promise.allSettled([p1(),p2(),p3()]).then(function(res){
//     console.log(res);
// })

//any
//returns the first promise resolve value. if all promises rejected will get an error
// Promise.any([p1(),p2(),p3()]).then(function(res){
//     console.log(res)
// }).catch(function(err){
//     console.log("Error -> "+err)
// })

//race
// returns the first one to settle.
// Promise.race([p1(),p2(),p3()]).then(function(res){
//     console.log(res);
// }).catch(function(err){
//     console.log("Error : "+err)
// })



// Promise.all polyfill
// input it takes -> array of promises
// output it gives -> return promise, in then we get array of resolved promises
// what it does -> resolve promises

// p1().then(function(res){
//     console.log(res);
// },function(err){
//     console.log("Error : "+err);
// })

Promise.myAll = function(promiseArr){
    return new Promise(function(resolve,reject){
        let res = [];
        let pendingPromisesToResolve = promiseArr.length;
        for(let i=0;i<promiseArr.length;i++){
            Promise.resolve(promiseArr[i]).then(function(data){
                pendingPromisesToResolve--;
                res[i] = data;
                if(pendingPromisesToResolve == 0){
                    resolve(res);
                }
            },reject)
        }
    })
}

Promise.myAll([p1(),p2(),p3()]).then(function(res){
    console.log(res);
}).catch(function(error){
    console.log("Error : "+error)
})