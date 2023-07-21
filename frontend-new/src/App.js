import Login from "./component/Auth/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./component/Layout/sidebar/Sidebar";
import Profile from "./component/profile/Profile";
// import Home from "./component/home/Home-old";
import Employee from "./component/employee/Employee";
import AddEmployee from "./pages/employee/AddEmployee";
import Editemployee from "./pages/edit-employee/Editemployee";
import Start from "./pages/edit-employee/Start";
import EmployeeDetails from "./pages/employeeDetials/EmployeeDetails";
import EmployeeLogin from "./pages/employee-login/EmployeeLogin";
import Signup from "./component/Auth/sign-up/Signup";
import Home from "./component/dashboard/Home";
import Forgetpassword from "./component/Auth/forget-password/Forgetpassword";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forget-password" element={<Forgetpassword />}></Route>
        <Route path="/start" element={<Start />}></Route>
        <Route path="/employeelogin" element={<EmployeeLogin />}></Route>
        <Route
          path="/employeedetails/:id"
          element={<EmployeeDetails />}
        ></Route>
        <Route path="/" element={<Sidebar />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/create" element={<AddEmployee />}></Route>
          <Route path="/edit/:id" element={<Editemployee />}></Route>
          {/* <Route path="/dashboard" element={<Stats />}></Route> */}
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
