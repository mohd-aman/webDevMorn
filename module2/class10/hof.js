//Never manipulate or change your original array
let radiusOfCircles = [1,2,4,6,7,8,9];

function calculate(radiusArr,logic){
    //radiusArr = [1,2,4,6,7,8,9]
    //logic = function diameterLogic(radius){
    //           return 2*radius;
    //        }
    let result = [];
    for(let i=0;i<radiusArr.length;i++){
        let res = logic(radiusArr[i]);
        result.push(res)
    }
    return result
}

function diameterLogic(radius){
    return 2*radius;
}

function circumferenceLogic(radius){
    return 2*3.14*radius;
}

function areaLogic(radius){
    return Math.PI*radius*radius;
}

let diameterOfCircles = calculate(radiusOfCircles,diameterLogic);
console.log(diameterOfCircles);

let circumferenceOfCircles = calculate(radiusOfCircles,circumferenceLogic)
console.log(circumferenceOfCircles);

let areaOfCircles = calculate(radiusOfCircles,areaLogic);