import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Table_student() {
  const [student, setstudent] = useState([]);

  useEffect(() => {
    getstudent();
  }, []);

  const getstudent = async () => {
    const res = await axios.get("http://localhost:1111/student");
    // console.log(res.data);
    setstudent(res.data);
  };

  const deletestudent = async (student_id) => {
    const res = await axios.delete(
      "http://localhost:1111/student/" + student_id
    );
    alert(res.data);
    // ===call as get records
    getstudent();
  };

  return (
    <main id="main" class="main">
      <button><Link to="/Add_student">Add</Link></button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">email</th>
            <th scope="col">mobile</th>
            <th scope="col"> Actions </th>
          </tr>
        </thead>
        <tbody>
          {student.map((item, i) => (
            <tr>
              <th scope="row">{++i}</th>
              <td>{item.student_name}</td>
              <td>{item.student_email}</td>
              <td>{item.student_mobile}</td>
              <td>
                <button>
                  <Link to={"/Add_student/"+item.student_id}>Edit</Link>
                </button>
                <button onClick={() => deletestudent(item.student_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
