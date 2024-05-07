/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
// import { useLocation } from 'react-router-dom'

function Header(props) {
//  const Location = useLocation();/
  return (
    <div className='w'>
         <nav className='w-full h-16 bg-white shadow-2xl flex justify-center items-center'>
            <div className='flex gap-4 items-center'>
               <img className='w-10' src={props.img} alt="" />
               <h1 className='text-xl font-medium'>Welcome to {props.id} </h1>
            </div>
         </nav>
    </div>
  )
}

export default Header
