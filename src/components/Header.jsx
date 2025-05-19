import React from 'react'
import logo from "../assets/Logo-1.png"

const Header = () => {
  return (
    <div  className="absolute w-screen   z-10 h-20 flex items-center justify-between px-6" >
      <img className=' w-40' src={logo}/>
      <button className='text-white text-lg font-semibold py-0.5 px-1 rounded-md bg-[#dd0000] hover:bg-white hover:text-[#dd0000] hover:border cursor-pointer'>
        Sign Out
      </button>
    </div>
  )
}

export default Header
