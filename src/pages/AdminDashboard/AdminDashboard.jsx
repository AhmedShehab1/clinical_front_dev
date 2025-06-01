import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Nav,
  Tab,
} from "react-bootstrap";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  LabelList,
} from "recharts";
import {
  BsArrowLeft,
  BsPersonFill,
  BsBuildingFill,
  BsClockFill,
  BsCurrencyDollar,
  BsExclamationTriangle,
  BsCheckCircle,
  BsInfoCircle,
} from "react-icons/bs";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState("monthly");

  // Mock data for charts
  const patientData = [
    { name: "Week 1", outpatients: 900, inpatients: 550, emergency: 230 },
    { name: "Week 2", outpatients: 950, inpatients: 580, emergency: 270 },
    { name: "Week 3", outpatients: 980, inpatients: 610, emergency: 250 },
    { name: "Week 4", outpatients: 950, inpatients: 600, emergency: 260 },
  ];

  const departmentData = [
    { name: "Cardiology", patients: 420, revenue: 45, satisfaction: 54 },
    { name: "Neurology", patients: 320, revenue: 38, satisfaction: 48 },
    { name: "Oncology", patients: 380, revenue: 42, satisfaction: 46 },
    { name: "Pediatrics", patients: 420, revenue: 49, satisfaction: 56 },
    { name: "Gynecology", patients: 350, revenue: 37, satisfaction: 52 },
  ];

  const staffEfficiencyData = [
    { name: "Week 1", doctors: 87, nursingStaff: 85, adminStaff: 78 },
    { name: "Week 2", doctors: 89, nursingStaff: 86, adminStaff: 80 },
    { name: "Week 3", doctors: 92, nursingStaff: 88, adminStaff: 82 },
    { name: "Week 4", doctors: 90, nursingStaff: 86, adminStaff: 81 },
  ];

  const alerts = [
    {
      type: "warning",
      message: "ICU bed capacity reached 90%",
      time: "35 minutes ago",
      icon: <BsExclamationTriangle className="alert-icon warning" />,
    },
    {
      type: "success",
      message: "New radiologist joined Imaging dept",
      time: "2 hours ago",
      icon: <BsCheckCircle className="alert-icon success" />,
    },
    {
      type: "info",
      message: "Maintenance scheduled for MRI-2",
      time: "3 hours ago",
      icon: <BsInfoCircle className="alert-icon info" />,
    },
    {
      type: "warning",
      message: "Medicine inventory low: Amoxicillin",
      time: "5 hours ago",
      icon: <BsExclamationTriangle className="alert-icon warning" />,
    },
  ];

  return (
    <Container fluid className="dashboard-container">
      <Row className="dashboard-header">
        <Col>
          <Button variant="link" className="back-button">
            <BsArrowLeft /> Back to Home
          </Button>
        </Col>
        <Col className="text-end">
          <div className="btn-group">
            <Button
              variant={timeRange === "weekly" ? "primary" : "outline-primary"}
              className="time-btn"
              onClick={() => setTimeRange("weekly")}
            >
              Weekly
            </Button>
            <Button
              variant={timeRange === "monthly" ? "primary" : "outline-primary"}
              className="time-btn"
              onClick={() => setTimeRange("monthly")}
            >
              Monthly
            </Button>
            <Button
              variant={timeRange === "yearly" ? "primary" : "outline-primary"}
              className="time-btn"
              onClick={() => setTimeRange("yearly")}
            >
              Yearly
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="dashboard-title">
        <Col>
          <h1>Hospital Analytics Dashboard</h1>
          <p className="date-range">May 1, 2025 - May 31, 2025</p>
        </Col>
      </Row>

      <Row className="dashboard-metrics">
        <Col md={3}>
          <Card className="metric-card">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="metric-title">Total Patients</p>
                  <h2 className="metric-value">3,421</h2>
                  <p className="metric-change positive">
                    +3.7% <span className="vs-text">vs. previous period</span>
                  </p>
                </div>
                <div className="metric-icon patients">
                  <BsPersonFill />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="metric-card">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="metric-title">Bed Occupancy</p>
                  <h2 className="metric-value">82%</h2>
                  <p className="metric-change positive">
                    +4.1% <span className="vs-text">vs. previous period</span>
                  </p>
                </div>
                <div className="metric-icon bed">
                  <BsBuildingFill />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="metric-card">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="metric-title">Average Stay</p>
                  <h2 className="metric-value">3.5 days</h2>
                  <p className="metric-change negative">
                    -0.1 days{" "}
                    <span className="vs-text">vs. previous period</span>
                  </p>
                </div>
                <div className="metric-icon stay">
                  <BsClockFill />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="metric-card">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="metric-title">Revenue</p>
                  <h2 className="metric-value">$1.2M</h2>
                  <p className="metric-change positive">
                    +8.3% <span className="vs-text">vs. previous period</span>
                  </p>
                </div>
                <div className="metric-icon revenue">
                  <BsCurrencyDollar />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="dashboard-charts">
        <Col md={6}>
          <Card className="chart-card">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <h5 className="chart-title">Patient Statistics</h5>
                <div className="chart-icon">
                  <i className="bi bi-bar-chart"></i>
                </div>
              </div>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    data={patientData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="outpatients"
                      stroke="#2F80ED"
                      fill="#2F80ED"
                      fillOpacity={0.1}
                    />
                    <Area
                      type="monotone"
                      dataKey="inpatients"
                      stroke="#7B61FF"
                      fill="#7B61FF"
                      fillOpacity={0.1}
                    />
                    <Area
                      type="monotone"
                      dataKey="emergency"
                      stroke="#F8697F"
                      fill="#F8697F"
                      fillOpacity={0.1}
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="chart-legend">
                  <span className="legend-item outpatients">
                    <span className="legend-dot"></span>Outpatients
                  </span>
                  <span className="legend-item inpatients">
                    <span className="legend-dot"></span>Inpatients
                  </span>
                  <span className="legend-item emergency">
                    <span className="legend-dot"></span>Emergency
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="chart-card">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <h5 className="chart-title">Department Performance</h5>
                <div className="chart-icon">
                  <i className="bi bi-bar-chart"></i>
                </div>
              </div>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={departmentData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis
                      yAxisId="left"
                      orientation="left"
                      tickFormatter={(value) => `${value}`}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      tickFormatter={(value) => `${value}`}
                    />
                    <Tooltip />
                    <Bar
                      yAxisId="left"
                      dataKey="patients"
                      name="Patients"
                      fill="#3182CE"
                    />
                    <Bar
                      yAxisId="left"
                      dataKey="revenue"
                      name="Revenue %"
                      fill="#38A169"
                    />
                    <Bar
                      yAxisId="right"
                      dataKey="satisfaction"
                      name="Satisfaction %"
                      fill="#805AD5"
                    />
                  </BarChart>
                </ResponsiveContainer>
                <div className="chart-legend">
                  <span className="legend-item patients">
                    <span className="legend-dot"></span>Patients
                  </span>
                  <span className="legend-item revenue">
                    <span className="legend-dot"></span>Revenue %
                  </span>
                  <span className="legend-item satisfaction">
                    <span className="legend-dot"></span>Satisfaction %
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="dashboard-bottom">
        <Col md={7}>
          <Card className="chart-card">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <h5 className="chart-title">Staff Efficiency Metrics</h5>
                <div className="chart-icon">
                  <i className="bi bi-bar-chart"></i>
                </div>
              </div>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    data={staffEfficiencyData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[60, 100]} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="doctors"
                      stroke="#7B61FF"
                      fill="#7B61FF"
                      fillOpacity={0.2}
                      activeDot={{ r: 8 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="nursingStaff"
                      stroke="#2F80ED"
                      fill="#2F80ED"
                      fillOpacity={0.2}
                    />
                    <Area
                      type="monotone"
                      dataKey="adminStaff"
                      stroke="#38A169"
                      fill="#38A169"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="staff-chart-footer">
                  <div className="chart-legend">
                    <span className="legend-item doctors">
                      <span className="legend-dot"></span>Doctors
                    </span>
                    <span className="legend-item nursing">
                      <span className="legend-dot"></span>Nursing Staff
                    </span>
                    <span className="legend-item admin">
                      <span className="legend-dot"></span>Admin Staff
                    </span>
                  </div>
                  <div className="efficiency-label">
                    Staff Efficiency Score (%)
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <Card className="alerts-card">
            <Card.Body>
              <h5 className="alerts-title">Recent Alerts</h5>
              <div className="alerts-container">
                {alerts.map((alert, index) => (
                  <div key={index} className={`alert-item ${alert.type}`}>
                    {alert.icon}
                    <div className="alert-content">
                      <p className="alert-message">{alert.message}</p>
                      <p className="alert-time">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
