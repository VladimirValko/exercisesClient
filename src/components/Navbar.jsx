import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' w-full h-[80px] bg-white flex justify-between px-4 items-center shadow-sm mr-8'>
        <div className='flex justify-start align-middle text-center items-center'>
            <img src={Logo} alt='logo' className=' ml-4 w-16'/>
            <p className=' font-black text-3xl mx-2 text-[#e11d48]'>PRO-GYM</p>
        </div> 
        <ul className='flex gap-12 text-xl font-bold capitalize  align-middle text-center items-center text-gray-500 mr-6'>
            <Link to='/'>
            <li className='hover:text-[#e11d48] cursor-pointer hover:shadow-sm'>Home</li>
            </Link>
            <Link to='/favorite'>
            <li className='hover:text-[#e11d48] cursor-pointer hover:shadow-sm'>My Programm</li>
            </Link>
            <li className='hover:text-[#e11d48] cursor-pointer hover:shadow-sm'>Mobile App</li>
            <Link to="/Login">
            <button className="btn btn-secondary">Log-In</button>
            </Link>
            <button className="btn btn-primary">Sing-In</button>
        </ul>
    </div>
  )
}

export default Navbar