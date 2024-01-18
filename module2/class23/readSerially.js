let fs = require('fs');

console.log('First');

fs.readFile("f3.txt",function cb3(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data+"");
        fs.readFile('f2.txt',function cb2(error,data){
            if(error){
                console.log(error)
            }else{
                console.log(data+"");
                fs.readFile('f1.txt',function cb1(error,data){
                    if(error){
                        console.log(error)
                    }else{
                        console.log(data+"");
                    }
                })
            }
        })
    }
})

console.log("Second");