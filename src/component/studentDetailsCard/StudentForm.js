import React, { useEffect, useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useHistory, useParams } from "react-router-dom";

const StudentForm = () => {
  const firestore = useFirestore();
  let history = useHistory();
  const { id } = useParams();
  const docRef = id ? firestore.collection("students").doc(id) : null;
  console.log(id);
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    standard: "",
    address1: "",
    address2: "",
  });

  const loadStudent = async () => {
    try {
      const result = await docRef.get();
      //   console.log(result);
      if (result.exists) {
        setStudent(result.data());
        console.log(result.data());
        console.log(student);
      } else {
        console.log("Not Found!!!!!!!");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    if (id) {
      loadStudent();
    }
  }, [id]);

  const onChangeHandler = (e) => {
    return setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (id) {
      await docRef.update({
        ...student,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      //   console.log(id);
      //   console.log("Updated");
    } else {
      firestore
        .collection("students")
        .add({ ...student, createdAt: firestore.FieldValue.serverTimestamp() });
      console.log("Added");
    }
    history.push("/");
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-profile">
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
