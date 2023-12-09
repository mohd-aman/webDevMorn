let radiusOfCircles = [1,2,4,6,7,8,9];
//calculate the diameter, circumference and area for given array. 

//Q1. create a function which accepts array representing radius of circle. which calculates diameter for each
// radius in the given arr and return an array representing diamter of each circle.

function calculateDiameter(radiusArr){
    let result = [];
    for(let i=0;i<radiusArr.length;i++){
        let diameter = 2*radiusArr[i];
        result.push(diameter);
    }
    return result;
}

let diameterOfCircles = calculateDiameter(radiusOfCircles);
console.log(diameterOfCircles);

function calculateCircumference(radiusArr){
    let result = [];
    for(let i=0;i<radiusArr.length;i++){
        let circumference = 2*3.14*radiusArr[i];
        result.push(circumference);
    }
    return result;
}

let circumferenceOfCircles = calculateCircumference(radiusOfCircles);
console.log(circumferenceOfCircles);

function calculateArea(radiusArr){
    let result = [];
    for(let i=0;i<radiusArr.length;i++){
        let area = 3.14*radiusArr[i]*radiusArr[i];
        result.push(area);
    }
    return result;
}

let areaOfCircles = calculateArea(radiusOfCircles);
console.log(areaOfCircles);