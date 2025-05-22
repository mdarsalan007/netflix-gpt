import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const languageKey = useSelector((store)=>store.config.lang)
  return (
    <div className='mt-[10%] flex justify-center'>
      <div className='bg-blue-400 w-[60%] py-3 rounded-lg'>
          <form className='px-4 flex justify-around items-center'>
        <input className='py-4 px-2 h-10 text-sm bg-white w-[80%] outline-0 border rounded-md' type="text" placeholder={lang[languageKey].gptsearchPlaceholder}/>
        <button className='w-[18%] bg-red-600 hover:bg-red-500 transition duration-300 h-9.5 rounded-md cursor-pointer text-white text-lg font-medium'>{lang[languageKey].search}</button>
      </form>
      </div>
      
    </div>
  )
}

export default GptSearchBar
