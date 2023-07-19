import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [admincount, setAdmincount] = useState();
  const [employeecount, setEmployeecount] = useState();
  const [salarycount, setSalarycount] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/adminCount")
      .then((res) => {
        setAdmincount(res.data[0].admin);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3001/employeeCount")
      .then((res) => {
        setEmployeecount(res.data[0].employee);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3001/salary")
      .then((res) => {
        setSalarycount(res.data[0].sumOfSalary);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="px-3 pt-5 pb-3 d-flex justify-content-around">
        <div className="p-3 border shadow-sm w-25">
          <p>Admin</p>
          <hr />
          <p>Total:{admincount}</p>
        </div>
        <div className="p-3 border shadow-sm w-25">
          <p>Employee</p>
          <hr />
          <p>Total:{employeecount}</p>
        </div>
        <div className="p-3 border shadow-sm w-25">
          <p>Salary</p>
          <hr />
          <p>Total:{salarycount}</p>
        </div>
      </div>
      <div className="mt-4 p-3">
        <h3>List of admins</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email</td>
              <td>Actions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
