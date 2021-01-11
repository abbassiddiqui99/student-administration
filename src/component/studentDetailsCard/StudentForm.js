import React, { useState } from "react";
import { useParams } from "react-router-dom";

const StudentForm = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    standard: "",
    address1: "",
    address2: "",
  });

  const onChangeHandler = (e) => {
    return setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (id) {
      console.log(id);
      console.log("Updated");
    } else {
      console.log("Added");
    }
  };

  return (
    <div className="container mt-5">
      <div className="py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow">
              <form onSubmit={submitFormHandler}>
                <div className="form-row form-group mb-4">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="Enter Student Name"
                      name="name"
                      value={student.name}
                      onChange={onChangeHandler}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Enter Student E-mail"
                      name="email"
                      value={student.email}
                      onChange={onChangeHandler}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row form-group mb-4">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="Enter Student Phone"
                      name="phone"
                      value={student.phone}
                      onChange={onChangeHandler}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Enter Student Class"
                      name="standard"
                      value={student.standard}
                      onChange={onChangeHandler}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-row form-group">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="Enter Student Address Line 1"
                      name="address1"
                      value={student.address1}
                      onChange={onChangeHandler}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Enter Student Line 2"
                      name="address2"
                      value={student.address2}
                      onChange={onChangeHandler}
                      className="form-control"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  {id ? "Update" : "Add Student"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
