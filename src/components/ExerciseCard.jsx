import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise, link }) => {
  return (
    <div class="card w-80 bg-gray-100 shadow-xl h-[500px] m-8">
        <Link to={link}>
        <img src={exercise.gifUrl} alt={exercise.name} className='w-[400px] shadow-sm overflow-hidden'/>
      <div className="card-body">
        <h2 className=" flex font-medium justify-center text-xl capitalize  mb-2 justify-centercard-title align-middle text-center h-10">{exercise.name}</h2>
        <div className="flex gap-4 justify-center mt-4">
           <div className="badge badge-outline mb-8 ">{exercise.bodyPart}</div> 
           <div className="badge badge-outline mb-8">{exercise.target}</div>
        </div>
        <div className="card-actions justify-end ">
          {/* <button className="btn btn-primary absolute bottom-4 right-4"></button> */}
        </div>
      </div>
        </Link>
    </div>
  );
};

export default ExerciseCard;
