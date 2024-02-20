import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Banner() {
  const [movieObj,setMovieObj] = useState({});

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=52f9641e3d436fb1f176a6290b5a3150')
    .then(function (response) {
      let movies = response.data.results;
      // console.log(movies);
      let randomMovie = movies[Math.floor(Math.random()*20)]
      console.log(randomMovie);
      setMovieObj(randomMovie);
    })
  },[])

  if(movieObj.backdrop_path === undefined){
    return<>...Loading</>
  }

  return (
    <div className={`flex justify-center items-end h-[70vh] bg-[url('https://image.tmdb.org/t/p/original${movieObj.backdrop_path}')] bg-cover bg-no-repeat`}>
      <div className='text-white py-1 bg-slate-950/50 w-full text-center'>
        {movieObj.title}
      </div>
    </div>
  )
}

export default Banner