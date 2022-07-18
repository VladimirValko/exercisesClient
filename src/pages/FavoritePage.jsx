import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";

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

              <div className="form-control w-full max-w-xs mb-4">
                <label className="label">
                  <span className="label-text">
                    How many sets ?
                  </span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div className="form-control w-full max-w-xs mb-8">
                <label className="label">
                  <span className="label-text">
                    How many reps ?
                  </span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>8</option>
                  <option>10</option>
                  <option>12</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                </select>
              </div>

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
