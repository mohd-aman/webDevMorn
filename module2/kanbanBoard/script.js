//1. show and hide modal on click of button
// figure out where to add event listener and what is the event. 
    // add event listener on plus button and the event is of click

//2. On click of delete btn make it red if again clicked make it black

let addBtn = document.querySelector('.add-btn'); // selecting the add button
let modalCont = document.querySelector('.modal-cont'); //selecting the modal
let isModalHidden = true;

let deleteBtn = document.querySelector(".remove-btn") // select the remove button
let isDeleteBtnActive = false; // maintaining state for delete btn

addBtn.addEventListener('click',function(){
    if(isModalHidden){
        modalCont.style.display = "flex" // show the modal
        isModalHidden = false
    }else{
        modalCont.style.display = 'none'// hide the modal
        isModalHidden = true
    }
})

deleteBtn.addEventListener('click',function(){
    if(isDeleteBtnActive){
        // make it black
        deleteBtn.style.color = 'black'
        isDeleteBtnActive = false; // update it for next click.
    }else{
        //make it red
        deleteBtn.style.color = 'red';
        isDeleteBtnActive = true;    // and update it for next click
    }
    
})