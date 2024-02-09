
export default function UserProfile(props){
    // console.log(props);
    // console.log(props.name);
    // console.log(props.age);
    // console.log(props.place);
    
    // props.place = "Delhi" //props are immutable, you can't change it.
    return(
        <h2>I am {props.name}, of age {props.age}, living in {props.place}</h2>
    )
}
