import React from 'react'
import {Link} from 'gatsby'

function Nav() {
    return (
        <div className='flex justify-evenly text-6xl mb-20 '>
           <ul>
           <Link to={"/"}>
               <a className='ml-10'>Home</a>
               </Link>
               <a className='ml-10'>About</a>
               <a className='ml-10'>Podcast</a>
               <a className='ml-10'>Contact</a>
               <a className='ml-10'>Merch</a>
           </ul> 
        </div>
    )
}

export default Nav
