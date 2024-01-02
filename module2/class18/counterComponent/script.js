let plusBtn = document.querySelector('.plus-btn');
let minusBtn = document.querySelector('.minus-btn');
let resetBtn = document.querySelector('.reset-btn');
let btnContainer = document.querySelector('.btn-container');
let input = document.querySelector('input');
let counter = document.querySelector('h2');

let incDecBy = 1;
let count = 0;

input.addEventListener('change',function(e){
    console.log(e.target.value) // it is of string type
    if(Number(e.target.value)<=0){
        alert("Enter Positive value");
        return
    }
    incDecBy = Number(e.target.value)
})

//with event delegation
btnContainer.addEventListener('click',function(e){
    // console.log(e.target);
    if(e.target.classList.contains('plus-btn')){
        count+=incDecBy;
    }else if(e.target.classList.contains('minus-btn')){
        if(count == 0 || count-incDecBy<0){
            return
        }
        count-=incDecBy;
        
    }else if(e.target.classList.contains('reset-btn')){
        count = 0;
    }
    counter.innerText = count;
})


//without event delegation 
// plusBtn.addEventListener('click',function(){
//     count++;
//     // console.log(count)
//     counter.innerText = count;
// })

// minusBtn.addEventListener('click',function(){
//     if(count == 0){
//         return;
//     }
//     count--;
//     // console.log(count);
//     counter.innerText = count
// })

// resetBtn.addEventListener('click',function(){
//     count = 0;
//     counter.innerText = count
// })