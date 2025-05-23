import React from 'react'
import { IMG_CDN_URL } from '../utils/Constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 flex-shrink-0 mx-2 mb-4'>
      <img src={IMG_CDN_URL+posterPath} alt="movie poster" />
    </div>
  )
}

export default MovieCard
