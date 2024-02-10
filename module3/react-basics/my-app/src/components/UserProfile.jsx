
export default function UserProfile(props){
    // console.log(props);
    // console.log(props.name);
    // console.log(props.age);
    // console.log(props.place);
    let {name, age, place} = props;
    // props.place = "Delhi" //props are immutable, you can't change it.
    return(
        <h2>I am {name}, of age {age}, living in {place}</h2>
    )
}
