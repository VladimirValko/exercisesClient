import React, { useEffect, useState } from "react";
import Women from "../assets/favwomen.jpg";
import Stat from "../components/Stat";
import Dumbbell from "../assets/dumbbell.png";
import { selectIsAuth } from "../redux/authSlice/auth";
import { useNavigate } from "react-router-dom";
import { fetchFavorite } from "../redux/favoriteSlice/favorite";
import { useSelector, useDispatch } from "react-redux";
import WorkoutPlan from "../components/WorkoutPlan";
import { fetchWorkout } from "../redux/workoutSlice/workout";
import ExerciseCard from "../components/ExerciseCard";
import axios from "../utils/axios";
import Favorits from '../assets/favorits.png'


const Favorite = () => {
  const [workouts, setWorkouts] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [openCreateWorkout, setOpenCreateWorkout] = useState(false);
  const data = useSelector((state) => state.auth.data);
  const user = useSelector((state) => state.auth.data._id);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.workout.postStatus);
  const exercises = useSelector((state) => state.favorite.favorite);

  console.log(workouts.length);

  const getWorkout = async () => {
    const fetchedWorkout = await dispatch(fetchWorkout(user));
    console.log(fetchedWorkout.payload);
    setWorkouts(fetchedWorkout.payload);
  };

  useEffect(() => {
    const getFavorite = async () => {
      const favoriteExercises = await dispatch(fetchFavorite(data._id));

      if (favoriteExercises.payload.length === 0) {
        setOpenCreateWorkout(false);
      }
    };

    getFavorite();
    getWorkout();
  }, [deleted]);

  useEffect(() => {
    getWorkout();
  }, [status]);

  const navigate = useNavigate();

  const onClickCard = (link) => {
    navigate(`/exercises/favorite/${link}`);
  };

  const removeFromFavorite = async (exercise) => {
    await axios.delete(
      `http://localhost:4444/exercises/exercise/${exercise._id}`,
      exercise._id 
      );
      setDeleted(!deleted)
      window.alert("Exercise was deleted from your favorits");
  };

  if (selectIsAuth) {
    return (
      // ХЕРО БАНЕР И СТАТИСТИКА

      <div className="max-w-[1440px] mx-auto ">
        <div className="mt-8 lg:mt-0 hero w-screen 2xl:w-[1440px] text-center">
          <div className="hero-content mx-auto items-center justify-center  flex-col lg:flex-row-reverse">
            <img
              src={Women}
              alt="women"
              className="hidden lg:flex lg:w-[500px] lg:h-[700px] rounded-2xl shadow-lg lg:ml-8"
            />
            <div className="flex flex-col items-center lg:w-1/2">
              <h1 className=" justify-center lg:w-[500px] text-5xl lg:text-6xl font-extrabold text-gray-600 mb-4">
                Create your own programs
              </h1>
              <div className="mb-4 text-lg w-4/5">
                  Find the most interesting exercises, add them to Your favorite and then, combine them in to Your own workouts! <br />
                  On this page You can create and update Your workouts. <br />
                  Also, Your favorite exercises are down below.
              </div>
              <div className=" flex justify-center">
              <Stat workouts={workouts} />
              </div>
            </div>
          </div>
        </div>

        

        {workouts &&
          workouts.map((workout) => (
            <div>

            {/* ЗАГОЛОВАОК ТРЕНИРОВКИ */}

              <div className="mt-16 flex items-center justify-center gap-4  text-center pb-8 font-bold text-3xl lg:text-5xl text-gray-600">
                <p>{workout.workoutName}</p>
                <img src={Dumbbell} alt="dumbbell" className="hidden lg:block w-16" />
              </div>

            {/* ТАБЛИЦА */}

            <div className="flex justify-center lg:text-xl">
            <div className="w-5/6 text-sm lg:w-5/6 shadow-md rounded-md">
                <div className="overflow-x-auto capitalize">
                  <table className="table-compact  md:table w-full text-center ">
                    <thead>
                      <tr>
                        <th ></th>
                        <th className="text-left">Name</th>
                        <th className="xs:hidden">Target Muscle</th>
                        <th>Sets</th>
                        <th>Reps</th>
                      </tr>
                    </thead>
                    {workout &&
                      workout.myWorkout
                        .filter((item) => item.exerciseName.length > 0)
                        .map((exercise, i) => (
                          <tbody key={i}>
                            <tr>
                              <th>{i + 1}</th>
                              <td className="text-left">
                                {exercise.exerciseName}
                              </td>
                              <td className="xs:hidden">{exercise.target}</td>
                              <td>{exercise.goalSets}</td>
                              <td>{exercise.goalReps}</td>
                            </tr>
                          </tbody>
                        ))}
                  </table>
                </div>
              </div>


            </div>

            </div>
          ))} 

        {/* ДОБАВЛЕНИЕ НОВОГО ПЛАНА ТРЕНИРОВКИ */}

        {!openCreateWorkout ? (
          <div className="flex items-center justify-center mt-10 mb-10">
            <button
              className="btn btn-outline btn-primary w-[250px] h-[60px]"
              onClick={() => setOpenCreateWorkout(!openCreateWorkout)}
            >
              Edit Workouts
            </button>
          </div>
        ) : (
          <WorkoutPlan exercises={exercises} />
        )}

        {/* СПИСОК ЛЮБИМЫХ УПРАЖНЕНИЙ */}

        <div className="mt-24">
          <div className="flex justify-center">
            <img className="w-[110px]"  src={Favorits} alt="exercises" />
          </div>
          <div>
            <p className="text-center text-gray-600 font-extrabold text-5xl lg:text-6xl mt-8 ">
              Your Favorite Exercises
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {exercises?.map((item, i) => (
              <div className="carousel-item">
                <ExerciseCard
                  // onClick={() => onClickCard(item._id)}
                  exercise={item}
                  key={i}
                  className="m-10"
                  action={removeFromFavorite}
                  text={"Remove from favorite"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    navigate("/login", { replace: true });
  }
};

export default Favorite;
