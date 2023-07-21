import Bgprofile from "../../assest/images/profile-page-bg1.jpg";
import admin from "../../assest/images/admin.jpeg";
import "./Profile.css";
import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Input,
  Upload,
  message,
  Space,
  Typography,
} from "antd";
const Profile = () => {
  const { Title } = Typography;

  const project = [
    {
      title: "Work",
      disciption:
        "As  works through a huge amount of internal management turmoil.",
    },
    {
      title: "Basic",
      disciption:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      title: "Standard",
      disciption:
        "Different people have different taste, and various types of music, Zimbali Resort",
    },
  ];
  return (
    <>
      <div
        style={{ backgroundImage: "url(" + Bgprofile + ")" }}
        className="profile-bg"
      ></div>

      <Card
        className="card-heading"
        title={
          <Row justify="space-between" align="middle">
            <Col className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={admin} />

                <div className="avatar-info">
                  <h4 className="font-semibold m-0">Oliver Liam</h4>
                  <p>Admin</p>
                </div>
              </Avatar.Group>
            </Col>
          </Row>
        }
      ></Card>
      <div className="profile">
        <Row className="admin-management">
          <Col className="mb-24 admin-management-card">
            <Card
              bordered={false}
              title={<h6 className="font-semibold m-0">User Information</h6>}
              className="header-solid h-full card-profile-information"
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              <hr className="my-10" />
              <Descriptions title="Oliver Liam">
                <Descriptions.Item label="First Name" span={3}>
                  Admin new
                </Descriptions.Item>
                <Descriptions.Item label="Last Name" span={3}>
                  Liam
                </Descriptions.Item>
                <Descriptions.Item label="Role" span={3}>
                  Admin
                </Descriptions.Item>
                <Descriptions.Item label="Email" span={3}>
                  oliverliam@Infotech.com
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col className="mb-24 admin-management-card">
            <Card
              bordered={false}
              title={
                <h6 className="font-semibold m-0">Organization Information</h6>
              }
              className="header-solid h-full card-profile-information"
              bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
            >
              <hr className="my-10" />
              <Descriptions title="Infotech">
                <Descriptions.Item label="Organization Name" span={3}>
                  Infotech
                </Descriptions.Item>
                <Descriptions.Item label="Organiztion Country" span={3}>
                  United States
                </Descriptions.Item>
                <Descriptions.Item label="Organization Domain" span={3}>
                  Infotech.com
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
        </Row>
        <Card>
          <Title level={2}>Plans</Title>
          <Row className="plan-grid">
            {project.map((p, i) => (
              <Col key={i} className="plans">
                <Card className="h-100 plan-card">
                  <Title level={2}>{p.title}</Title>
                  <p>{p.disciption}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    </>
  );
};
export default Profile;
