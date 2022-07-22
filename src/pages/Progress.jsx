import React, { useState, useEffect } from "react";
import img from "../assets/bgwoman.jpg";
import { useSelector, useDispatch } from "react-redux";
import Dumbbell from "../assets/dumbbell.png";
import {addCompletedWorkout, updateCompletedWorkout} from '../redux/workoutSlice/workout'



const Progress = () => {
  const workouts = useSelector((state) => state.workout.myWorkouts);
  const completedWorkout = useSelector((state) => state.workout.completedWorkout);
  const user = useSelector((state) => state.auth.data._id);
  const [currentWorkout, setcurrentWorkout] = useState([]);
  const [currentExercise, setcurrentExercise] = useState('')
  const [exerciseName, setExerciseName] = useState('');
  const [workoutName, setWorkoutName] = useState('')
  const [goalSets, setGoalSets] = useState(0);
  const [actualSets, setActualSets] = useState(0);
  const [goalReps, setGoalReps] = useState(0);
  const [actualReps, setActualReps] = useState(0);
  const [goalWeight, setGoalWeight] = useState(0);
  const [actualWeight, setActualWeight] = useState(0);

  useEffect(() => {
    setcurrentWorkout(workouts[0]);
    // console.log(currentWorkout, 'currentWorkout useeffect');
  }, []);

  const dispatch = useDispatch();
    // console.log(completedWorkout, 'completedWorkout');

  useEffect(() => {
    setcurrentExercise(currentWorkout[0]?.exerciseName);
    setGoalSets(currentWorkout[0]?.goalSets);
    setGoalReps(currentWorkout[0]?.goalReps);
    setGoalWeight(currentWorkout[0]?.weight);

    }, [exerciseName])




    console.log(exerciseName, workoutName, goalSets, actualSets, goalReps, actualReps, goalWeight, actualWeight);
    console.log(currentWorkout, 'currentWorkout');






    const uploadCompletedWorkoutupload = async () => {
        if(workoutName !== "Choose From Your Workouts" && exerciseName !== "Choose from Your Favorite Exercises"){
          const { data } = await dispatch(
            addCompletedWorkout({
                exerciseName, workoutName, goalSets, actualSets, goalReps, actualReps, goalWeight, actualWeight, user
            })
          );
          console.log(data, 'data');
        }
    };






  const chooseCurrentWorkout = (e) => {
    const workout = workouts.filter(
      (workout) => workout.workoutName === e.target.value
    );
    setcurrentWorkout(workout[0].myWorkout);
    setWorkoutName(workout[0].workoutName);
    console.log(workout, 'workout при смене');
    console.log(workoutName, 'workoutName при смене');

  };





  const createBlancWorkout = async () => {
    const goalSets = currentExercise?.goalSets;
    const goalReps = currentExercise?.goalReps;
    const goalWeight = currentExercise?.weight;

    console.log(goalSets, goalReps, goalWeight);

  };

  console.log(workouts);

  return (
    // INPUTS

    <div className="">
      <div className="flex justify-center">
        <div
          class="hero h-[400px] shadow-xl mt-4 w-11/12 rounded-2xl"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div class="hero-overlay bg-white bg-opacity-10"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="">
              <h1 class="mb-5 z-10 text-6xl text-white font-extrabold">
                Track Your Progress
              </h1>
              <p class="mb-5 text-gray-200">
                Create and complete your workouts, <br /> track how many sets
                and reps you planed to do and how many of them you actualy did.
              </p>
              <button 
                class="btn btn-primary"
                onClick={() => createBlancWorkout()}
                >Create completed workout</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mb-24 w-5/6">
          <div className="flex justify-center items-center text-center mt-20">
            <div className="flex justify-center items-center gap-8">
              <div className="flex flex-col">
                <div className="form-control w-[400px] max-w-xs">
                  <label className="label">
                    <span className="label-text">Сhoose Workout</span>
                  </label>
                  <select
                    className="select select-bordered capitalize"
                    onChange={(e) => chooseCurrentWorkout(e)}
                  >
                    <option defaultValue>Choose from your workouts</option>
                    {workouts?.map((workout, i) => (
                      <option key={i}>{workout.workoutName}</option>
                    ))}
                  </select>
                </div>

                <div className="form-control w-[400px] max-w-xs">
                  <label className="label">
                    <span className="label-text">Сhoose the exercise</span>
                  </label>
                  <select
                    className="select select-bordered capitalize"
                    onChange={(e) => setExerciseName(e.target.value)}
                  >
                    <option defaultValue>
                      Choose from your favorite exercises
                    </option>
                    {currentWorkout?.length &&
                      currentWorkout.map((item) => (
                        <option>{item.exerciseName}</option>
                      ))}
                  </select>
                </div>
              </div>

              <div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Choose number of Sets</span>
                  </label>
                  <label class="input-group ">
                    <input
                      type="number"
                      placeholder="Sets"
                      class="input input-bordered w-[250px]"
                      onChange={(e) => setActualSets(e.target.value)}
                    />
                    <span>SETS</span>
                  </label>
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Choose number of Reps</span>
                  </label>
                  <label class="input-group">
                    <input
                      type="number"
                      placeholder="Reps"
                      class="input input-bordered w-[250px]"
                      onChange={(e) => setActualReps(e.target.value)}
                    />
                    <span>REPS</span>
                  </label>
                </div>
              </div>

              <div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Choose weight</span>
                  </label>
                  <label class="input-group">
                    <input
                      type="number"
                      placeholder="Weight"
                      class="input input-bordered w-[230px]"
                      onChange={(e) => setActualWeight(e.target.value)}
                    />
                    <span>WEIGHT</span>
                  </label>
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    className="btn btn-outline btn-primary mt-8"
                    onClick={() => {}}
                  >
                    Add Exercise
                  </button>
                  <button
                    className="btn btn-outline btn-primary mt-8"
                    onClick={() => uploadCompletedWorkoutupload()}
                  >
                    Complete Workout
                  </button>
                </div>
              </div>
            </div>

            {/* <button
                className="btn btn-outline btn-primary mt-6"
                onClick={() => {}}
              >
                Create Workout
              </button> */}

            {/* TABLE */}

            {/* {currentWorkout ? (
              <div>
                <div className="mt-16 flex items-center justify-center gap-4  text-center pb-8 font-bold text-5xl text-gray-600">
                  <p>{currentWorkout.workoutName}</p>
                  <img src={Dumbbell} alt="dumbbell" className=" w-16" />
                </div>

                <div className="w-5/6 mx-auto ">
                  <div className="overflow-x-auto capitalize">
                    <table className="table w-full">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Target Muscle</th>
                          <th>Sets</th>
                          <th>Reps</th>
                        </tr>
                      </thead>
                      {currentWorkout.map((exercise, i) => (
                        <tbody key={i}>
                          <tr>
                            <th>{i + 1}</th>
                            <td>{exercise.exerciseName}</td>
                            <td>{exercise.target}</td>
                            <td>{exercise.goalSets}</td>
                            <td>{exercise.goalReps}</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
