import React from "react";
import { useFirebase } from "react-redux-firebase";
import { Link } from "react-router-dom";

const Navbar = () => {
  const firebase = useFirebase();
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/assets/images/administrator.png"
            height="50px"
            alt="admin"
          />
        </Link>
        {/* <a className="navbar-brand" href="/">
          <img
            src="assets/images/administrator.png"
            height="50px"
            alt="admin"
          />
        </a> */}

        <div>
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item nav-item-mobile">
              <Link
                to="/student/form/"
                className="btn btn-primary mr-3 btn-navbar"
              >
                Add Student
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-a dropdown-toggle"
                to="#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                <img
                  src="/assets/images/administrator.png"
                  height="30px"
                  alt="admin_image"
                />
                <span className="ml-2 navbar-text">Super Mario</span>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/student/form/">
                  Add Student
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => firebase.logout()}
                >
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
