import React from 'react'
import Banner from './Banner'
import TrendingMovies from './TrendingMovies'

function Home({watchList,
               setWatchList,
               handleAddToWatchList,
               handleRemoveFromWatchList,
               pageNo,
               handleNext,
               handlePrev}) {
    return (
        <>
            <Banner></Banner>
            <TrendingMovies
                watchList={watchList}
                setWatchList={setWatchList}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
                pageNo={pageNo}
                handleNext={handleNext}
                handlePrev={handlePrev}
            ></TrendingMovies>
        </>

        // Banner Section
        // Trending Movies
        // Pagination
    )
}

export default Home