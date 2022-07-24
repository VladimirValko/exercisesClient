import React from 'react';
import { useSelector } from "react-redux";

const Stat = ({workouts}) => {

    const exercise = useSelector((state) => state.favorite.favorite);
    const name = useSelector((state) => state.auth.data.fullName);

    console.log(workouts);

    let sets = 0;
    let reps = 0;

    workouts?.forEach(workout => workout.myWorkout.forEach(exercise => sets += Number(exercise.goalSets)));

    workouts?.forEach(workout => workout.myWorkout.forEach(exercise => reps += Number(exercise.goalReps)));
    
  return (
    <div className="stats shadow-md flex">
  
        <div className="stat">
            <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="hidden  lg:inline-block lg:w-8 lg:h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Added to favorite</div>
            <div className="stat-value text-2xl lg:text-4xl text-primary">{exercise.length}</div>
            <div className="stat-desc">Recomended min 7</div>
        </div>
  
        <div className="stat">
            <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="hidden lg:inline-block lg:w-8 lg:h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Total Sets</div>
            <div className="stat-value text-2xl lg:text-4xl text-secondary">{sets}</div>
            <div className="stat-desc">It is {reps} total Reps</div>
        </div>
  
        <div className="stat hidden lg:flex">
            <div className="stat-figure text-secondary">
            <div className="avatar online">
                <div className="w-16 rounded-full">
                <img src="https://placeimg.com/128/128/people" />
                </div>
            </div>
            </div>
          <div className='flex mt-4 justify-center text-center align-middle items-center gap-2'>
             <div className="stat-value capitalize">{name}</div>
          </div>
        </div>
  
</div>
)}

export default Stat