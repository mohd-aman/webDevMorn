function parent(){
    var a = 10;
    function child(){
        console.log(a);
    }
    return child;
}

let innerFxn = parent();
// innerFxn = function child(){
//     console.log(a);
// }
// innerFxn();

function anotherfx(){
    var a = 35;
    innerFxn();
}
anotherfx();