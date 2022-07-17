import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from '../utils/axios'

const Exercise = () => {
  const { id } = useParams();
  const [exerciseDetailData, setexerciseDetail] = useState({});

  const addToFavorite = async () => {
    const { data } = await axios.post(
      `http://localhost:4444/exercises/exercise/${id}`,
      exerciseDetailData
    );
    console.log(data);
    window.alert("added or smthng");
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exercisesDetail = await axios.get(
        `http://localhost:4444/exercises/favorite/${id}`
      );
      setexerciseDetail(exercisesDetail.data);
      
    };

    fetchExerciseData();
  }, []);

  return (
    <div>
      {exerciseDetailData && (
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={exerciseDetailData.gifUrl}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="exercise"
            />
            <div>
              <h1 className="text-5xl font-bold">{exerciseDetailData.name}</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => addToFavorite()}
              >
                Add to your programm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercise;
