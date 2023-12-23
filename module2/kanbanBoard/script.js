//1. show and hide modal on click of button
// figure out where to add event listener and what is the event. 
    // add event listener on plus button and the event is of click

//2. On click of delete btn make it red if again clicked make it black

let addBtn = document.querySelector('.add-btn'); // selecting the add button
let modalCont = document.querySelector('.modal-cont'); //selecting the modal
let isModalHidden = true;

let deleteBtn = document.querySelector(".remove-btn") // select the remove button
let isDeleteBtnActive = false; // maintaining state for delete btn

let textArea = document.querySelector('.textarea-cont'); // select the text area
let mainCont = document.querySelector('.main-cont');

// Instantiate
var uid = new ShortUniqueId();

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

textArea.addEventListener('keydown',function(e){
    console.log(e);
    let key = e.key;
    // console.log(key);
    if(key == "Enter"){
        //generate a ticket
        console.log(textArea.value);
        createTicket(textArea.value);
        //hide the modal
        modalCont.style.display = 'none'
        isModalHidden = true
        //empty the textArea value;
        textArea.value = ""
    }
})


function createTicket(task){
    //crate the below structure with js and add it to main container
    // <div class="ticket-cont">
    //     <div class="ticket-color"></div>
    //     <div class="ticket-id">#5gf832</div>
    //     <div class="ticket-area">Some task</div>
    // </div>
    let id = uid.rnd();
    let ticketCont = document.createElement('div'); //<div></div>
    ticketCont.className = 'ticket-cont';// <div class="ticket-cont"></div>
    ticketCont.innerHTML = `<div class="ticket-color">
                            </div> <div class="ticket-id">#${id}</div>
                            <div class="ticket-area">${task}</div>
                            <div class='lock-unlock-btn'>
                                <i class="fa-solid fa-lock"></i>
                            </div>`
    // console.log(ticketCont);
    mainCont.appendChild(ticketCont);

    //handle delete ticket
    ticketCont.addEventListener('click',function(){
        if(isDeleteBtnActive)
            ticketCont.remove();
    })
}