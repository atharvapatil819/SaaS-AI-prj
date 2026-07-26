import React from 'react'
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

function Hero() { 

    const navigate = useNavigate();
  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
        <div className='text-center mb-6'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-[76px] font-semibold mx-auto leading-[1.2]'> <span className='bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent'>AI Tools</span> That Help You Create More</h1>
            <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>From writing articles to generating images and enhancing photos, Orbix AI simplifies your creative workflow productivity—all in one place.</p>
        </div> 
        <div  className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
            <button onClick={()=> navigate('/ai')} className='group relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white px-10 py-3 rounded-xl font-semibold shadow-lg shadow-violet-500/30 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer'>Start creating now</button>
            <button className='bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-10 py-3 rounded-xl font-semibold shadow-lg shadow-violet-300/40 hover:from-violet-600 hover:to-indigo-600 hover:shadow-xl hover:shadow-violet-400/50 hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer'>Watch demo</button>
        </div> 
        <div className='flex items-center gap-4 mt-8 mx-auto text-gray-600'>
            <img src={assets.user_group} alt='' className='h-8' /> Trusted by 10K+ people
        </div>
    </div>
  )
}

export default Hero;