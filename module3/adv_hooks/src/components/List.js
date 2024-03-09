import { useState, useTransition } from "react"

export default function List(){
    const [input,setInput] = useState("");
    const [list,setList] = useState([]);

    const [isPending, startTransition] = useTransition();

    const LIST_SIZE = 15000;

    function handleChange(e){
        setInput(e.target.value);

        startTransition(()=>{
            const newList = [];
            for(let i=0;i<LIST_SIZE;i++){
                newList.push(e.target.value);
            }
            setList(newList)
        })
    }

    return(
        <div>
            <input value={input} type="text" onChange={handleChange} />
            <ul>
                {isPending?<div>...Loading</div>:
                    list.map((ele)=>{
                        return <li>{ele}</li>
                })}
            </ul>
        </div>
    )
}