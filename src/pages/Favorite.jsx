import React, { useEffect, useState } from "react";
import Women from "../assets/favwomen.jpg";
import Stat from "../components/Stat";
import Dumbbell from "../assets/dumbbell.png";
import { selectIsAuth } from "../redux/authSlice/auth";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { useSelector, useDispatch } from "react-redux";
import WorkoutPlan from "../components/WorkoutPlan";
import { fetchWorkout } from "../redux/workoutSlice/workout";

// // for
// let sumFromFor = 0;
// for (let i = 0; i < top.length; i++) {
//   sumFromFor += Number(top[i].goalSets);
// }
// console.log("sumFromFor", sumFromFor);

// // forEach
// let sumFromForEach = 0;
// top.forEach((item) => {
//   sumFromForEach += Number(item.goalSets);
// });
// console.log("sumFromForEach", sumFromForEach);

// // reduce
// const sumFromReduce = top.reduce((sum, item) => {
//   sum += Number(item.goalSets);
//   return sum;
// }, 0);
// console.log("sumFromReduce", sumFromReduce);

const Favorite = () => {
  const [exercises, setExercises] = useState([]);
  const [workout, setWorkout] = useState([]);
  const [openCreateWorkout, setOpenCreateWorkout] = useState(false);
  const data = useSelector((state) => state.auth.data);
  const user = useSelector((state) => state.auth.data._id);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.workout.postStatus);

  const getWorkout = async () => {
    const workout = await dispatch(fetchWorkout(user));
    setWorkout(workout.payload[0].myWorkout);
  };

  useEffect(() => {
    const getFavorite = async () => {
      const favoriteExercises = await axios.get(
        `http://localhost:4444/favorite`,
        data._id
      );

      if (favoriteExercises.length === 0) {
        setOpenCreateWorkout(false);
      }
      setExercises(favoriteExercises.data);
    };

    getWorkout();
    getFavorite();
  }, []);

  useEffect(() => {
    getWorkout();
  }, [exercises, status]);

  const navigate = useNavigate();

  if (selectIsAuth) {
    return (
      <div className=" ">
        <div className="hero min-h-screen text-center">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={Women}
              alt="women"
              className="w-[500px] h-[700px] rounded-2xl shadow-lg ml-8"
            />
            <div>
              <h1 className="text-6xl font-extrabold text-gray-600">
                Create your own programm
              </h1>
              <p className="py-6">

                Добавить страницу с избранными упражнениями и возможностью их
                удалять
                <br />
                Добавить к карточке упражнений кнопку ADD <br />

                прикрутить динамическое отображение данных в фаворит имя и общие
                повторения
                <br />
                Добавить страницу со статистикой тренировок <br />
                создать скелетоны под упражнения для главной страницы
                <br />
                создать анимацию загрузки для раздела фаворитс <br />
              </p>
              {/* <button class="btn btn-primary">Get Started</button> */}
              <Stat />
            </div>
          </div>
        </div>

        {workout.length > 0 && (
          <div>
            <div className=" flex items-center justify-center gap-4  text-center pb-8 font-bold text-5xl text-gray-600">
              <p>Workout plan</p>
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
                  {workout.length
                    ? workout
                        .filter((item) => item.exerciseName.length > 0)
                        .map((exercise, i) => (
                          <tbody key={i}>
                            <tr>
                              <th>{i + 1}</th>
                              <td>{exercise.exerciseName}</td>
                              <td>{exercise.target}</td>
                              <td>{exercise.goalSets}</td>
                              <td>{exercise.goalReps}</td>
                            </tr>
                          </tbody>
                        ))
                    : null}
                </table>
              </div>
            </div>
          </div>
        )}

        {!openCreateWorkout ? (
          <div className="flex items-center justify-center mt-10 mb-10">
            <button
              class="btn btn-outline btn-primary w-[250px] h-[60px]"
              onClick={() => setOpenCreateWorkout(!openCreateWorkout)}
            >
              Create Workout Plan
            </button>
          </div>
        ) : (
          <WorkoutPlan exercises={exercises} />
        )}
      </div>
    );
  } else {
    navigate("/login", { replace: true });
  }
};

export default Favorite;
