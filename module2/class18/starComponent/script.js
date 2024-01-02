let allStars = document.querySelectorAll('.star');
let starContainer = document.querySelector('.star-container');

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
        let currentStar = e.target.dataset.pos;
        for(let i=0;i<currentStar;i++){
            allStars[i].classList.add('active');
        }
    }
})