import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { useSelector, useDispatch } from "react-redux";
import { setWorkout, updateWorkout } from '../redux/workoutSlice/workout'

const WorkoutPlan = ({ exercises }) => { 
  const [exerciseName, setExerciseName] = useState("");
  const [goalSets, setGoalSets] = useState(1);
  const [goalReps, setGoalReps] = useState(8);
  const [weight, setWeight] = useState(0);
  const [target, setTarget] = useState('');
  const [exerciseImage, setExerciseImage] = useState("");
  const user = useSelector((state) => state.auth.data._id);
  const dispatch = useDispatch();
  const workout = useSelector((state) => state.workout.myWorkout)
   

  const onExerciseNameChange = (e) => {

    const currentExercise = exercises.filter(item => item.name === e.target.value)
    setExerciseName(e.target.value);
    changeImg(e.target.value);
    console.log(currentExercise);
    setTarget(currentExercise[0].target);
  }


  const addWorkout = async () => {
    const { data } = await axios.post(
      "http://localhost:4444/workouts",
      {goalSets, goalReps, exerciseName, weight, target, user }
    );
    console.log(data);
    console.log('было пусто добавил тренировку');
  };

  const updateWorkoutupload = async () => {
    const { data } = await dispatch(updateWorkout(
      {goalSets, goalReps, exerciseName, weight, user, target }
    ));
  }

  const changeImg = (value) => {
    const exercise = exercises?.filter((item) => item.name === value);
    const img = exercise?.[0].gifUrl;
    setExerciseImage(img);
  };

  useEffect(() => {
    if(exercises.length > 0){
      changeImg(exercises[0].name);
      setExerciseName(exercises[0].name);
      setTarget(exercises[0].target);
    }

    if(workout.length === 0){
          addWorkout()
          console.log('было пусто добавил воркаут');
        }
  }, []);

  return (
    <div className="mb-24">
      <div className="text-center text-gray-600 text-6xl font-bold mt-16 mb-8">
        {" "}
        Create Workout Plan
      </div>
      <div className="flex justify-center items-center text-center">
        <div className="flex justify-center items-center gap-24">
          <div className="flex flex-col">
            <div class="form-control w-[400px] max-w-xs">
              <label className="label">
                <span className="label-text">Сhoose the exercise</span>
              </label>
              <select
                class="select select-bordered capitalize"
                onChange={(e) => onExerciseNameChange(e)}
              >
                <option disabled>Choose from your favorite exercises</option>
                {exercises?.map((exercise, i) => (
                  <option key={i}>{exercise.name}</option>
                ))}
              </select>
            </div>

            <div class="form-control w-[400px] max-w-xs">
              <label className="label">
                <span className="label-text">Сhoose number of sets</span>
              </label>
              <select class="select select-bordered"
              onChange={(e) => setGoalSets(e.target.value)}
              >
                <option disabled>Pick one</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-control w-[400px] max-w-xs">
              <label className="label">
                <span className="label-text">Сhoose number of reps</span>
              </label>
              <select class="select select-bordered"
              onChange={(e) => setGoalReps(e.target.value)}
              required
              >
                <option disabled>Pick one</option>
                <option>8</option>
                <option>10</option>
                <option>12</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
              </select>
            </div>
            <div class="form-control mt-6">
              <div class="input-group">
                <input
                  type="number"
                  placeholder="Set weight"
                  class="input input-bordered w-48"
                  onChange={(e) => setWeight(e.target.value)}
                />
                <button class="btn btn-square w-32"
                >
                  <p>Weight</p>
                </button>
              </div>
            </div>
            <button
              class="btn btn-outline btn-primary mt-6"
              onClick={() => updateWorkoutupload()}
            >
              Add to Workout
            </button>
          </div>

          {exerciseImage && (
            <img className="w-[400px] rounded-xl shadow-md" src={exerciseImage} alt="exercise" />
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
