import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handelsubmit = (e) => {
    // e.preventDefault();
    // axios
    //   .post("http://localhost:3001/login/", values)
    //   .then((res) => {
    //     if (res.data.Status === "Success") {
    //       navigate("/login");
    //     } else {
    //       setError(res.data.Error);
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 signup-page">
      <div className="p-3 rounded border signup-form">
        <h2>Sign Up</h2>

        <form className="signup-input" onSubmit={handelsubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword">
              <strong>Confirm Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter confirm password"
              name="cpassword"
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({ ...values, cpassword: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounder-0">
            Singup
          </button>

          <p className="text-center mt-4">
            Already have an account ?{" "}
            <Link to={"/employeelogin"} className="login-anchor">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Signup;
