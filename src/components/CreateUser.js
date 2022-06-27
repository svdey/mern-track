import React from "react";
import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [user, setUser] = useState({ username: "" });

  const handleUser = (e) => setUser({ username: e.target.value });

  const onSubmit = () => {
    const userdata = user;
    console.log(userdata);
    axios
      .post("http://localhost:5000/users/add", userdata)
      .then((res) => console.log(res.data));
  };
  return (
    <div className="container">
      <form className="container  w-75">
        <h5 className="mt-5">Create User</h5>
        <div className="m-1">
          <label className="form-label">Add new User</label>
          <input
            type="text"
            className="form-control form-control-sm"
            onChange={handleUser}
            value={user.username}
          />
        </div>
        <div className="m-2">
          <button type="button" className="btn btn-primary " onClick={onSubmit}>
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
