import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Editemployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND + "/read/" + id)
      .then((res) => {
        console.log(res.data.Result);
        setData({
          ...data,
          name: res.data[0].name,
          email: res.data[0].email,
          salary: res.data[0].salary,
          address: res.data[0].address,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [data, setData] = useState({
    name: "",
    email: "",
    salary: "",
    address: "",
  });
  const handelsubmit = (e) => {
    e.preventDefault();
    axios
      .put(process.env.REACT_APP_BACKEND + "/edit/" + id, data)
      .then((res) => {
        navigate("/employee");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <h2>Updated Employee</h2>
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
            value={data.name}
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
            value={data.email}
            placeholder="Enter the email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
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
            value={data.salary}
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
            value={data.address}
            placeholder="Enter the address"
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
};
export default Editemployee;
