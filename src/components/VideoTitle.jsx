import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='w-3/8 pt-40 px-8 absolute z-10 '>
      <h1 className='text-4xl font-bold my-2 text-white'>{title}</h1>
      <p className='text-lg leading-snug  text-white'>{description}</p>
      <button className='mx-2 mt-6 px-3 py-0.5 text-xl font-semibold  rounded-sm  bg-white cursor-pointer hover:bg-white/50 transition duration-300'>▶️ Play</button>
      <button className=' mx-2 px-3 py-0.5 text-xl font-semibold rounded-sm  bg-gray-400/40 cursor-pointer hover:bg-gray-400/60 text-white transition duration-300'>! More info</button>
    </div>
  )
}

export default VideoTitle
