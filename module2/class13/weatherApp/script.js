//homework 
// 1. make request on click of button.
// 2. make req with the value we have in input
// 2. try to replace then and catch with asyn await.

// let btn = document.querySelector("button");
let form = document.querySelector("form");
let input = document.querySelector("input");
let temp = document.querySelector('.temp');
let place = document.querySelector('.time_location p');
let timeDate = document.querySelector('.time_location span');
let conditionText = document.querySelector('.weather_condition span');
let conditionImage = document.querySelector('.weather_condition img');



// Make a GET request



// btn.addEventListener('click',function(){
//     let value = input.value;
//     console.log(value)
// })

form.addEventListener('submit',function(e){
  e.preventDefault(); // it will prevent from page refresh after submitting the form. 
  let value = input.value;
  console.log(value)
  let apiUrl = 'http://api.weatherapi.com/v1/current.json?key=882f1adb930a45d7852160114232705&q='+value+'&aqi=no';
  fetch(apiUrl)
  .then(response => {
    // console.log(response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    temp.innerText = data.current.temp_c;
    place.innerText = data.location.name;
    timeDate.innerText = data.location.localtime
    conditionText.innerText = data.current.condition.text;
    let imgSrc = data.current.condition.icon;
    // https://cdn.weatherapi.com/weather/64x64/night/113.png
    // console.log(imgSrc.substring(2));
    conditionImage.src = "https:"+imgSrc;
  })
  .catch(error => {
    alert("Sorry, for the incovenienc, please try again with correct name")
    console.error('Error:', error);
  });
})