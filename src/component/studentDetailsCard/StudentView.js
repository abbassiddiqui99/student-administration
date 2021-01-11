import React from "react";
import Avatar from "react-avatar";
import { Link, useParams } from "react-router-dom";

const StudentView = () => {
  const { id } = useParams();
  return (
    <div className="container mt-5">
      <div className="py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow-lg">
              <div className="row">
                <div className="col-md-4 view-profile-pic mb-4">
                  <Avatar
                    name="Wim Mostmans"
                    size="180"
                    round={true}
                    color="#000"
                    style={{ margin: "auto" }}
                    className="view-profile"
                  />
                </div>
                <div className="col-md-8">
                  <ul className="list-group">
                    <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action">
                      <h3 className="m-0">STUDENT NAME</h3>
                      <Link className="btn btn-primary" to="/student/form/:id">
                        edit profile
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <p>email: STUDENT_EMAIL</p>
                      <p>phone: STUDENT_PHONE</p>
                      <p>class: STUDENT_STANDARD</p>
                      <p>address 1: STUDENT_ADDRESS1</p>
                      <p>address 2: STUDENT_ADDRESS2</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentView;
