import React from "react";

const ExerciseCard = ({ exercise }) => {
  return (
    <div class="card w-80 bg-gray-100 shadow-xl h-[450px] relative m-8">
        <img src={exercise.gifUrl} alt={exercise.name} className='w-[400px] shadow-sm overflow-hidden'/>
      <div className="card-body">
        <h2 className=" flex font-medium justify-center text-xl capitalize  mb-2 justify-centercard-title align-middle text-center h-10">{exercise.name}</h2>
        <div className="flex gap-4 justify-start mt-4">
           <div className="badge badge-outline mt-2 ">{exercise.bodyPart}</div> 
           <div className="badge badge-outline mt-2">{exercise.target}</div>
        </div>
        <div className="card-actions justify-end ">
          <button className="btn btn-primary absolute bottom-4 right-4">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
