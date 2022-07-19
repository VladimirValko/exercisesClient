import React, { useEffect, useState } from "react";
import Women from "../assets/favwomen.jpg";
import Stat from "../components/Stat";
import Dumbbell from "../assets/dumbbell.png";
import ExerciseCard from "../components/ExerciseCard";
import { selectIsAuth } from "../redux/authSlice/auth";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { useSelector } from "react-redux";
import WorkoutPlan from "../components/WorkoutPlan";
import Heart from "../assets/heart.png"
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
  const [newProgramm, setNewProgram] = useState(false)
  const data = useSelector((state) => state.auth.data);
  console.log(newProgramm);

  useEffect(() => {
    const getFavorite = async () => {
      const favoriteExercises = await axios.get(
        `http://localhost:4444/favorite`,
        data._id
      );
      setExercises(favoriteExercises.data);
    };
    getFavorite();
  }, []);

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
                Прикрутить пагинацию <br />
                добавить страницу с избранными упражнениями и возможностью их удалять<br />
                Добавить к карточке упражнений кнопку ADD <br />
                нужно удалить лишние упражнения из фаворитс оставить штук 7
                <br />
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
              {exercises.map((exercise, i) => (
                <tbody key={i}>
                  <tr>
                    <th>{i + 1}</th>
                    <td>{exercise.name}</td>
                    <td>{exercise.target}</td>
                    <td>{exercise.goalSets}</td>
                    <td>{exercise.goalRep}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>

       
        {/* <div className="flex items-center justify-center mt-10 mb-10">
          <button class="btn btn-outline btn-primary w-[250px] h-[60px]"
          onClick={() => setNewProgram(!newProgramm)}
          >
            Create NEW Workout Plan
          </button>
        </div> */}
 


        {!newProgramm ? (<div className="flex items-center justify-center mt-10 mb-10">
          <button class="btn btn-outline btn-primary w-[250px] h-[60px]"
          onClick={() => setNewProgram(!newProgramm)}
          >
            Create NEW Workout Plan
          </button>
        </div>) : <WorkoutPlan exercises={exercises}/>}

        {/* <div className="flex justify-center  gap-8 text-center mt-40">
          <p className="font-bold text-6xl text-gray-600">Your Favorite Exercises </p>
          <img src={Heart} alt="Heart" className="w-14"/>
        </div>

        <div className="flex gap-4 flex-wrap justify-center m-8">
          {exercises.map((exercise, i) => (
            <ExerciseCard
              exercise={exercise}
              key={i}
              link={`/exercises/favorite/${exercise._id}`}
            />
          ))}
        </div> */}
      </div>
    );
  } else {
    navigate("/login", { replace: true });
  }
};

export default Favorite;
