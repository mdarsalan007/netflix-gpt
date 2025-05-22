import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import backgroundImage from '../assets/main-background.jpg';

const GptSearchPage = () => {
  return (
    <div className=''>
      <div className='absolute top-0 -z-10'>
              <img className='brightness-60 ' src = {backgroundImage} />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage
