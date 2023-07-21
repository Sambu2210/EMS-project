import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // const backend = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const [error, setError] = useState("");
  const handelsubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BACKEND + "/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 login-page">
      <div className="p-3 rounded border login-form">
        <div className="text-danger">{error && error}</div>
        <h2>Admin Login</h2>
        <form className="login-input" onSubmit={handelsubmit}>
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
          <div className="mb-4">
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

          <button
            type="submit"
            className="btn btn-success w-100 rounder-0 mb-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
