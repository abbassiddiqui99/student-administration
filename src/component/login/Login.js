import React, { useState } from "react";
import Avatar from "react-avatar";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const firebase = useFirebase();
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await firebase.login(user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="py-5">
        <div className="row mt-5 d-flex justify-content-center ">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <div className="login-image">
                  <Avatar
                    name="A D M I N"
                    size="120"
                    round={true}
                    color="#000"
                    style={{ margin: "auto" }}
                  />
                </div>
                <form onSubmit={(e) => onSubmitHandler(e)}>
                  <div className="form-group">
                    <input
                      name="email"
                      placeholder="Enter Your E-mail"
                      value={user.email}
                      onChange={onChangeHandler}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      value={user.password}
                      onChange={onChangeHandler}
                      className="form-control"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-navbar"
                  >
                    Login to dashboard
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
