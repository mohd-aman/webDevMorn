import React from 'react'
import Banner from './Banner'
import TrendingMovies from './TrendingMovies'

function Home({watchList,
               setWatchList,
               handleAddToWatchList,
               handleRemoveFromWatchList}) {
    return (
        <>
            <Banner></Banner>
            <TrendingMovies
                watchList={watchList}
                setWatchList={setWatchList}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
            ></TrendingMovies>
        </>

        // Banner Section
        // Trending Movies
        // Pagination
    )
}

export default Home