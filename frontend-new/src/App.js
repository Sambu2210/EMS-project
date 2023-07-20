import Login from "./component/Auth/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./component/Layout/sidebar/Sidebar";
import Profile from "./component/profile/Profile";
import Home from "./component/home/Home";
import Employee from "./component/employee/Employee";
import AddEmployee from "./pages/dashboard/AddEmployee";
import Editemployee from "./pages/edit-employee/Editemployee";
import Start from "./pages/edit-employee/Start";
import EmployeeDetails from "./pages/employeeDetials/EmployeeDetails";
import EmployeeLogin from "./pages/employee-login/EmployeeLogin";
import Signup from "./component/Auth/sign-up/Signup";
import Stats from "./component/dashboard/Stats";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route path="" element={<Home />}></Route>
            <Route path="/employee" element={<Employee />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/create" element={<AddEmployee />}></Route>
            <Route path="/edit/:id" element={<Editemployee />}></Route>
            <Route path="/dashboard" element={<Stats />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/start" element={<Start />}></Route>
          <Route path="/employeelogin" element={<EmployeeLogin />}></Route>
          <Route
            path="/employeedetails/:id"
            element={<EmployeeDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
