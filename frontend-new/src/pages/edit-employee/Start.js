import { useNavigate } from "react-router-dom";
import "./Start.css";
const Start = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 login-page">
      <div className="p-3 rounded border start-form text-center">
        <h2>Login</h2>
        <div className="d-flex justify-content-between mt-5">
          <button
            className="btn btn-primary btn-lg"
            onClick={(e) => navigate("/employeelogin")}
          >
            Employee
          </button>
          <button
            className="btn btn-success btn-lg"
            onClick={(e) => navigate("/login")}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};
export default Start;
