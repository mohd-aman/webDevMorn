import logo from './logo.svg';
import {useState} from "react"
import './App.css';

function App() {
  let [movies,setMovies] = useState([]);
  function handleClick(){
    import('./data.js').then((module)=>{
      console.log(module);
      setMovies(module.moviesData)
    })
  }

  return (
    <div>
      <h1>Movies</h1>
      <button onClick={handleClick}>Show Movies</button>
    {movies.map((movie)=>{
      return <div>{movie.name}</div>
    })}
    </div>
  );
}

export default App;
