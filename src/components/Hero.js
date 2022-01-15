import React from 'react'
import hero from '../images/hero.jpg'
import podlogo from '../images/podlogo.png'
import {Link} from 'gatsby'


function Hero() {
    return (
        <div className='bg-cover overflow-x-hidden sm:w-full opacity-75 text-center relative '>

            <img 
            className='w-full sm:w-full md:h-full lg:h-full'
            src={hero}
                

            />

<div className='bg-contain absolute z-50'>


            
            </div>
            <div className='flex justify-evenly w-full'>
            <div className='top-7 absolute '>
            <Link to={"/EpisodeDetails"}>
                <a className='text-2xl font-bold text-blue-500 ml-3 '>Podcast</a>
</Link>
                <a className='text-2xl font-bold text-blue-500 ml-2 '>Home</a>
                <a className='text-2xl font-bold text-blue-500 ml-2 '>Home</a>
                <a className='text-2xl font-bold text-blue-500 ml-2 ' >Home</a>
                <a className='text-2xl font-bold text-blue-500 ml-2 mr-4  '>Home</a>
            </div>
            </div>
            <div className='flex justify-center'>
            <div className='absolute top-15'>
           
            </div>
                <h1 className='absolute text-blue-500 text-9xl z-50 top-20 mt-10'>Shotify</h1>
            </div>
        </div>
    )
}

export default Hero
