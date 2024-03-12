import logo from './logo.svg';
import {lazy, Suspense} from "react"
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Home from './Pages/Home';
// import Product from './Pages/Product';
// import Testimonial from './Pages/Testimonial';
// import About from './Pages/About';
// const Product = lazy(()=>import('./Pages/Product'))
// const About = lazy(()=>import('./Pages/About'));
// const Testimonial = lazy(()=>import('./Pages/Testimonial'))
import HocA from './Components/CompA'

function App() {
  // let [movies,setMovies] = useState([]);
  // function handleClick(){
  //   import('./data.js').then((module)=>{
  //     console.log(module);
  //     setMovies(module.moviesData)
  //   })
  // }
  return (
    // <div>
    //   <h1>Movies</h1>
    //   <button onClick={handleClick}>Show Movies</button>
    // {movies.map((movie)=>{
    //   return <div>{movie.name}</div>
    // })}
    // </div>
    // <>
    //   <Suspense fallback={<h2>...Loading</h2>}>
    //   <BrowserRouter>
    //     <Navbar/>
    //     <Routes>
    //       <Route path='/' element={<Home/>}></Route>
    //       <Route path='/product' element={<Product/>}></Route>
    //       <Route path='/about'  element={<About/>}></Route>
    //       <Route path='/testimonial' element={<Testimonial/>}></Route>
    //     </Routes>
    //   </BrowserRouter>
    //   </Suspense>
    // </>

    <>
      <HocA yellow/>
      <HocA dark/>
    </>
  );
}

export default App;
