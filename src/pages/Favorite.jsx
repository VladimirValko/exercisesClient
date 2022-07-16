import React from "react";
import { top } from "../components/HorizontalScroll";
import Women from "../assets/favwomen.jpg";
import Stat from "../components/Stat";
import Dumbbell from '../assets/dumbbell.png'
import ExerciseCard from "../components/ExerciseCard";


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
            <h1 class="text-5xl font-extrabold text-gray-600">Create your own programm</h1>
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

      <div className=" flex items-center justify-center gap-4  text-center pb-8 font-bold text-4xl text-gray-600">
        <p>Your workout plan</p>
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
            {top.map((exercise, i) => (
              <tbody>
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
        {top.map((exercise, i) => (
          <ExerciseCard exercise={exercise} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
