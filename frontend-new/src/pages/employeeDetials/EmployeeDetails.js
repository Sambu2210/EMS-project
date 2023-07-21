import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND + "/read/" + id)
      .then((res) => {
        setEmployee(res.data.Result[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  const handelLogout = () => {
    axios
      .get(process.env.REACT_APP_BACKEND + "/logout")
      .then((res) => {
        navigate("/start");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex justify-conten-center flex-column align-items-center mt-3">
      <img
        src={process.env.REACT_APP_BACKEND + "/images/" + employee.image}
        className="empImg"
      />
      <div className="d-flex align-items-center flex-column mt-5">
        <h3>Name:{employee.name}</h3>
        <h3>Email:{employee.email}</h3>
        <h3>Salary:{employee.salary}</h3>
      </div>
      <div>
        {/* <button className="btn btn-primary me-2">Edit</button> */}
        <button className="btn btn-danger " onClick={handelLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};
export default EmployeeDetails;
