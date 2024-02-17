import React from 'react'

function TrendingMovies() {
  return (
    <>
      <div className='text-center text-2xl font-bold m-4'>Trending Movies</div>
      <div className='mx-2 flex flex-wrap justify-around gap-4'>
        <div className="flex justify-center items-end h-80 w-56 rounded-lg overflow-hidden bg-[url('https://knightedgemedia.com/wp-content/uploads/2022/11/john-wick-4-theatrical-trailer-banner1.jpg')] bg-cover bg-no-repeat">
          <div className='text-white py-0.5 bg-slate-950/50 w-full text-center'>
            John Wick
          </div>
        </div>
      </div>
    </>
  )
}

export default TrendingMovies