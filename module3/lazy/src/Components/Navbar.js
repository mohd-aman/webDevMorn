import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/about">About</Link>
            <Link to="/testimonial">Testimonial</Link>
        </div>
    )
}