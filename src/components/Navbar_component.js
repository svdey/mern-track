import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const newLocal = "navbar navbar-dark bg-dark navbar-expand-lg mr-auto";

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className={newLocal}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setToggle((p) => !p)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${toggle ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link nav-item">
                  Exercises
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create Exercises Log
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link">
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
