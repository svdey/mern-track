import React, { useState, useEffect } from "react";

import axios from "axios";
import Exercise from "./Exercise";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  const getExercises = () => {
    axios
      .get("http://localhost:5000/exercises")
      .then((res) => setExercises(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getExercises();
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data));
    setExercises(exercises.filter((el) => el._id !== id));
  };
  const exerciseListA = () => {
    return exercises.map((ex, index) => {
      return (
        <Exercise
          exercise={ex}
          deleteExercise={deleteExercise}
          key={ex._id}
          index={index++}
        />
      );
    });
  };

  return (
    <div>
      <h5>List of Exercises</h5>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseListA()}</tbody>
      </table>
    </div>
  );
};

export default ExerciseList;
