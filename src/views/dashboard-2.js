import React, { Fragment, useEffect } from "react";
import { Col, Dropdown, Nav, Row, Tab, Table } from "react-bootstrap";

// Chart
import Chart from "react-apexcharts";

// Img
import img from "../assets/images/page-img/39.png";
import { Link } from "react-router-dom";

// eslint-disable-next-line camelcase
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// Themes begin
am4core.useTheme(am4themes_animated);
const DashboardTwo = () => {
  const chart1 = {
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "01/01/2011 GMT",
          "01/02/2011 GMT",
          "01/03/2011 GMT",
          "01/04/2011 GMT",
          "01/05/2011 GMT",
          "01/06/2011 GMT",
        ],
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
      colors: ["#089bab", "#FC9F5B", "#5bc5d1"],
    },
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27],
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14],
      },
    ],
  };
  const chart2 = {
    options: {
      chart: {
        stacked: false,
        height: 400,
        type: "bar",
        sparkline: {
          show: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#089bab", "#fc9f5b"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          endingShape: "rounded",
          borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        width: 5,
        colors: ["#ffffff"],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
    series: [
      {
        name: "Male",
        enabled: "true",
        data: [44, 90, 90, 60, 115],
      },
      {
        name: "Female",
        data: [35, 80, 100, 70, 95],
      },
    ],
  };

  useEffect(() => {
    if (document.querySelectorAll("#doc-chart-01").length) {
      am4core.ready(function () {
        // Themes end

        var chart = am4core.create("doc-chart-01", am4charts.RadarChart);

        chart.data = [
          {
            country: "USA",
            visits: 2025,
          },
          {
            country: "China",
            visits: 1882,
          },
          {
            country: "Japan",
            visits: 1809,
          },
          {
            country: "Germany",
            visits: 1322,
          },
          {
            country: "UK",
            visits: 1122,
          },
          {
            country: "France",
            visits: 1114,
          },
          {
            country: "India",
            visits: 984,
          },
          {
            country: "Spain",
            visits: 711,
          },
          {
            country: "Netherlands",
            visits: 665,
          },
          {
            country: "Russia",
            visits: 580,
          },
          {
            country: "South Korea",
            visits: 443,
          },
          {
            country: "Canada",
            visits: 441,
          },
        ];
        chart.rtl = true;

        chart.innerRadius = am4core.percent(40);

        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.labels.template.location = 0.5;
        categoryAxis.renderer.grid.template.strokeOpacity = 0.08;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.extraMax = 0.1;
        valueAxis.renderer.grid.template.strokeOpacity = 0.08;

        chart.seriesContainer.zIndex = -10;

        var series = chart.series.push(new am4charts.RadarColumnSeries());
        series.dataFields.categoryX = "country";
        series.dataFields.valueY = "visits";
        series.tooltipText = "{valueY.value}";
        series.columns.template.strokeOpacity = 0;
        series.columns.template.radarColumn.cornerRadius = 5;
        series.columns.template.radarColumn.innerCornerRadius = 0;
        chart.colors.list = [
          am4core.color("#279fac"),
          am4core.color("#ffb57e"),
          am4core.color("#279fac"),
          am4core.color("#ffb57e"),
          am4core.color("#279fac"),
          am4core.color("#ffb57e"),
          am4core.color("#279fac"),
          am4core.color("#ffb57e"),
          am4core.color("#279fac"),
          am4core.color("#ffb57e"),
          am4core.color("#279fac"),
          am4core.color("#ffb57e"),
        ];

        chart.zoomOutButton.disabled = true;

        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", (fill, target) => {
          return chart.colors.getIndex(target.dataItem.index);
        });

        setInterval(() => {
          am4core.array.each(chart.data, (item) => {
            item.visits *= Math.random() * 0.5 + 0.5;
            item.visits += 10;
          });
          chart.invalidateRawData();
        }, 2000);

        categoryAxis.sortBySeries = series;

        chart.cursor = new am4charts.RadarCursor();
        chart.cursor.behavior = "none";
        chart.cursor.lineX.disabled = true;
        chart.cursor.lineY.disabled = true;
      });
    }

    return () => {};
  }, []);
  return (
    <Fragment>
      <Row>
        <Col lg="8">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Activity Statistic</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <Chart
                options={chart1.options}
                series={chart1.series}
                type="bar"
                height={350}
              />
            </div>
          </div>
        </Col>
        <Col lg="4">
          <div className="iq-card">
            <div className="iq-card-body p-0 rounded ">
              <img src={img} className="img-fluid rounded" alt="banner-img" />
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Patient Distribution</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <div id="doc-chart-01" style={{ height: "415px" }}></div>
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Patients In</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <Chart
                options={chart2.options}
                series={chart2.series}
                type="bar"
                height={400}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <div className="iq-card ">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Patients Satisfactions</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <h2>
                3,897
                <span className="text-success font-size-14 ms-3 me-3">
                  <i className="ri-arrow-up-fill me-2"></i>+3.3%
                </span>
                <small className="text-secondary font-size-14">
                  Generated by clients
                </small>
              </h2>
              <div className="progress mt-3">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "40%" }}
                ></div>
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "20%" }}
                ></div>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "10%" }}
                ></div>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "40%" }}
                ></div>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "20%" }}
                ></div>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "10%" }}
                ></div>
              </div>
              <div className="table-responsive mt-4">
                <Table className="mb-0" borderless>
                  <tbody>
                    <tr>
                      <td>
                        <div className="iq-profile-avatar status-online mt-4">
                          {" "}
                        </div>
                      </td>
                      <td>
                        <h4>Excellent</h4>
                      </td>
                      <td>
                        <span className="text-muted">2400</span>
                      </td>
                      <td>60%</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="iq-profile-avatar status-blue mt-4">
                          {" "}
                        </div>
                      </td>
                      <td>
                        <h4>Very Good</h4>
                      </td>
                      <td>
                        <span className="text-muted">1200</span>
                      </td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="iq-profile-avatar status-primary mt-4">
                          {" "}
                        </div>
                      </td>
                      <td>
                        <h4>Good</h4>
                      </td>
                      <td>
                        <span className="text-muted">240</span>
                      </td>
                      <td>6%</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="iq-profile-avatar status-info mt-4">
                          {" "}
                        </div>
                      </td>
                      <td>
                        <h4>Fair</h4>
                      </td>
                      <td>
                        <span className="text-muted">80</span>
                      </td>
                      <td>2%</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="iq-profile-avatar status-away mt-4">
                          {" "}
                        </div>
                      </td>
                      <td>
                        <h4>Poor</h4>
                      </td>
                      <td>
                        <span className="text-muted">40</span>
                      </td>
                      <td>1%</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="iq-profile-avatar status-danger mt-4">
                          {" "}
                        </div>
                      </td>
                      <td>
                        <h4>Very Poor</h4>
                      </td>
                      <td>
                        <span className="text-muted">40</span>
                      </td>
                      <td>1%</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4">
          <Tab.Container defaultActiveKey="first">
            <div className="iq-card ">
              <div className="iq-card-header d-flex justify-content-between gap-2">
                <div className="iq-header-title">
                  <h4 className="card-title">Tasks</h4>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                  <Nav
                    as={"ul"}
                    className="nav nav-pills flex-nowrap"
                    id="myTab"
                    role="tablist"
                  >
                    <Nav.Item as="li" className="nav-item">
                      <Nav.Link
                        eventKey="first"
                        className="nav-link"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                      <Nav.Link
                        eventKey="second"
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Profile
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                      <Nav.Link
                        eventKey="third"
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Contact
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className="iq-card-body">
                <Tab.Content className="tab-content" id="myTabContent">
                  <Tab.Pane
                    eventKey="first"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck11"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck11"
                        >
                          You should check in some of below.
                        </label>
                      </div>
                      <div></div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck10"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck10"
                        >
                          Get the address of customer
                        </label>
                      </div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck12"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck12"
                        >
                          Contact Vendor for parcel
                        </label>
                      </div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck13"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck13"
                        >
                          Refule delivery truck
                        </label>
                      </div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck14"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck14"
                        >
                          Pick up for order no. 334
                        </label>
                      </div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck15"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck15"
                        >
                          Pay taxes for every bill
                        </label>
                      </div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck16"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck16"
                        >
                          I am designers &amp; I have no life
                        </label>
                      </div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck17"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck17"
                        >
                          This is a good product. Buy it{" "}
                        </label>
                      </div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="second"
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck18"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck18"
                        >
                          You should check in on some of below.
                        </label>
                      </div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck19"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck19"
                        >
                          You should check in on some of below.
                        </label>
                      </div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="third"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck110"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck110"
                        >
                          You should check in on some of below.
                        </label>
                      </div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck111"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck111"
                        >
                          You should check in on some of below.
                        </label>
                      </div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck112"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck112"
                        >
                          You should check in on some of below.
                        </label>
                      </div>
                      <div>
                        <i className="ri-close-line"></i>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </Col>
        <Col lg="4">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Patient Timeline</h4>
              </div>
              <div className="iq-card-header-toolbar d-flex align-items-center">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="dropdown-toggle text-primary"
                    id="dropdownMenuButton4"
                    data-bs-toggle="dropdown"
                    style={{ border: "none" }}
                  >
                    View All
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton4"
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
              <ul className="iq-timeline">
                <li>
                  <div className="timeline-dots"></div>
                  <h6 className="float-start mb-1">Patient Checkup</h6>
                  <small className="float-end mt-1">23 November 2019</small>
                  <div className="d-inline-block w-100">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="timeline-dots border-success"></div>
                  <h6 className="float-start mb-1">Patient Admit</h6>
                  <small className="float-end mt-1">24 November 2019</small>
                  <div className="d-inline-block w-100">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque
                    </p>
                  </div>
                </li>
                <li>
                  <div className="timeline-dots border-primary"></div>
                  <h6 className="float-start mb-1">Treatment Starts</h6>
                  <small className="float-end mt-1">24 November 2019</small>
                  <div className="d-inline-block w-100">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque
                    </p>
                  </div>
                </li>
                <li>
                  <div className="timeline-dots border-warning"></div>
                  <h6 className="float-start mb-1">Patient Discharge</h6>
                  <small className="float-end mt-1">30 November 2019</small>
                  <div className="d-inline-block w-100">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque scelerisque
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="8">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Patients Lists </h4>
              </div>
              <div className="iq-card-header-toolbar d-flex align-items-center">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="dropdown-toggle text-primary"
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
                      <th scope="col">E-mail Id </th>
                      <th scope="col">Contact</th>
                      <th scope="col">Disease</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Petey Cruiser</td>
                      <td>peteycruiser01@gmail.com</td>
                      <td>+1-202-555-0146</td>
                      <td>Fever</td>
                    </tr>
                    <tr>
                      <td>Anna Sthesia</td>
                      <td>annasthesia121@gmail.com</td>
                      <td>+1-202-555-0164</td>
                      <td>Cancer</td>
                    </tr>
                    <tr>
                      <td>Paul Molive</td>
                      <td>paulmolive30@gmail.com</td>
                      <td>+1-202-555-0153</td>
                      <td>Diabetes</td>
                    </tr>
                    <tr>
                      <td>Anna Mull</td>
                      <td>annamull07@gmail.com</td>
                      <td>+1-202-555-0154</td>
                      <td>eye</td>
                    </tr>
                    <tr>
                      <td>John Deo</td>
                      <td>johndeo123@gmail.com</td>
                      <td>+1-202-555-0155</td>
                      <td>Lung</td>
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
                <h4 className="card-title">Patients Reports</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <ul className="report-lists m-0 p-0">
                <li className="d-flex mb-4 align-items-center">
                  <div className="media-support-info">
                    <h6>X-ray.pdf</h6>
                    <Link to="#">View report</Link>
                  </div>
                  <button
                    type="button"
                    className="btn btn-success"
                    name="button"
                  >
                    Download{" "}
                  </button>
                </li>
                <li className="d-flex mb-4 align-items-center">
                  <div className="media-support-info">
                    <h6>pathologyreport.pdf</h6>
                    <Link to="#">View report</Link>
                  </div>
                  <button
                    type="button"
                    className="btn btn-success"
                    name="button"
                  >
                    Download{" "}
                  </button>
                </li>
                <li className="d-flex mb-4 align-items-center">
                  <div className="media-support-info">
                    <h6>laboratoryreports.pdf</h6>
                    <Link to="#">View report</Link>
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    name="button"
                  >
                    On Hold{" "}
                  </button>
                </li>
                <li className="d-flex align-items-center">
                  <div className="media-support-info">
                    <h6>operativereport.pdf</h6>
                    <Link to="#">View report</Link>
                  </div>
                  <button
                    type="button"
                    className="btn btn-success"
                    name="button"
                  >
                    Download{" "}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DashboardTwo;
