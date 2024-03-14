import {useState} from 'react'

export default function Login(){
    const [userName,setUserName] = useState("");
    const [passsword,setPassword] = useState("");

    return(
        <div>
            <form>
                <label>
                    <input type="text" onChange={(e)=>setUserName(e.target.value)} value={userName} placeholder="username"/>
                </label>
                <label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} value={passsword} placeholder="password" />
                </label>
                <button onClick={(e)=>e.preventDefault()}>
                    Submit
                </button>
            </form>
        </div>
    )
}