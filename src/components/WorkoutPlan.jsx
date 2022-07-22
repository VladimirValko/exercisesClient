import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  updateWorkout,
  addWorkout,
} from "../redux/workoutSlice/workout";

const WorkoutPlan = ({ exercises }) => {
  const [isNew, setNew] = useState(true);
  const [exerciseName, setExerciseName] = useState("");
  const [goalSets, setGoalSets] = useState(1);
  const [goalReps, setGoalReps] = useState(8);
  const [weight, setWeight] = useState(0);
  const [target, setTarget] = useState("");
  const [workoutName, setWorkoutName] = useState("New Workout");
  const [exerciseImage, setExerciseImage] = useState("");
  const user = useSelector((state) => state.auth.data._id);
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workout.myWorkouts) || [];

  console.log({
    goalSets,
    goalReps,
    exerciseName,
    weight,
    target,
    user,
    workoutName,
  });

  const onExerciseNameChange = (e) => {
    const currentExercise = exercises.filter(
      (item) => item.name === e.target.value
    );
    setExerciseName(e.target.value);
    changeImg(e.target.value);
    console.log(currentExercise);
    setTarget(currentExercise[0].target);
  };

  const addNewWorkout = async () => {
    setWorkoutName("New workout");
    if(exerciseName !== "Choose from Your Favorite Exercises"){
      const { data } = await dispatch(
        addWorkout({
          goalSets,
          goalReps,
          exerciseName,
          weight,
          target,
          user,
          workoutName,
        })
      )
      console.log(data);
    };
    console.log("было пусто добавил тренировку");
    setNew(!isNew)
  };

  const updateWorkoutupload = async () => {
    if(workoutName !== "Choose From Your Workouts" && exerciseName !== "Choose from Your Favorite Exercises"){
      const { data } = await dispatch(
        updateWorkout({
          goalSets,
          goalReps,
          exerciseName,
          weight,
          user,
          target,
          workoutName,
        })
      );
      console.log(data);
    }
    setNew(!isNew)
  };

  const changeImg = (value) => {
    const exercise = exercises?.filter((item) => item.name === value);
    const img = exercise?.[0].gifUrl;
    setExerciseImage(img);
  };

  useEffect(() => {
    if (exercises.length > 0) {
      setTarget(exercises[0].target);
    }
  }, []);

  return (
    <div className="mb-24">
      <div className="flex justify-center items-center">
        <button
          className="btn btn-outline btn-primary mt-6"
          onClick={() => setNew(!isNew)}
        >
          {!isNew ? <p>Create New Workout</p> : <p>Update Workout</p>}
        </button>
      </div>
      <div className="text-center text-gray-600 text-6xl font-bold mt-16 mb-8">
        Create Workout Plan
      </div>
      <div className="flex justify-center items-center text-center">
        <div className="flex justify-center items-center gap-24">
          <div className="flex flex-col">
            {!workouts.length || isNew ? (
              <div>
                <label className="label">
                  <span className="label-text">Name your workout</span>
                </label>
                <input
                  type="text"
                  placeholder="Workout Name"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setWorkoutName(e.target.value)}
                />
              </div>
            ) : (
              <div className="form-control w-[400px] max-w-xs">
                <label className="label">
                  <span className="label-text">Сhoose Workout</span>
                </label>
                <select
                  className="select select-bordered capitalize"
                  onChange={(e) => setWorkoutName(e.target.value)}
                >
                  <option defaultValue>Choose from your workouts</option>
                  {workouts?.map((workout, i) => (
                    <option key={i}>{workout.workoutName}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-control w-[400px] max-w-xs">
              <label className="label">
                <span className="label-text">Сhoose the exercise</span>
              </label>
              <select
                className="select select-bordered capitalize"
                onChange={(e) => onExerciseNameChange(e)}
              >
                <option defaultValue>Choose from your favorite exercises</option>
                {exercises?.map((exercise, i) => (
                  <option key={i}>{exercise.name}</option>
                ))}
              </select>
            </div>

            <div className="form-control w-[400px] max-w-xs">
              <label className="label">
                <span className="label-text">Сhoose number of sets</span>
              </label>
              <select
                className="select select-bordered"
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
            <div className="form-control w-[400px] max-w-xs">
              <label className="label">
                <span className="label-text">Сhoose number of reps</span>
              </label>
              <select
                className="select select-bordered"
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
            <div className="form-control mt-6">
              <div className="input-group">
                <input
                  type="number"
                  placeholder="Set weight"
                  className="input input-bordered w-48"
                  onChange={(e) => setWeight(e.target.value)}
                />
                <button className="btn btn-square w-32">
                  <p>Weight</p>
                </button>
              </div>
            </div>
            {!workouts.length || isNew ? (
              <button
                className="btn btn-outline btn-primary mt-6"
                onClick={() => addNewWorkout()}
              >
                Create Workout
              </button>
            ) : (
              <button
                className="btn btn-outline btn-primary mt-6"
                onClick={() => updateWorkoutupload()}
              >
                Add to Workout
              </button>
            )}
          </div>

          {exerciseImage && (
            <img
              className="w-[480px] rounded-xl shadow-md"
              src={exerciseImage}
              alt="exercise"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
