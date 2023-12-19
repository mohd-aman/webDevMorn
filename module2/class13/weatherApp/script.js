//homework 
// 1. make request on click of button.
// 2. make req with the value we have in input

let btn = document.querySelector("button");
let input = document.querySelector("input");

let apiUrl = 'http://api.weatherapi.com/v1/current.json?key=882f1adb930a45d7852160114232705&q=New York&aqi=no';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


btn.addEventListener('click',function(){
    let value = input.value;
    console.log(value)
})