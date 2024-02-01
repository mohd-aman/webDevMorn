async function processItem(item){
    return Promise.resolve(item);
} 

async function processArray(array){
    const results = [];
    for(const item of array){
        const processedItem = await processItem(item);
        results.push(processedItem);
    }
    // console.log("Array ",results);
    return results;
} 

const data = [1, 2, 3];
console.log(processArray(data));
let promise = processArray(data)
promise.then(function(data){
    console.log(data);
})