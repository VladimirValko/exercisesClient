import React, { useEffect, useState } from "react";
import Women from "../assets/favwomen.jpg";
import Stat from "../components/Stat";
import Dumbbell from '../assets/dumbbell.png'
import FavoriteCard from '../components/FavoriteCard'
import { selectIsAuth } from "../redux/authSlice/auth";
import { Link, useNavigate } from "react-router-dom";
import axios from '../utils/axios';
import { useSelector } from 'react-redux';


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
  const data = useSelector(state => state.auth.data);
  console.log(data);

  useEffect(() => {
    const getFavorite = async () => {
      const favoriteExercises = await axios.get(`http://localhost:4444/favorite`, data._id);
      setExercises(favoriteExercises.data);
    }
    getFavorite();
  }, [])

  const navigate = useNavigate();

  if(selectIsAuth){
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
              <h1 class="text-6xl font-extrabold text-gray-600">Create your own programm</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                et a id nisi.
              </p>
              {/* <button class="btn btn-primary">Get Started</button> */}
              <Stat />
            </div>
          </div>
        </div>
  
        <div className=" flex items-center justify-center gap-4  text-center pb-8 font-bold text-5xl text-gray-600">
          <p>Workout plan</p>
          <img src={Dumbbell} alt='dumbbell' className=" w-10" />
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
  
        <div className="flex gap-4 flex-wrap justify-center m-8">
          {exercises.map((exercise, i) => (
              <FavoriteCard exercise={exercise} key={i} />
          ))}
        </div>
      </div>
    );
  } else {
    navigate("/login", { replace: true });
  }
  
};

export default Favorite;
