import React from 'react';
import Smily from '../assets/blink.png'
import Equip from '../assets/equip.png';
import HorizontalScollbar from './HorizontalScroll';

const Top = () => {
  return (
    <div className='w-screen'>
        <div className='flex flex-col align-middle text-center'>
        <div className=''>
            <h2 className=' font-extrabold text-gray-600 text-6xl mb-2'>
                Popular Exercises
            </h2>
            
        </div>
        <div className='flex align-middle justify-center text-center gap-4'>
            <p className='text-center text-gray-700 italic text-xl mt-4'>
                <span className='text-primary'>Not shure where to start? </span>Try out most popular exercises!
            </p>
            <img src={Equip} alt='dumbell' className='w-12' />
           
        </div>
       
        <div className='flex w-screen flex-wrap gap-8 align-middle justify-center pt-10'>
          <HorizontalScollbar />
        </div>
        <div className='flex align-middle items-center justify-center text-center gap-4 mt-2'>
       <p className='text-center text-gray-500 text-lg '>
                You can scroll here 
            </p>
        <img src={Smily} alt='blinking' className='w-6 h-6'/>
       </div>
        </div>
    </div>
  )
}

export default Top