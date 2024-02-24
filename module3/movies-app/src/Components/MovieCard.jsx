

export default function MovieCard({title, 
    movieObj,
    poster_path,
    watchList,
    handleAddToWatchList,
    handleRemoveFromWatchList}){

    function isContain(movieObj){
        for(let i=0;i<watchList.length;i++){
            if(movieObj.id === watchList[i].id){
                return true;
            }
        }
        return false;
    }

    return(
        <div className="flex flex-col justify-between hover:scale-[0.9] hover:rotate-3 duration-300 justify-center items-end h-80 w-56 rounded-lg overflow-hidden bg-cover bg-no-repeat"
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${poster_path})`}}
        >
            { isContain(movieObj)?
            <div onClick={()=>handleRemoveFromWatchList(movieObj)} className="text-xl m-2 rounded-lg cursor-pointer p-2 bg-slate-950/50">&#10060;</div> :
            <div onClick={()=>handleAddToWatchList(movieObj)} className="text-xl m-2 rounded-lg cursor-pointer p-1 bg-slate-950/50">&#128525;</div>
            }

          <div className='text-white py-0.5 bg-slate-950/50 w-full text-center'>
            {title}
          </div>
        </div>
    )
}