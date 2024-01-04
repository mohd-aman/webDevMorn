let allStars = document.querySelectorAll('.star');
let starContainer = document.querySelector('.star-container');
let rating = document.querySelector('h2');
let prevClicked;

//without event delegation
// for(let i=0;i<allStars.length;i++){
//     allStars[i].addEventListener('click',function(){
//         allStars[i].classList.add('active');
//     })
// }

//with event delegation
starContainer.addEventListener('click',function(e){
    if(e.target.classList.contains('star')){
        // console.log(e.target.dataset.pos);
        //remove active class from all the stars. 
        removeColorFromStar(allStars.length);
        //before we make n stars yellow make sure to remove active class from all stars
        let currentStar = e.target.dataset.pos;
        addColorToStar(currentStar);
        prevClicked = currentStar;
        rating.innerText = "Rating : "+ currentStar;
    }
})

starContainer.addEventListener('mouseover',function(e){
    // console.log(e.target);
    //before we make n stars yellow make sure to remove active class from all stars
    if(e.target.classList.contains('star')){
        removeColorFromStar(allStars.length);
        let currentStar = e.target.dataset.pos;
        addColorToStar(currentStar);
    }
})

starContainer.addEventListener('mouseout',function(e){
    if(e.target.classList.contains('star')){
        removeColorFromStar(allStars.length);
        addColorToStar(prevClicked);
    }
})

function removeColorFromStar(n){
    for(let i=0;i<n;i++){
        allStars[i].classList.remove('active');
    }
}

function addColorToStar(n){
    for(let i=0;i<n;i++){
        allStars[i].classList.add('active');
    }
}