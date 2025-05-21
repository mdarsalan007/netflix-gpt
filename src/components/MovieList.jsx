import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div>
        <div>
            <h4>{title}</h4>
            <div className='flex overflow-x-auto max-w-screen overflow-y-hidden'>

            {movies.map((movie)=>{
              return <MovieCard key={movie.id} posterPath={movie?.poster_path}/>
                }
            )}
            </div>
            
        </div>
    </div>
  )
}

export default MovieList
