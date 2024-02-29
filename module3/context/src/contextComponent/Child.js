import { useContext } from "react";
import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";
import { FamilyContext } from "./FamilyContext";


export default function Child(){
    const info = useContext(FamilyContext);
    return(
        <div className="child">
            {info.onlyForChild()}
            <GrandSon/>
            <GrandDaughter/>
        </div>
    )
}