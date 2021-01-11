import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const StudentCard = () => {
  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          {/* <!-- RUN LOOP HERE -->*/}
          <div className="col-lg-3 col-md-6 mb-4" key="PUT_HERE_KEY">
            <div className="card shadow text-center py-4 shadow-lg mt-5">
              {/* <!-- Profile Image  --> */}
              <Avatar
                name="Wim Mostmans"
                size="80"
                round={true}
                color="#000"
                style={{ margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title mb-0">Student Name</h5>
                <p className="text-muted small">Student E-mail</p>
                <Link
                  to="/student/view/:id"
                  className="btn btn-primary btn-profile"
                >
                  View Profile
                </Link>
                <button className="btn btn-edit">
                  <span className="material-icons">delete_outline</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
