import Parent from "./Parent";
import { useContext } from "react";
import { FamilyContext } from "./FamilyContext";

export default function Family(){
    const info = useContext(FamilyContext);
    return(
        <div className="family">
            {info.familyName}
            <Parent/>
        </div>
    )
}