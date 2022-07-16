import React from "react";

const Table = ({ exercise, i }) => {
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Target Muscle</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{i + 1}</th>
            <td>{exercise.name}</td>
            <td>{exercise.target}</td>
            <td>{exercise.goalSets}</td>
            <td>{exercise.goalRep}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
