import React from 'react'
import logo from "../assets/Logo-1.png"

const Header = () => {
  return (
    <div  className="absolute  z-10 h-24 flex items-center ml-6" >
      <img className=' w-40' src={logo}/>
    </div>
  )
}

export default Header
