import React from 'react'
import SearchedMovieList from './SearchedMovieList'

const GptMovieSuggestions = () => {
  return (
    <div className='bg-gray-800'>
    <div className='-mt-64 z-10 relative text-white'>
      <SearchedMovieList/>
    </div>
    </div>
  )
}

export default GptMovieSuggestions
