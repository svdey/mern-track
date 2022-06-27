import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateExercise = () => {
  const navigate = useNavigate();

  const [exercises, setExerxises] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  });

  useEffect(() => {
    const getUsers = () => {
      axios.get("http://localhost:5000/users").then((res) => {
        if (res.data) {
          setExerxises((ex) => ({
            ...ex,
            users: res.data.map((user) => user.username),
            username: res.data[0].username,
          }));
        }
      });
    };
    getUsers();
  }, []);

  const onChangeUsername = (e) => {
    setExerxises({ ...exercises, username: e.target.value });
  };
  const onChangeDescription = (e) => {
    setExerxises({ ...exercises, description: e.target.value });
  };
  const onChangeDuration = (e) => {
    setExerxises({ ...exercises, duration: e.target.value });
  };
  const onChangeDate = (date) => {
    setExerxises({ ...exercises, date: date });
  };

  const onSubmit = () => {
    const exercise = {
      username: exercises.username,
      description: exercises.description,
      duration: exercises.duration,
      date: exercises.date,
    };

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    navigate("/");
  };

  return (
    <>
      <div className="container">
        <form className="container  w-75">
          <h6 className="mt-5">Edit Exercise Log</h6>
          <div className="m-1">
            <label>User Name</label>
            <select
              className="form-select form-select-sm"
              value={exercises.username}
              onChange={onChangeUsername}
            >
              {exercises.users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>

          <div className="m-1">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control form-control-sm"
              onChange={onChangeDescription}
              value={exercises.description}
            />
          </div>
          <div className="m-1">
            <label className="form-label">Duration (In minutes)</label>
            <input
              type="text"
              className="form-control form-control-sm"
              onChange={onChangeDuration}
              value={exercises.duration}
            />
          </div>
          <div className="m-1">
            <label className="form-label">Date </label>
            <DatePicker selected={exercises.date} onChange={onChangeDate} />
          </div>
          <div className="m-1">
            <button
              type="button"
              className="btn btn-primary "
              onClick={onSubmit}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateExercise;
