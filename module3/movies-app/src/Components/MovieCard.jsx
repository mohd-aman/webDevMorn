

export default function MovieCard({title, 
    id,
    poster_path,
    watchlist,
    handleAddToWatchList,
    handleRemoveFromWatchList}){

    return(
        <div className="flex flex-col justify-between hover:scale-[0.9] duration-300 justify-center items-end h-80 w-56 rounded-lg overflow-hidden bg-cover bg-no-repeat"
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${poster_path})`}}
        >
            { watchlist.includes(id)?
            <div onClick={()=>handleRemoveFromWatchList(id)} className="text-xl m-2 rounded-lg cursor-pointer p-2 bg-slate-950/50">&#10060;</div> :
            <div onClick={()=>handleAddToWatchList(id)} className="text-xl m-2 rounded-lg cursor-pointer p-1 bg-slate-950/50">&#128525;</div>
            }

          <div className='text-white py-0.5 bg-slate-950/50 w-full text-center'>
            {title}
          </div>
        </div>
    )
}