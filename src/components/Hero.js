import React from 'react'
import hero from '../images/hero.jpg'
import podlogo from '../images/podlogo.png'
import {Link} from 'gatsby'


function Hero() {
    return (
        <div className='bg-cover opacity-75 text-center relative'>

            <img 
            
            src={hero}
                

            />

<div className='bg-contain absolute z-50'>


            
            </div>
            <div className='flex justify-evenly'>
            <div className='top-10 absolute '>
            <Link to={"/EpisodeDetails"}>
                <a className='text-4xl text-blue-500 ml-10'>Podcast</a>
</Link>
                <a className='text-4xl text-blue-500 ml-10 '>Home</a>
                <a className='text-4xl text-blue-500 ml-10 '>Home</a>
                <a className='text-4xl text-blue-500 ml-10 ' >Home</a>
                <a className='text-4xl text-blue-500 ml-10  '>Home</a>
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
