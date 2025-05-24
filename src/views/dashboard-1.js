import React, { Fragment } from "react";
import { Col, Dropdown, Row, Table } from "react-bootstrap";

// Chart
import Chart from "react-apexcharts";

// Img
import user from "../assets/images/user/04.jpg"
import user1 from "../assets/images/user/05.jpg";
import user2 from "../assets/images/user/06.jpg";
import user3 from "../assets/images/user/07.jpg";
import user4 from "../assets/images/user/08.jpg";
import user5 from "../assets/images/user/09.jpg";
import user6 from "../assets/images/user/10.jpg";
import user7 from "../assets/images/user/01.jpg";
import user8 from "../assets/images/user/02.jpg";
import user9 from "../assets/images/user/03.jpg";
import user10 from "../assets/images/page-img/30.png";
import user11 from "../assets/images/page-img/31.png";
import user12 from "../assets/images/page-img/32.png";
import user13 from "../assets/images/page-img/33.png";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper modules
import { Navigation } from "swiper/modules";

// Swiper css
import "swiper/css";
import "swiper/css/pagination";

//Link
import { Link } from "react-router-dom";

const DashboardOne = () => {
  const chart1 = {
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: "#e64141",
              },
              {
                from: -45,
                to: 0,
                color: "#089bab",
              },
              {
                from: 0,
                to: 20,
                color: "#FC9F5B",
              },
            ],
          },
          columnWidth: "80%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: "Growth",
        },
        labels: {
          formatter: function (y) {
            return y.toFixed(0) + "%";
          },
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2011-01-01",
          "2011-02-01",
          "2011-03-01",
          "2011-04-01",
          "2011-05-01",
          "2011-06-01",
          "2011-07-01",
          "2011-08-01",
          "2011-09-01",
          "2011-10-01",
          "2011-11-01",
          "2011-12-01",
          "2012-01-01",
          "2012-02-01",
          "2012-03-01",
          "2012-04-01",
          "2012-05-01",
          "2012-06-01",
          "2012-07-01",
          "2012-08-01",
          "2012-09-01",
          "2012-10-01",
          "2012-11-01",
          "2012-12-01",
          "2013-01-01",
          "2013-02-01",
          "2013-03-01",
          "2013-04-01",
          "2013-05-01",
          "2013-06-01",
          "2013-07-01",
          "2013-08-01",
          "2013-09-01",
        ],
        labels: {
          rotate: -90,
        },
      },
    },
    series: [
      {
        name: "Cash Flow",
        data: [
          1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09,
          0.34, 3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8,
          -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4,
          -21.4, -2.4,
        ],
      },
    ],
  };
const chart2 ={
  options:{
    chart: {
      height: 150,
      type: "area",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    colors: ["#0D9AAA"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 3,
    },
    markers: {
      size: 4,
    },
    yaxis: {
      max: 100,
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
      },
  },
    legend: {
      show: false,
    },
  },
  series: [
    {
      data: [80, 90, 60, 90, 44, 50, 98, 80, 90],
    },
  ],
}
const chart3 = {
  options:{
    chart: {
      height: 150,
      type: "area",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    colors: ["#fc9f5b"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 3,
    },
    markers: {
      size: 4,
    },
    yaxis: {
      max: 100,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    legend: {
      show: false,
    }
  },
  series: [
    {
      data: [50, 60, 45, 90, 44, 50, 98, 75, 50],
    },
  ],
}
const chart4 = {
  options:{
    chart: {
            height: 290,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function () {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249
                        }
                    }
              },
            track: {
                background :['#089bab', '#FC9F5B', '#75DDDD', '#ffb57e']
              }
            }
        },
  },
  series: [44, 55, 67, 83],
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        colors: ['#089bab', '#FC9F5B', '#75DDDD', '#ffb57e'],
}
  const HospitalStaff = [
    {
      id: 1,
      staffImage: user1,
      drName: "Dr. Paul Molive",
      position: "Doctor",
      description: "California Hospital Medical Center",
    },
    {
      id: 2,
      staffImage: user2,
      drName: "Dr. Paul Molive",
      position: "Nurse",
      description: "California Hospital Medical Center",
    },
    {
      id: 3,
      staffImage: user3,
      drName: "Dr. Paul Molive",
      position: "Surgeon",
      description: "California Hospital Medical Center",
    },
    {
      id: 4,
      staffImage: user4,
      drName: "Dr. Paul Molive",
      position: "Doctor",
      description: "California Hospital Medical Center",
    },
    {
      id: 5,
      staffImage: user5,
      drName: "Dr. Paul Molive",
      position: "Surgeon",
      description: "California Hospital Medical Center",
    },
    {
      id: 6,
      staffImage: user6,
      drName: "Dr. Paul Molive",
      position: "OT Assistent",
      description: "California Hospital Medical Center",
    },
  ];

  return (
    <Fragment>
        <Row>
          <Col lg="12">
            <Row>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-primary rounded-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-primary">
                        <i className="ri-user-fill"></i>
                      </div>
                      <div className="text-end">
                        <h2 className="mb-0">
                          <span className="counter">5600</span>
                        </h2>
                        <h5 className="">Doctors</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-warning rounded-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-warning">
                        <i className="ri-women-fill"></i>
                      </div>
                      <div className="text-end">
                        <h2 className="mb-0">
                          <span className="counter">3450</span>
                        </h2>
                        <h5 className="">Nurses</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-danger rounded-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-danger">
                        <i className="ri-group-fill"></i>
                      </div>
                      <div className="text-end">
                        <h2 className="mb-0">
                          <span className="counter">3500</span>
                        </h2>
                        <h5 className="">Patients</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3">
                <div className="iq-card">
                  <div className="iq-card-body iq-bg-info rounded-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="rounded-circle iq-card-icon bg-info">
                        <i className="ri-hospital-line"></i>
                      </div>
                      <div className="text-end">
                        <h2 className="mb-0">
                          <span className="counter">4500</span>
                        </h2>
                        <h5 className="">Pharmacists</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm="12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Hospital Survey</h4>
                </div>
              </div>
              <div className="iq-card-body pb-0 mt-3">
                <div className="row text-center">
                  <div className="col-sm-3 col-6">
                    <h4 className="margin-0">$ 305 </h4>
                    <p className="text-muted"> Today's Income</p>
                  </div>
                  <div className="col-sm-3 col-6">
                    <h4 className="margin-0">$ 999 </h4>
                    <p className="text-muted">This Week's Income</p>
                  </div>
                  <div className="col-sm-3 col-6">
                    <h4 className="margin-0">$ 4999 </h4>
                    <p className="text-muted">This Month's Income</p>
                  </div>
                  <div className="col-sm-3 col-6">
                    <h4 className="margin-0">$ 90,000 </h4>
                    <p className="text-muted">This Year's Income</p>
                  </div>
                </div>
              </div>
              {/* <div id="home-servey-chart"></div> */}
              <Chart
                options={chart1.options}
                series={chart1.series}
                type="bar"
                height={350}
              />
            </div>
          </Col>
          <Col sm="12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between position-relative">
                <div className="iq-header-title">
                  <h4 className="card-title">Hospital Staff</h4>
                </div>
                <div className="iqonic-navigation-custom">
                  <div className="iqonic-navigation" id="navDemo">
                    <div
                      id="swiper-button-prev"
                      className="swiper-buttons swiper-button-prev"
                      tabIndex="0"
                      role="button"
                      aria-label="Previous slide"
                    >
                      <i className="ri-arrow-left-s-line"></i>
                    </div>
                    <div
                      id="swiper-button-next"
                      className="swiper-buttons swiper-button-next"
                      tabIndex="-1"
                      role="button"
                      aria-label="Next slide"
                    >
                      <i className="ri-arrow-right-s-line"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="iq-card-body">
                <Swiper
                  className="swiper-wrapper"
                  slidesPerView={5}
                  spaceBetween={20}
                  modules={[Navigation]}
                  navigation={{
                    nextEl: "#swiper-button-next",
                    prevEl: "#swiper-button-prev",
                  }}
                >
                  {HospitalStaff.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="docter-list-item-inner rounded text-center">
                          <div className="donter-profile">
                            <img
                              src={item.staffImage}
                              className="img-fluid rounded-circle"
                              alt="user-img"
                            />
                          </div>
                          <div className="doctor-detail mt-3">
                            <h5>{item.drName}</h5>
                            <h6>{item.position}</h6>
                          </div>
                          <hr />
                          <div className="doctor-description">
                            <p className="mb-0 text-center ps-2 pe-2">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </Col>
          <Col md="12" lg="8">
            <Row>
              <Col sm="12">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Operations</h4>
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
                            <i className="ri-file-download-fill me-2"></i>
                            Download
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
                            <th scope="col">Patient Name </th>
                            <th scope="col">Doctors Team</th>
                            <th scope="col">Date Of Operation</th>
                            <th scope="col"> Report</th>
                            <th scope="col">Diseases</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">
                              <img
                                className="rounded-circle img-fluid avatar-40"
                                src={user7}
                                alt="profile"
                              />
                            </td>
                            <td>Petey Cruiser</td>
                            <td>
                              <div className="iq-media-group">
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user1}
                                    alt=""
                                  />
                                </Link>
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user2}
                                    alt=""
                                  />
                                </Link>
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user3}
                                    alt=""
                                  />
                                </Link>
                              </div>
                            </td>
                            <td>12-02-2020</td>
                            <td>
                              <i className="ri-file-pdf-line font-size-16 text-danger"></i>
                            </td>
                            <td>Fracture</td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <img
                                className="rounded-circle img-fluid avatar-40"
                                src={user8}
                                alt="profile"
                              />
                            </td>
                            <td>Anna Sthesia</td>
                            <td>
                              <div className="iq-media-group">
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user1}
                                    alt=""
                                  />
                                </Link>
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user2}
                                    alt=""
                                  />
                                </Link>
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user3}
                                    alt=""
                                  />
                                </Link>
                              </div>
                            </td>
                            <td>14-02-2020</td>
                            <td>
                              <i className="ri-file-pdf-line font-size-16 text-danger"></i>
                            </td>
                            <td>Cataract surgery</td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <img
                                className="rounded-circle img-fluid avatar-40"
                                src={user9}
                                alt="profile"
                              />
                            </td>
                            <td>Paul Molive</td>
                            <td>
                              <div className="iq-media-group">
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user1}
                                    alt=""
                                  />
                                </Link>
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user2}
                                    alt=""
                                  />
                                </Link>
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user3}
                                    alt=""
                                  />
                                </Link>
                              </div>
                            </td>
                            <td>14-02-2020</td>
                            <td>
                              <i className="ri-file-pdf-line font-size-16 text-danger"></i>
                            </td>
                            <td>Cancer</td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <img
                                className="rounded-circle img-fluid avatar-40"
                                src={user}
                                alt="profile"
                              />
                            </td>
                            <td>Anna Mull</td>
                            <td>
                              <div className="iq-media-group">
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user1}
                                    alt=""
                                  />
                                </Link>
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user2}
                                    alt=""
                                  />
                                </Link>
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user3}
                                    alt=""
                                  />
                                </Link>
                              </div>
                            </td>
                            <td>16-02-2020</td>
                            <td>
                              <i className="ri-file-pdf-line font-size-16 text-danger"></i>
                            </td>
                            <td>Hysterectomy</td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <img
                                className="rounded-circle img-fluid avatar-40"
                                src={user1}
                                alt="profile"
                              />
                            </td>
                            <td>Ruby saul</td>
                            <td>
                              <div className="iq-media-group">
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user1}
                                    alt=""
                                  />
                                </Link>
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user2}
                                    alt=""
                                  />
                                </Link>
                                <Link to="#" className="iq-media">
                                  <img
                                    className="img-fluid avatar-40 rounded-circle"
                                    src={user3}
                                    alt=""
                                  />
                                </Link>
                              </div>
                            </td>
                            <td>18-02-2020</td>
                            <td>
                              <i className="ri-file-pdf-line font-size-16 text-danger"></i>
                            </td>
                            <td>Cancer</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="12" lg="6">
                <Row className="row">
                  <Col md="6" lg="12">
                    <div className="iq-card">
                      <div className="iq-card-body">
                        <div className="iq-info-box d-flex align-items-center p-3 gap-3">
                          <div className="info-image me-3">
                            <img
                              src={user10}
                              className="img-fluid"
                              alt="images-boxs"
                            />
                          </div>
                          <div className="info-text">
                            <h3>120</h3>
                            <span>Total Appointments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" lg="12">
                    <div className="iq-card">
                      <div className="iq-card-body">
                        <div className="iq-info-box d-flex align-items-center p-3 gap-3">
                          <div className="info-image me-3">
                            <img
                              src={user11}
                              className="img-fluid"
                              alt="images-box"
                            />
                          </div>
                          <div className="info-text">
                            <h3>5000</h3>
                            <span>Completed Appointments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" lg="12">
                    <div className="iq-card">
                      <div className="iq-card-body">
                        <div className="iq-info-box d-flex align-items-center p-3 gap-3">
                          <div className="info-image me-3">
                            <img
                              src={user12}
                              className="img-fluid"
                              alt="images-box"
                            />
                          </div>
                          <div className="info-text">
                            <h3>1500</h3>
                            <span>Cancelled Appointments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" lg="12">
                    <div className="iq-card">
                      <div className="iq-card-body">
                        <div className="iq-info-box d-flex align-items-center p-3 gap-3">
                          <div className="info-image me-3">
                            <img
                              src={user13}
                              className="img-fluid"
                              alt="images-box"
                            />
                          </div>
                          <div className="info-text">
                            <h3>500</h3>
                            <span>Followup Appointments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md="12" lg="6">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Recent Activity</h4>
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
                            <i className="ri-file-download-fill me-2"></i>
                            Download
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <ul className="iq-timeline">
                      <li>
                        <div className="timeline-dots-fill"></div>
                        <h6 className="float-start mb-2 text-dark">
                          <i className="ri-user-fill"></i> 5 min ago
                        </h6>
                        <small className="float-end mt-1">Active</small>
                        <div className="d-inline-block w-100">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque scelerisque
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-dots-fill bg-success"></div>
                        <h6 className="float-start mb-2 text-dark">
                          <i className="ri-user-fill"></i> 6 min ago
                        </h6>
                        <small className="float-end mt-1">Away</small>
                        <div className="d-inline-block w-100">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque scelerisque
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-dots-fill bg-info"></div>
                        <h6 className="float-start mb-2 text-dark">
                          <i className="ri-user-fill"></i> 10 min ago
                        </h6>
                        <small className="float-end mt-1">Active</small>
                        <div className="d-inline-block w-100">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque scelerisque
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-dots-fill bg-warning"></div>
                        <h6 className="float-start mb-2 text-dark">
                          <i className="ri-user-fill"></i> 15 min ago
                        </h6>
                        <small className="float-end mt-1">Offline</small>
                        <div className="d-inline-block w-100">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque scelerisque
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-dots-fill bg-danger"></div>
                        <h6 className="float-start mb-2 text-dark">
                          <i className="ri-user-fill"></i> 18 min ago
                        </h6>
                        <small className="float-end mt-1">Away</small>
                        <div className="d-inline-block w-100">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque scelerisque
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="12" lg="4">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Total Accident Report</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <h3>$40K</h3>
                  </div>
                </div>
                <Chart options={chart2.options} series={chart2.series} type="line" height={150} />
                <div className="row text-center mt-3">
                  <div className="col-sm-6">
                    <h6 className="text-truncate d-block">Last Month</h6>
                    <p className="m-0">358</p>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="text-truncate d-block">Current Month</h6>
                    <p className="m-0">194</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Total Death Report</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <h3>$20K</h3>
                  </div>
                </div>
                <Chart options={chart3.options} series={chart3.series} type="line" height={150} />
                <div className="row text-center mt-3">
                  <div className="col-sm-6">
                    <h6 className="text-truncate d-block">Last Month</h6>
                    <p className="m-0">220</p>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="text-truncate d-block">Current Month</h6>
                    <p className="m-0">120</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Overall Progress</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <Chart options={chart4.options} label={chart4.label} series={chart4.series} type="radialBar" height={260} />
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default DashboardOne;
