
import logo from "../assets/Logo-1.png"
import {signOut } from 'firebase/auth'
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {


  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)



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
        <div>
          <img className="h-12 rounded-[50%] mx-1 px-1" src={user.photoURL} alt="" />
        </div>

        <button onClick={handleSignOut} className='text-white  h-8 font-semibold mx-0.5 py-0.5 px-1 rounded-sm bg-red-500 hover:bg- hover:bg-red-700 transition duration-300 cursor-pointer'>
        Sign Out
      </button>
      </div>
      }

    </div>
  )
}

export default Header;
