import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import MovieCard from './MovieCard'
import axios from 'axios';

function TrendingMovies({watchList,
                        setWatchList,
                        handleAddToWatchList,
                        handleRemoveFromWatchList,
                        pageNo,
                        handleNext,
                        handlePrev}) {
  const [movies,setMovies] = useState([]);
  
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=52f9641e3d436fb1f176a6290b5a3150&page=${pageNo}`)
    .then(function (response) {
      setMovies(response.data.results)
    })
  },[pageNo]) //it will make sure to execute callback in mounting as well as on updation of pageNo state

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
                      movieObj={movieObj}
                      title={movieObj.title} 
                      poster_path={movieObj.poster_path}
                      watchList={watchList}
                      handleAddToWatchList={handleAddToWatchList}
                      handleRemoveFromWatchList={handleRemoveFromWatchList}
                   />
          })
        }
      </div>
      <Pagination pageNo={pageNo}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
      />
    </>
  )
}

export default TrendingMovies