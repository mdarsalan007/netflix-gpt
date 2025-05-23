import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { API_OPTIONS } from '../utils/Constant'
import { addFoundMovies } from '../utils/searchedMoviesSlice'

const GptSearchBar = () => {

  const searchText = useRef(null);

  const dispatch = useDispatch();

  const handleGptSearchClick = async ()=>{

    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    
    const json = await data.json();
    dispatch(addFoundMovies(json.results));
    console.log(json.results);
  }

  const languageKey = useSelector((store)=>store.config.lang)
  return (
    <div className='mt-[10%] mb-4 flex justify-center'>
      <div className='bg-blue-400 w-[60%] py-3 rounded-lg'>
          <form className='px-4 flex justify-around items-center' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} className='py-4 px-2 h-10 text-sm bg-white w-[80%] outline-0 border rounded-md' type="text" placeholder={lang[languageKey].gptsearchPlaceholder}/>
        <button onClick={handleGptSearchClick} className='w-[18%] bg-red-600 hover:bg-red-500 transition duration-300 h-9.5 rounded-md cursor-pointer text-white text-lg font-medium'>{lang[languageKey].search}</button>
      </form>
      </div>
      
    </div>
  )
}

export default GptSearchBar
