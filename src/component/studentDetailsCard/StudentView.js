import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { useFirestore } from "react-redux-firebase";
import { Link, useParams } from "react-router-dom";
import Loading from "../layout/Loading";

const StudentView = () => {
  const firestore = useFirestore();
  const { id } = useParams();
  //   console.log(id);
  const [student, setStudent] = useState(null);

  const loadStudent = async () => {
    try {
      const docRef = firestore.collection("students").doc(id);
      const result = await docRef.get();
      //   console.log(result);
      if (result.exists) {
        setStudent(result.data());
        // console.log(result.data());
        // console.log(student);
      } else {
        console.log("Not Found!!!!!!!");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    loadStudent();
  }, []);

  if (!student) {
    return <Loading />;
  }

  return (
    <div className="container mt-5">
      <div className="py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow-lg">
              <div className="row">
                <div className="col-md-4 view-profile-pic mb-4">
                  <Avatar
                    name={student.name}
                    size="180"
                    round={true}
                    color="#000"
                    style={{ margin: "auto" }}
                  />
                </div>
                <div className="col-md-8">
                  <ul className="list-group">
                    <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action">
                      <h3 className="m-0">{student.name}</h3>
                      <Link
                        className="btn btn-primary btn-navbar"
                        to={`/student/form/${id}`}
                      >
                        edit profile
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <p>{`email: ${student.email}`}</p>
                      <p>{`phone: ${student.phone}`}</p>
                      <p>{`class: ${student.standard}`}</p>
                      <p>{`address 1: ${student.address1}`}</p>
                      <p>{`address 2: ${student.address2}`}</p>
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
