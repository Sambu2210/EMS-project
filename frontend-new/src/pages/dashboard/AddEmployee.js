import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    image: "",
  });
  const navigate = useNavigate();

  const handelsubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("salary", data.salary);
    formdata.append("address", data.address);
    formdata.append("image", data.image);
    axios
      .post("http://localhost:3001/create", formdata)
      .then((res) => {
        navigate("/employee");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <h2>Add Employee</h2>
      <form className="row g-3 w-50" onSubmit={handelsubmit}>
        <div className="col-12">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter the name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter the email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter the password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label for="salary" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control"
            id="salary"
            placeholder="Enter the salary"
            onChange={(e) => setData({ ...data, salary: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            type="address"
            className="form-control"
            id="address"
            placeholder="Enter the address"
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <div className="col-12 mb-3">
          <label class="form-label" for="customFile">
            Select image
          </label>
          <input
            type="file"
            class="form-control"
            id="customFile"
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
};
export default AddEmployee;
