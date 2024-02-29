import { useContext } from "react"
import { FamilyContext } from "./FamilyContext"


export default function GrandDaughter(){
    const info = useContext(FamilyContext)
    return(
        <div className="grandDaughter">
            {info.onlyeForGrandChildren()}
        </div>
    )
}