import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import backgroundImage from '../assets/main-background.jpg';

const GptSearchPage = () => {
  return (
    <div className='min-h-screen'>
      <div className='absolute inset-0 -z-10'>
              <img className='brightness-60  w-full min-h-full object-cover' src = {backgroundImage} />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage
