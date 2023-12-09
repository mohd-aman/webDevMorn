let radiusOfCircles = [1,2,4,6,7,8,9];

function diameterLogic(radius){
    return 2*radius;
}

function circumferenceLogic(radius){
    return 2*3.14*radius;
}

function areaLogic(radius){
    return Math.PI*radius*radius;
}

// function calculate(radiusArr,logic){
//     let result = [];
//     for(let i=0;i<radiusArr.length;i++){
//         let res = logic(radiusArr[i]);
//         result.push(res)
//     }
//     return result
// }
// let diameterOfCircles = calculate(radiusOfCircles,diameterLogic);

let diameterOfCircles = radiusOfCircles.map(diameterLogic);
console.log(diameterOfCircles);

let circumferenceOfCircles = radiusOfCircles.map(circumferenceLogic);
console.log(circumferenceOfCircles);

let areaOfCircles = radiusOfCircles.map(areaLogic);
console.log(areaOfCircles)




//Problem Statement
// You are given a transaction array treat the transaction amount in rupees,
//  and convert those amounts into dollars and conversion rate is also provided to us.

// Idea
// We can use the map to apply similar operations to all the elements of an array.

const transactions = [1000, 3000, 4000, 2000, - 898, 3800, - 4500];
const inrtToUsd = 80;

function logic(amount){
    return amount/inrtToUsd;
}

// let conversionIntoDollar = transactions.map(logic);
//or 
let conversionIntoDollar = transactions.map(function(amount){
    return amount/inrtToUsd
})
console.log(conversionIntoDollar);