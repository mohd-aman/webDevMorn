import { useState } from "react"

export default function Form(){
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");

    function handleFirstName(e){
        setFirstName(e.target.value);
    }

    function handleLastName(e){
        setLastName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(firstName,lastName);
    }

    return(
        <div>
            <h1>Form Component</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name :
                    <input type="text" value={firstName}
                         onChange={handleFirstName} />
                </label>
                <label>Last Name :
                    <input type="text" value={lastName}
                        onChange={handleLastName}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}