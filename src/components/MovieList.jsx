import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div>
        <div>
            <h4 className='mx-3 mb-1 font-medium text-lg'>{title}</h4>
            
            <div className='relative'>
            <div className='flex overflow-x-auto max-w-full scrollbar-hide'>

            {movies?.map((movie)=>{
              return <MovieCard key={movie.id} posterPath={movie?.poster_path}/>
                }
            )}
            </div>
            <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#ed3636] to-transparent pointer-events-auto"></div>
            </div>
            
        </div>
    </div>
  )
}

export default MovieList
