import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Employee.css";
const Employee = () => {
  const [data, setData] = useState([]);
  const id = useParams();
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND + "/getemployee")
      .then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        }
      })
      .catch((err) => console.log("Employee page", err));
  }, []);

  const handeldelete = (id) => {
    axios
      .delete(process.env.REACT_APP_BACKEND + "/delete/" + id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="py-3 px-5">
      <div className="d-flex justify-content-center">
        <h3>Employees List</h3>
      </div>
      <Link to={"/create"}>
        <button className="btn btn-success">Add Employee</button>
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>
                    <img
                      src={
                        process.env.REACT_APP_BACKEND +
                        "/images/" +
                        employee.image
                      }
                      alt=""
                      className="employee-img"
                    />
                  </td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <Link to={"/edit/" + employee.id}>
                      <button className="btn btn-primary btn-sm me-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={(e) => handeldelete(employee.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Employee;
