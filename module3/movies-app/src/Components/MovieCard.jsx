

export default function MovieCard({title, poster_path}){
    return(
        <div className="flex justify-center items-end h-80 w-56 rounded-lg overflow-hidden bg-cover bg-no-repeat"
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${poster_path})`}}
        >
          <div className='text-white py-0.5 bg-slate-950/50 w-full text-center'>
            {title}
          </div>
        </div>
    )
}