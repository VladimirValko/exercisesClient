import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from '../utils/axios'

const Exercise = () => {
  const { id } = useParams();
  const [exerciseDetailData, setexerciseDetail] = useState({});

  console.log(exerciseDetailData);

  const addToFavorite = async () => {
    const { data } = await axios.post(
      `http://localhost:4444/exercises/exercise/${id}`,
      { ...exerciseDetailData }
    );
    console.log(data);
    window.alert("added or smthng");
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesDetail = await axios.get(
        `http://localhost:4444/exercises/exercise/${id}`
      );
      
      if(exercisesDetail.data === null) {
        exercisesDetail = await axios.get(
          `http://localhost:4444/exercises/top/${id}`
        );
      }
      console.log(exercisesDetail);
      setexerciseDetail(exercisesDetail.data);
    };
   
    fetchExerciseData();
  }, []);

  return (
    <div>
      {exerciseDetailData && (
       <div className="hero mt-20">
       <div className="hero-content flex-col lg:flex-row-reverse">
         <img
           src={exerciseDetailData.gifUrl}
           className="max-w-sm rounded-lg shadow-xl"
           alt="exercise"
         />
         <div>
           <h1 className="text-5xl font-bold capitalize">
             {exerciseDetailData.name}
           </h1>
           <p className="py-6 text-xl">{exerciseDetailData.description}</p>
           <button
             className="btn btn-primary"
             onClick={() => addToFavorite()}
           >
             Add to Favorite
           </button>
         </div>
       </div>
     </div>
   )}
 </div>
  );
};

export default Exercise;
