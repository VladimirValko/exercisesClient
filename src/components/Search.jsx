import React from 'react'

const Search = () => {
  return (
    <div className=' w-screen flex flex-col justify-center items-center text-center mt-32'>
        <h2 className='text-4xl font-black w-[600px] text-primary'>
            We have more than 1200 exercises Find your favorite one !
        </h2>
        <div className='flex gap-2 items-center justify-center mb-24 mt-12'>
        <input type="text" placeholder="Search for your favorite exercises" className="input input-bordered input-secondary w-[900px] shadow-md" />
            <button class="btn btn-outline btn-primary shadow-sm">Search</button>
        </div>
        
    </div>
  )
}

export default Search