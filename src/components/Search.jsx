import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import ExerciseCard from './ExerciseCard';

const Search = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  console.log(exercises);
  console.log(search);

  const handleSearch = async () => {
    if(search) {
      const exercises = await axios.get(`http://localhost:4444/exercises/${search}`);

      const searchedExercises = exercises.data.filter(
      (exercise) =>
      exercise.name.toLowerCase().includes(search) ||
      exercise.target.toLowerCase().includes(search) ||
      exercise.equipment.toLowerCase().includes(search) ||
      exercise.bodyPart.toLowerCase().includes(search)
      )

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <div className=' w-screen flex flex-col justify-center items-center text-center mt-32'>
        <h2 className='text-4xl font-black w-[600px] text-primary'>
            We have more than 1200 exercises Find your favorite one !
        </h2>
        <div className='flex gap-2 items-center justify-center mb-24 mt-12'>
        <input
         type="text" 
         placeholder="Search for your favorite exercises" 
         className="input input-bordered input-secondary w-[900px] shadow-md" 
         onChange={(e) => {setSearch(e.target.value.toLocaleLowerCase())}}
         />
            <button onClick={() => handleSearch()} class="btn btn-outline btn-primary shadow-sm">Search</button>
        </div>
        <div className='flex flex-wrap gap-4 justify-center items-center'>
        {exercises && exercises.map((exercise, i) => (
          <ExerciseCard exercise={exercise} key={i} link={`/exercises/exercise/${exercise._id}`}/>
        ))}
        </div>
    </div>
  )
}

export default Search