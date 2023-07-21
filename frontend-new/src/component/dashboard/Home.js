import { React, useEffect, useState } from "react";
import { Card, Col, Row, Typography } from "antd";
import LineChart from "./Linechart/Linechart";
import Echart from "./Echart/Echart";
import axios from "axios";
import "./Home.css";

function Home() {
  const { Title } = Typography;

  const [admincount, setAdmincount] = useState();
  const [employeecount, setEmployeecount] = useState();
  const [salarycount, setSalarycount] = useState();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND + "/adminCount")
      .then((res) => {
        setAdmincount(res.data[0].admin);
      })
      .catch((err) => console.log(err));
    axios
      .get(process.env.REACT_APP_BACKEND + "/employeeCount")
      .then((res) => {
        setEmployeecount(res.data[0].employee);
      })
      .catch((err) => console.log(err));
    axios
      .get(process.env.REACT_APP_BACKEND + "/salary")
      .then((res) => {
        setSalarycount(res.data[0].sumOfSalary);
      })
      .catch((err) => console.log(err));
  }, []);

  const count = [
    {
      title: "Total Employees",
      value: "11",
    },
    {
      title: "Employee work presentage",
      value: "82.1%",
    },
    {
      title: "Salary",
      value: "200000",
    },
  ];

  const menuStyle = {
    backgroundColor: "#EAF6F6",
    color: "#000",
    borderRadius: "10px",
    fontWeight: "600",
    width: "100%",
    height: "50px",
  };
  return (
    <>
      <Row className="d-block justify-content-center mt-3 home-page">
        <Col className="w-100">
          <Row className="home-page-row">
            <Col xs={24} md={8} lg={8}>
              <Card>
                <div className="number">
                  <Title level={5} className="m-0">
                    Admin
                  </Title>
                  <Title level={3} className="m-0">
                    {admincount}
                  </Title>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8} lg={8}>
              <Card>
                <div className="number">
                  <Title level={5} className="m-0">
                    Employee
                  </Title>
                  <Title level={3} className="m-0">
                    {employeecount}
                  </Title>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8} lg={8}>
              <Card>
                <div className="number">
                  <Title level={5} className="m-0">
                    Employee salary
                  </Title>
                  <Title level={3} className="m-0">
                    {salarycount}
                  </Title>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Echart */}

          <Row className="d-flex justify-content-center mt-3 chart-component">
            <Col className="w-50 chart">
              <Card>
                <LineChart />
              </Card>
            </Col>
            <Col className="w-50 chart">
              <Card>
                <Echart />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default Home;
