import { useState } from "react";


export default function Counter(){
    let [count, setCount] = useState(0);

    function handlePlusBtn(){
        console.log("Plus Btn clicked");
        setCount(count+1);
    }

    function handleMinusBtn(){
        console.log("Minus btn clicked");
        if(count>0)
            setCount(count-1);
    }

    return(
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={handlePlusBtn}>+</button>
            <button onClick={handleMinusBtn}>-</button>
        </div>
    )
}