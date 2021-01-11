import React, { useState } from "react";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import Loading from "../layout/Loading";

const StudentCard = () => {
  const firestore = useFirestore();
  const students = useSelector((state) => state.firestore.ordered.students);
  // console.log(students);
  useFirestoreConnect([
    { collection: "students", orderBy: ["createdAt", "desc"] },
  ]);
  if (!students) {
    return <Loading />;
  }

  const deleteStudentHandler = async (id) => {
    try {
      await firestore.collection("students").doc(id).delete();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          {/* <!-- RUN LOOP HERE -->*/}
          {students.map((student) => (
            <div className="col-lg-3 col-md-6 mb-4" key={student.id}>
              <div className="card shadow text-center py-4 shadow-lg mt-5">
                <Avatar
                  name={student.name}
                  size="80"
                  round={true}
                  color="#000"
                  style={{ margin: "auto" }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">{student.name}</h5>
                  <p className="text-muted small">{student.email}</p>
                  <Link
                    to={`/student/view/${student.id}`}
                    className="btn btn-primary btn-profile"
                  >
                    View Profile
                  </Link>
                  <button
                    className="btn btn-edit"
                    onClick={() => {
                      deleteStudentHandler(student.id);
                    }}
                  >
                    <span className="material-icons">delete_outline</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
