// function fxn(){
//     var b = 10;
//     console.log(b);
// }

// var a = 20;
// console.log(a);
// fxn();



// var a = 10;
// console.log(a);

// function fxn(){
//     var b = 20;
//     console.log(b);
// }

// fxn();
// var c = 30;
// console.log(c);


// var a = 10;

// function fxn(){
//     console.log(a)
// }

// fxn();

// var a = 10;

// function fxn(){
//     function gxn(){
//         console.log(a);
//     }
//     gxn();
// }

// fxn();

let a = 20;

function parent(){
    let a = 10;
    function child(){
        function grandchild(){
            console.log(a);
        }
        grandchild();
    }
    child();
}

parent();
