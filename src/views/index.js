import React, { Fragment, useEffect } from "react";
import { Col, Container, Dropdown, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

//apexcharts
import Chart from "react-apexcharts";

//flatpickr
import Flatpickr from "react-flatpickr";

// Img
import img from "../assets/images/user/11.png";
import user1 from "../assets/images/user/01.jpg";
import user2 from "../assets/images/user/02.jpg";
import user3 from "../assets/images/user/03.jpg";
import user4 from "../assets/images/user/04.jpg";
import user5 from "../assets/images/user/05.jpg";
import user6 from "../assets/images/user/06.jpg";
import user7 from "../assets/images/user/07.jpg";
import user8 from "../assets/images/user/08.jpg";
import user9 from "../assets/images/user/09.jpg";
import user10 from "../assets/images/user/10.jpg";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// eslint-disable-next-line camelcase
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

const Index = () => {
  const bgImg = require("../assets/images/page-img//38.jpg");

  const chart1 = {
    options: {
      chart: {
        height: 340,
        type: "area",
      },
      colors: ["#089bab"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  };

  const chart2 = {
    options: {
      chart: {
        type: "line",
        // height: 350,
        // animations: {
        //   enabled: true,
        //   dynamicAnimation: {
        //     speed: 1000
        //   }
        // },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#089bab"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    series: [
      {
        name: "series1",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
  };

  const chart3 = {
    options: {
      chart: {
        type: "line",
        // height: 350,
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#fc9f5b"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    series: [
      {
        name: "series1",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
  };

  useEffect(() => {
    if (document.querySelectorAll("#home-chart-03").length) {
      am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        const chart = am4core.create("home-chart-03", am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0;

        chart.data = [
          {
            country: "USA",
            value: 401,
          },
          {
            country: "India",
            value: 300,
          },
          {
            country: "Australia",
            value: 200,
          },
          {
            country: "Brazil",
            value: 100,
          },
        ];
        chart.rtl = true;
        chart.radius = am4core.percent(70);
        chart.innerRadius = am4core.percent(40);
        chart.startAngle = 180;
        chart.endAngle = 360;

        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "country";
        series.colors.list = [
          am4core.color("#089bab"),
          am4core.color("#2ca5b2"),
          am4core.color("#faa264"),
          am4core.color("#fcb07a"),
        ];

        series.slices.template.cornerRadius = 0;
        series.slices.template.innerCornerRadius = 0;
        series.slices.template.draggable = true;
        series.slices.template.inert = true;
        series.alignLabels = false;

        series.hiddenState.properties.startAngle = 90;
        series.hiddenState.properties.endAngle = 90;

        chart.legend = new am4charts.Legend();
      });
    }
    return () => {};
  }, []);

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Row>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body">
                    <div className="iq-progress-bar progress-bar-vertical iq-bg-primary progress">
                      <span
                        className="bg-primary"
                        data-percent="70"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "70%" }}
                      ></span>
                    </div>
                    <span className="line-height-4">10 feb, 2020</span>
                    <h4 className="mb-2 mt-2">Hypertensive Crisis</h4>
                    <p className="mb-0 text-secondary line-height">
                      Ongoing treatment
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card iq-card-block iq-card-height">
                  <div className="iq-card-body">
                    <div className="iq-progress-bar progress-bar-vertical iq-bg-danger progress">
                      <span
                        className="bg-danger"
                        data-percent="50"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "50%" }}
                      ></span>
                    </div>
                    <span className="line-height-4">12 Jan, 2020</span>
                    <h4 className="mb-2 mt-2">Osteoporosis</h4>
                    <p className="mb-0 text-secondary line-height">Incurable</p>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body">
                    <div className="iq-progress-bar progress-bar-vertical iq-bg-warning progress">
                      <span
                        className="bg-warning"
                        data-percent="80"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></span>
                    </div>
                    <span className="line-height-4">15 feb, 2020</span>
                    <h4 className="mb-2 mt-2">Hypertensive Crisis</h4>
                    <p className="mb-0 text-secondary line-height">
                      Examination
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card iq-card-block iq-card-height">
                  {/* <div className="iq-card-body P-0 rounded" style={{ background: `url(${bgImg} no-repeat scroll center center)`,backgroundSize:'contain',minHeight:'146px'}}> */}
                  <div
                    className="iq-card-body P-0 rounded"
                    style={{
                      background: `url(${bgImg}) no-repeat scroll center center`,
                      backgroundSize: "contain",
                      minHeight: "127px",
                    }}
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg="4">
            <div className="iq-card iq-user-profile-block">
              <div className="iq-card-body">
                <div className="user-details-block">
                  <div className="user-profile text-center">
                    <img
                      src={img}
                      alt="profile-img"
                      className="avatar-130 img-fluid"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <h4>
                      <b>Bini Jets</b>
                    </h4>
                    <p>Doctor</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In in arcu turpis. Nunc
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Assign
                    </Link>
                  </div>
                  <hr />
                  <ul className="doctoe-sedual d-flex align-items-center justify-content-between p-0">
                    <li className="text-center">
                      <h3 className="counter">4500</h3>
                      <span>Operations</span>
                    </li>
                    <li className="text-center">
                      <h3 className="counter">3.9</h3>
                      <span>Medical Rating</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="8">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Health Curve</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Chart
                  options={chart1.options}
                  series={chart1.series}
                  type="area"
                  height="350"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Nearest Treatment</h4>
                </div>
              </div>
              <div className="iq-card-body smaill-calender-home">
                <Flatpickr
                  className="d-none"
                  options={{ inline: true, minDate: "today" }}
                />
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="iq-card">
              <div className="iq-card-body">
                <h6>APPOINTMENTS</h6>
                <h3>
                  <b>5075</b>
                </h3>
              </div>

              <div className="wave-chart-container" style={{ height: 80 }}>
                <Chart
                  options={chart2.options}
                  series={chart2.series}
                  type="area"
                  height={80}
                />
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-body">
                <h6>NEW PATIENTS</h6>
                <h3>
                  <b>1200</b>
                </h3>
              </div>
              <div className="wave-chart-container" style={{ height: 80 }}>
                <Chart
                  options={chart3.options}
                  series={chart3.series}
                  type="area"
                  height={80}
                />
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Hospital Management</h4>
                </div>
              </div>
              <div className="iq-card-body hospital-mgt">
                <div className="progress mb-4" style={{ height: "30px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    OPD
                  </div>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    80%
                  </div>
                </div>
                <div className="progress mb-4" style={{ height: "30px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Treatment
                  </div>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    70%
                  </div>
                </div>
                <div className="progress mb-4" style={{ height: "30px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Laboratory Test
                  </div>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
                <div className="progress mb-4" style={{ height: "30px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    New Patient
                  </div>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    70%
                  </div>
                </div>
                <div className="progress mb-4" style={{ height: "30px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "35%" }}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Doctors
                  </div>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "65%" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    95%
                  </div>
                </div>
                <div className="progress" style={{ height: "30px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "28%" }}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Discharge
                  </div>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    35%
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Patient Progress</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="patient-progress m-0 p-0">
                  <li className="d-flex mb-3 align-items-center">
                    <div className="media-support-info">
                      <h6>Bud Jet</h6>
                    </div>
                    <span className="badge badge-primary">30%</span>
                  </li>
                  <li className="d-flex mb-3 align-items-center">
                    <div className="media-support-info">
                      <h6>Barney Cull</h6>
                    </div>
                    <span className="badge badge-success">70%</span>
                  </li>
                  <li className="d-flex mb-3 align-items-center">
                    <div className="media-support-info">
                      <h6>Eric Shun</h6>
                    </div>
                    <span className="badge badge-danger">15%</span>
                  </li>
                  <li className="d-flex mb-3 align-items-center">
                    <div className="media-support-info">
                      <h6>Rick Shaw</h6>
                    </div>
                    <span className="badge badge-warning">55%</span>
                  </li>
                  <li className="d-flex mb-3 align-items-center">
                    <div className="media-support-info">
                      <h6>Ben Effit</h6>
                    </div>
                    <span className="badge badge-info">45%</span>
                  </li>
                  <li className="d-flex mb-3 align-items-center">
                    <div className="media-support-info">
                      <h6>Rick Shaw</h6>
                    </div>
                    <span className="badge badge-warning">55%</span>
                  </li>
                  <li className="d-flex mb-3 align-items-center">
                    <div className="media-support-info">
                      <h6>Marge Arita</h6>
                    </div>
                    <span className="badge badge-primary">65%</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="media-support-info">
                      <h6>Barry Cudat</h6>
                    </div>
                    <span className="badge badge-danger">15%</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Patient overview</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div
                  id="home-chart-03"
                  style={{ height: "280px" }}
                  className="iq-card-body"
                ></div>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Visits From Countries </h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="iq-details">
                  <span className="title text-dark">United States</span>
                  <div className="percentage float-end text-primary">
                    95 <span>%</span>
                  </div>

                  <div className="iq-progress-bar-linear d-inline-block w-100">
                    <div
                      className="iq-progress-bar progress"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-primary"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "95%", transition: "width 2s ease 0s" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="iq-details mt-4">
                  <span className="title text-dark">India</span>
                  <div className="percentage float-end text-warning">
                    75 <span>%</span>
                  </div>
                  <div className="iq-progress-bar-linear d-inline-block w-100">
                    <div
                      className="iq-progress-bar progress"
                      style={{ height: "6px" }}
                    >
                      <span
                        className="bg-warning"
                        data-percent="75"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "75%", transition: "width 2s ease 0s" }}
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="iq-details mt-4">
                  <span className="title text-dark">Australia</span>
                  <div className="percentage float-end text-success">
                    55 <span>%</span>
                  </div>
                  <div className="iq-progress-bar-linear d-inline-block w-100">
                    <div
                      className="iq-progress-bar progress"
                      style={{ height: "6px" }}
                    >
                      <span
                        className="bg-success"
                        data-percent="55"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "55%", transition: "width 2s ease 0s" }}
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="iq-details mt-4">
                  <span className="title text-dark">Brazil</span>
                  <div className="percentage float-end text-danger">
                    25 <span>%</span>
                  </div>
                  <div className="iq-progress-bar-linear d-inline-block w-100">
                    <div
                      className="iq-progress-bar progress"
                      style={{ height: "6px" }}
                    >
                      <span
                        className="bg-danger"
                        data-percent="25"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "25%", transition: "width 2s ease 0s" }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="8">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">New Appointments </h4>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="text-secondary dropdown-toggle"
                      id="dropdownMenuButton5"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      <i className="ri-more-fill"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMenuButton5"
                    >
                      <Dropdown.Item className="dropdown-item" to="#">
                        <i className="ri-eye-fill me-2"></i>View
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="#">
                        <i className="ri-delete-bin-6-fill me-2"></i>Delete
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="#">
                        <i className="ri-pencil-fill me-2"></i>Edit
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="#">
                        <i className="ri-printer-fill me-2"></i>Print
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="#">
                        <i className="ri-file-download-fill me-2"></i>Download
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="table-responsive">
                  <Table className="mb-0" borderless>
                    <thead>
                      <tr>
                        <th scope="col">Patient</th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Date</th>
                        <th scope="col">Timing</th>
                        <th scope="col">Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Petey Cruiser</td>
                        <td>Dr.Monty Carlo</td>
                        <td>20/02/2020</td>
                        <td>8:00 AM</td>
                        <td>+1-202-555-0146</td>
                      </tr>
                      <tr>
                        <td>Anna Sthesia</td>
                        <td>Dr.Pete Sariya</td>
                        <td>25/02/2020</td>
                        <td>8:30 AM</td>
                        <td>+1-202-555-0164</td>
                      </tr>
                      <tr>
                        <td>Paul Molive</td>
                        <td>Dr.Brock Lee</td>
                        <td>25/02/2020</td>
                        <td>9:45 AM</td>
                        <td>+1-202-555-0153</td>
                      </tr>
                      <tr>
                        <td>Anna Mull</td>
                        <td>Dr.Barb Ackue</td>
                        <td>27/02/2020</td>
                        <td>11:30 AM</td>
                        <td>+1-202-555-0154</td>
                      </tr>
                      <tr>
                        <td>Paige Turner</td>
                        <td>Dr.Walter Melon</td>
                        <td>28/02/2020</td>
                        <td>3:30 PM</td>
                        <td>+1-202-555-0101</td>
                      </tr>
                      <tr>
                        <td>Don Stairs</td>
                        <td>Dr.Arty Ficial</td>
                        <td>28/02/2020</td>
                        <td>4:30 PM</td>
                        <td>+1-202-555-0176</td>
                      </tr>
                      <tr>
                        <td>Pat Agonia</td>
                        <td>Dr.Barb Ackue</td>
                        <td>29/02/2020</td>
                        <td>5:00 PM</td>
                        <td>+1-202-555-0194</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Doctors Lists</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="doctors-lists m-0 p-0">
                  <li className="d-flex mb-4 align-items-center">
                    <div className="user-img img-fluid">
                      <img
                        src={user1}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="media-support-info ms-3">
                      <h6>Dr. Paul Molive</h6>
                      <p className="mb-0 font-size-12">MBBS, MD</p>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="text-primary"
                          id="dropdownMenuButton41"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                          role="button"
                          style={{ border: "none" }}
                        >
                          <i className="ri-more-2-line"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                          <Dropdown.Item to="#">
                            <i className="ri-eye-line me-2"></i>View
                          </Dropdown.Item>
                          <Dropdown.Item to="#">
                            <i className="ri-bookmark-line me-2"></i>Appointment
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li className="d-flex mb-4 align-items-center">
                    <div className="user-img img-fluid">
                      <img
                        src={user2}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="media-support-info ms-3">
                      <h6>Dr. Barb Dwyer</h6>
                      <p className="mb-0 font-size-12">MD</p>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="text-primary"
                          id="dropdownMenuButton41"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                          role="button"
                          style={{ border: "none" }}
                        >
                          <i className="ri-more-2-line"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                          <Dropdown.Item to="#">
                            <i className="ri-eye-line me-2"></i>View
                          </Dropdown.Item>
                          <Dropdown.Item to="#">
                            <i className="ri-bookmark-line me-2"></i>Appointment
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li className="d-flex mb-4 align-items-center">
                    <div className="user-img img-fluid">
                      <img
                        src={user3}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="media-support-info ms-3">
                      <h6>Dr. Terry Aki</h6>
                      <p className="mb-0 font-size-12">MBBS</p>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="text-primary"
                          id="dropdownMenuButton41"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                          role="button"
                          style={{ border: "none" }}
                        >
                          <i className="ri-more-2-line"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                          <Dropdown.Item to="#">
                            <i className="ri-eye-line me-2"></i>View
                          </Dropdown.Item>
                          <Dropdown.Item to="#">
                            <i className="ri-bookmark-line me-2"></i>Appointment
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li className="d-flex mb-4 align-items-center">
                    <div className="user-img img-fluid">
                      <img
                        src={user4}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="media-support-info ms-3">
                      <h6>Dr. Robin Banks</h6>
                      <p className="mb-0 font-size-12">MBBS, MD</p>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="text-primary"
                          id="dropdownMenuButton41"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                          role="button"
                          style={{ border: "none" }}
                        >
                          <i className="ri-more-2-line"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                          <Dropdown.Item to="#">
                            <i className="ri-eye-line me-2"></i>View
                          </Dropdown.Item>
                          <Dropdown.Item to="#">
                            <i className="ri-bookmark-line me-2"></i>Appointment
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li className="d-flex mb-4 align-items-center">
                    <div className="user-img img-fluid">
                      <img
                        src={user5}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="media-support-info ms-3">
                      <h6>Dr. Barry Wine</h6>
                      <p className="mb-0 font-size-12">BAMS</p>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="text-primary"
                          id="dropdownMenuButton41"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                          role="button"
                          style={{ border: "none" }}
                        >
                          <i className="ri-more-2-line"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                          <Dropdown.Item to="#">
                            <i className="ri-eye-line me-2"></i>View
                          </Dropdown.Item>
                          <Dropdown.Item to="#">
                            <i className="ri-bookmark-line me-2"></i>Appointment
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li className="d-flex mb-4 align-items-center">
                    <div className="user-img img-fluid">
                      <img
                        src={user6}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="media-support-info ms-3">
                      <h6>Dr. Zack Lee</h6>
                      <p className="mb-0 font-size-12">MS, MD</p>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="text-primary"
                          id="dropdownMenuButton41"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                          role="button"
                          style={{ border: "none" }}
                        >
                          <i className="ri-more-2-line"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                          <Dropdown.Item to="#">
                            <i className="ri-eye-line me-2"></i>View
                          </Dropdown.Item>
                          <Dropdown.Item to="#">
                            <i className="ri-bookmark-line me-2"></i>Appointment
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li className="d-flex mb-4 align-items-center">
                    <div className="user-img img-fluid">
                      <img
                        src={user7}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="media-support-info ms-3">
                      <h6>Dr. Otto Matic</h6>
                      <p className="mb-0 font-size-12">MBBS, MD</p>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="text-primary"
                          id="dropdownMenuButton41"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                          role="button"
                          style={{ border: "none" }}
                        >
                          <i className="ri-more-2-line"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                          <Dropdown.Item to="#">
                            <i className="ri-eye-line me-2"></i>View
                          </Dropdown.Item>
                          <Dropdown.Item to="#">
                            <i className="ri-bookmark-line me-2"></i>Appointment
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li className="d-flex mb-4 align-items-center">
                    <div className="user-img img-fluid">
                      <img
                        src={user8}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="media-support-info ms-3">
                      <h6>Dr. Moe Fugga</h6>
                      <p className="mb-0 font-size-12">MD</p>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="text-primary"
                          id="dropdownMenuButton41"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                          role="button"
                          style={{ border: "none" }}
                        >
                          <i className="ri-more-2-line"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                          <Dropdown.Item to="#">
                            <i className="ri-eye-line me-2"></i>View
                          </Dropdown.Item>
                          <Dropdown.Item to="#">
                            <i className="ri-bookmark-line me-2"></i>Appointment
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li className="d-flex mb-4 align-items-center">
                    <div className="user-img img-fluid">
                      <img
                        src={user9}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="media-support-info ms-3">
                      <h6>Dr. Bud Wiser</h6>
                      <p className="mb-0 font-size-12">MBBS</p>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="text-primary"
                          id="dropdownMenuButton41"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                          role="button"
                          style={{ border: "none" }}
                        >
                          <i className="ri-more-2-line"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                          <Dropdown.Item to="#">
                            <i className="ri-eye-line me-2"></i>View
                          </Dropdown.Item>
                          <Dropdown.Item to="#">
                            <i className="ri-bookmark-line me-2"></i>Appointment
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li className="d-flex mb-4 align-items-center">
                    <div className="user-img img-fluid">
                      <img
                        src={user10}
                        alt="story-img"
                        className="rounded-circle avatar-40"
                      />
                    </div>
                    <div className="media-support-info ms-3">
                      <h6>Dr. Barry Cade</h6>
                      <p className="mb-0 font-size-12">MBBS, MD</p>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="text-primary"
                          id="dropdownMenuButton41"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                          role="button"
                          style={{ border: "none" }}
                        >
                          <i className="ri-more-2-line"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end user-dropdown-menu">
                          <Dropdown.Item to="#">
                            <i className="ri-eye-line me-2"></i>View
                          </Dropdown.Item>
                          <Dropdown.Item to="#">
                            <i className="ri-bookmark-line me-2"></i>Appointment
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                </ul>
                <Link to="#" className="btn btn-primary d-block mt-3">
                  <i className="ri-add-line"></i> View All Doctors{" "}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Index;
