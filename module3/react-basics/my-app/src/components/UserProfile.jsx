
export default function UserProfile(props){
    console.log(props);
    console.log(props.name);
    console.log(props.age);
    console.log(props.place);
    return(
        <h2>I am {props.name}, of age {props.age}, living in {props.place}</h2>
    )
}
