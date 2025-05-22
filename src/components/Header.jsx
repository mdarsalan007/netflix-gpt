
import logo from "../assets/Logo-1.png"
import {signOut } from 'firebase/auth'
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleGptSearchView } from "../utils/GptSlice"
import { SUPPRTED_LANGUAGE } from "../utils/Constant"
import { changeLanguage } from "../utils/configSlice"


const Header = () => {

  

  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  const handleGptSearchClick = ()=>{
    // toggle gpt search
     console.log("GPT Search Clicked");
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) =>{
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  const handleSignOut = () => { 
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });

  }
  return (
    <div className="absolute w-full   z-10 h-20 flex items-center justify-between px-6" >
      <img className=' w-40' src={logo} />
      {user && <div className="flex items-center">
        {showGptSearch && <select onChange={handleLanguageChange} className="text-white  h-8 font-semibold mx-2 py-0.5 px-1 rounded-sm bg-cyan-400 hover:bg- hover:bg-cyan-300 transition duration-300 cursor-pointer gap-1">
          {SUPPRTED_LANGUAGE.map((lang)=>{
            return (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            )
          }
          )}
        </select>}
        <div>
          <button className="text-white  h-8 font-semibold mx-0.5 py-0.5 px-1 rounded-sm bg-cyan-400 hover:bg- hover:bg-cyan-300 transition duration-300 cursor-pointer"
          onClick={handleGptSearchClick}>{showGptSearch?"Home Page":"GPT Search"}</button>
        </div>
        <div>
          <img className="h-12 rounded-[50%] mx-1 px-1" src={user.photoURL} alt="" />
        </div>

        <button onClick={handleSignOut} className='text-white  h-8 font-semibold mx-0.5 py-0.5 px-1 rounded-sm bg-red-600 hover:bg- hover:bg-red-500 transition duration-300 cursor-pointer'>
        Sign Out
      </button>
      </div>
      }

    </div>
  )
}

export default Header;
