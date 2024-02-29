import Child from "./Child";


export default function Parent(props){
    return(
        <div className="parent">
            <div>{props.info.onlyForParents()}</div>
            <Child info={props.info}/>
        </div>
        
    )
}