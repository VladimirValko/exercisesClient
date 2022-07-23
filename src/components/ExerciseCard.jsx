import React from "react";
import axios from '../utils/axios'

const ExerciseCard = ({ exercise, onClick, action, text }) => {

  return (
    <div class="card w-80 bg-gray-100 shadow-xl h-[500px] m-8">
        <img src={exercise.gifUrl} alt={exercise.name} className='w-[400px] shadow-sm overflow-hidden cursor-pointer'
        onClick={() => onClick()}/>
      <div className="card-body">
        <h2 className=" flex flex-col mb-4 font-semibold justify-center text-2xl capitalize justify-centercard-title align-middle text-center h-10">{exercise.name}</h2>
        <div className="flex gap-4 justify-center">
           <div className="badge badge-outline mb-4 ">{exercise.bodyPart}</div> 
           <div className="badge badge-outline mb-4">{exercise.target}</div>
        </div>
        <div className="card-actions justify-center ">
        <button 
        class="btn btn-outline btn-primary btn-sm"
        onClick={() => action(exercise)}
        >{text}</button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
