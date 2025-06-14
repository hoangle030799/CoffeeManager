import React, { Fragment } from "react";
import { Col, Dropdown, Row, Table, Tab, Nav } from "react-bootstrap";
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

const Home = () => {
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
  const chart2 = {
    options: {
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
    options: {
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
    options: {
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
            background: ['#089bab', '#FC9F5B', '#75DDDD', '#ffb57e']
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
        <Col>
          <Col >
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-center align-items-center">
                <div className="iq-header-title">
                  <h2 className="card-title">Giới thiệu</h2>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="d-flex mb-4 gap-3">
                  <div className="media-body">
                    <h5 className="mt-0">Mục tiêu</h5>
                    <p className="mb-0">
                      Regularly and thoroughly clean your hands with an
                      alcohol-based hand rub or wash them with soap and water.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4 gap-3">
                  <div className="media-body">
                    <h5 className="mt-0">Sứ mệnh</h5>
                    <p className="mb-0">
                      Maintain at least 1 metre (3 feet) distance between
                      yourself and anyone who is coughing or sneezing.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4 gap-3">
                  <div className="media-body">
                    <h5 className="mt-0">
                      Avoid touching eyes, nose and mouth
                    </h5>
                    <p className="mb-0">
                      Hands touch many surfaces and can pick up viruses. Once
                      contaminated, hands can transfer the virus to your eyes,
                      nose or mouth. From there, the virus can enter your body
                      and can make you sick.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="media-body">
                    <h5 className="mt-0">Practice respiratory hygiene </h5>
                    <p className="mb-0">
                      Make sure you, and the people around you, follow good
                      respiratory hygiene. This means covering your mouth and
                      nose with your bent elbow or tissue when you cough or
                      sneeze. Then dispose of the used tissue immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Tab.Container defaultActiveKey="first">
            <div className="iq-card ">
              <div className="iq-card-header d-flex justify-content-center align-items-center">
                <div className="iq-header-title">
                  <h2 className="card-title">Checklist cần chuẩn bị</h2>
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
                          id="customCheck10"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck10"
                        >
                          Get the address of customer
                        </label>
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
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </Col>
        <Col>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-center align-items-center">
              <div className="iq-header-title">
                <h2 className="card-title">Menu</h2>
              </div>
            </div>
            <div className="iq-card-body">
              <div className="table-responsive">
                <Table className="mb-0" borderless>
                  <thead>
                    <tr>
                      <th scope="col">Patient</th>
                      <th scope="col">Doctor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Petey Cruiser</td>
                      <td>Dr.Monty Carlo</td>
                    </tr>
                    <tr>
                      <td>Anna Sthesia</td>
                      <td>Dr.Pete Sariya</td>
                    </tr>
                    <tr>
                      <td>Paul Molive</td>
                      <td>Dr.Brock Lee</td>
                    </tr>
                    <tr>
                      <td>Anna Mull</td>
                      <td>Dr.Barb Ackue</td>
                    </tr>
                    <tr>
                      <td>Paige Turner</td>
                      <td>Dr.Walter Melon</td>
                    </tr>
                    <tr>
                      <td>Don Stairs</td>
                      <td>Dr.Arty Ficial</td>
                    </tr>
                    <tr>
                      <td>Pat Agonia</td>
                      <td>Dr.Barb Ackue</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="card-title text-end m-3">
              <button
                type="button"
                className="btn btn-primary m-3"
                name="button"
              >
                Submit
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment >
  );
};

export default Home;
