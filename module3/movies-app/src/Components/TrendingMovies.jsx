import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import MovieCard from './MovieCard'
import axios from 'axios';

function TrendingMovies() {
  const [movies,setMovies] = useState([]);
  
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=52f9641e3d436fb1f176a6290b5a3150')
    .then(function (response) {
      setMovies(response.data.results)
    })
  },[])

  // console.log(movies);
  if(movies.length === 0){
    return<>...Loading</>
  }

  return (
    <>
      <div className='text-center text-2xl font-bold m-4'>Trending Movies</div>
      <div className='mx-2 flex flex-wrap justify-around gap-4'>
        {
          movies.map((movieObj)=>{
            return <MovieCard 
                      key={movieObj.id}
                      title={movieObj.title} 
                      poster_path={movieObj.poster_path}
                   />
          })
        }
      </div>
      <Pagination/>
    </>
  )
}

export default TrendingMovies