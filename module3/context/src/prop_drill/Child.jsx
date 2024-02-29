import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";


export default function Child(props){
    return(
        <div className="child">
            <div>{props.info.onlyForChild()}</div>
            <GrandSon info={props.info}/>
            <GrandDaughter info={props.info}/>
        </div>
    )
}