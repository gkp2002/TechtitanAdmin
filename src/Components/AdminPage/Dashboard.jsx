/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {Link, Outlet, } from 'react-router-dom'
import hero  from '../../assets/Admin.png'

function Dashboard() {
  const [value,setValue] = useState([])
     useEffect(()=>{
      fetch(`https://techtitannodejs.onrender.com/dashboard`).then((data)=>{
         return data.json();
      }).then((data)=>{
           setValue(data);
             console.log(data)
      })
     },[])

  return (
    <div className='max-h-full h-full bottom-0 relative '>
     <section className=''>
    <aside className=' bg-orange-600  justify-evenly h-20 flex items-center px-2 relative'>  

    <div className='text-xl font-medium   flex justify-center items-center gap-2'>
    <img className='w-10' src={hero} alt="" /> 
    Welcome To   Mr. <span className=' text-black font-bold animate-pulse '> {
      value.map((item)=>{
        return item.Name;
      })
    } 
    </span>
    </div>
    <Link to='show' >
    <div className='h-12 bg-blue-700 flex items-center rounded-xl'>
    <h1 className='text-2xl text-white font-medium px-12'>Dashboard</h1>
    </div>
    </Link>
 
    </aside>
    <div className='print'>
    <Outlet/>
    </div>
    </section>
       
    </div>
  )
}

export default Dashboard
