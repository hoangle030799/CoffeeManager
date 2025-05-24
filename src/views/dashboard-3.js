import React, { Fragment } from "react";
import { Col, Dropdown, Row, Table } from "react-bootstrap";
// Chart
import Chart from 'react-apexcharts'

// Img
import img from "../assets/images/user/11.png";
import img1 from "../assets/images/page-img/37.png"
import img2 from "../assets/images/page-img/34.png"
import img3 from "../assets/images/page-img/35.png"
import img4 from "../assets/images/page-img/36.png"

const DashboardThree = () => {

    const chart1 = {
        options:{
            chart: {
              stacked: true,
              height: 280,
              type: 'bar',
            },
            colors: ['#089bab'],
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                    endingShape: 'rounded',
                    borderRadius:10
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2
            },
    
            grid: {
                row: {
                    colors: ['#fff', '#f2f2f2']
                }
            },
            xaxis: {
                labels: {
                    rotate: -45
                },
                categories: ['A', 'B', 'C', 'D', 'E', 'F',
                    'G', 'H', 'I', 'J'
                ],
                tickPlacement: 'on'
            },
            yaxis: {
                title: {
                    text: 'Servings',
                },
            },
            fill: {
              opacity: 1,
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    stops: [50, 0, 100]
                },
            }
        },
        series: [{
            name: 'Servings',
            data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31]
        }],
    }
  return (
    <Fragment>
        <Row>
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
                      <b>Bess Willis</b>
                    </h4>
                    <p>27 years, California</p>
                  </div>
                  <ul className="doctoe-sedual d-flex align-items-center justify-content-between p-0 mt-4 mb-0">
                    <li className="text-center">
                      <h6 className="text-primary">Weight</h6>
                      <h3>
                        60<span>kg</span>
                      </h3>
                    </li>
                    <li className="text-center">
                      <h6 className="text-primary">Height</h6>
                      <h3>
                        170<span>cm</span>
                      </h3>
                    </li>
                    <li className="text-center">
                      <h6 className="text-primary">Goal</h6>
                      <h3 className="text-warning">
                        55<span>kg</span>
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-body">
                <div className="patient-steps">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="col-md-6">
                      <div className="data-block">
                        <p className="mb-0">Walked</p>
                        <h5>4532 steps</h5>
                      </div>
                      <div className="data-block mt-3">
                        <p className="mb-0">My Goal</p>
                        <h5>6500 steps</h5>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="progress-round patient-progress mx-auto"
                        data-value="80"
                      >
                        <span className="progress-left">
                          <span className="progress-bar border-secondary"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar border-secondary"></span>
                        </span>
                        <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center text-center">
                          <div className="h4 mb-0">
                            4532
                            <br /> <span className="font-size-14">left</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="patient-role list-inline d-flex align-items-center p-0 mt-4 mb-0">
                    <li className="text-start">
                      <h6 className="text-primary">Carbs</h6>
                      <div className="iq-progress-bar-linear d-inline-block w-100">
                        <div
                          className="iq-progress-bar progress"
                          style={{ height: "5px" }}
                        >
                          <span
                            className="bg-primary"
                            data-percent="85"
                            data-toggle="progress-bar"
                            role="progressbar"
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "85%" }}
                          ></span>
                        </div>
                      </div>
                    </li>
                    <li className="text-start">
                      <h6 className="text-primary">Protein</h6>
                      <div className="iq-progress-bar-linear d-inline-block w-100">
                        <div
                          className="iq-progress-bar progress"
                          style={{ height: "5px" }}
                        >
                          <span
                            className="bg-danger"
                            data-percent="65"
                            data-toggle="progress-bar"
                            role="progressbar"
                            aria-valuenow="65"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "65%" }}
                          ></span>
                        </div>
                      </div>
                    </li>
                    <li className="text-start">
                      <h6 className="text-primary">Fat</h6>
                      <div className="iq-progress-bar-linear d-inline-block w-100">
                        <div
                          className="iq-progress-bar progress"
                          style={{ height: "5px" }}
                        >
                          <span
                            className="bg-info"
                            data-percent="70"
                            data-toggle="progress-bar"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "70%" }}
                          ></span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <hr />
                <div className="patient-steps2">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="col-md-6">
                      <div className="data-block">
                        <p className="mb-0">Burned</p>
                        <h5>325 kcal</h5>
                      </div>
                      <div className="data-block mt-3">
                        <p className="mb-0">My Goal</p>
                        <h5>800 kcal</h5>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="progress-round patient-progress mx-auto"
                        data-value="60"
                      >
                        <span className="progress-left">
                          <span className="progress-bar border-secondary"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar border-secondary"></span>
                        </span>
                        <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center text-center">
                          <div className="h4 mb-0 text-warning">
                            325
                            <br />{" "}
                            <span className="font-size-14 text-secondary">
                              left
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="patient-role list-inline d-flex align-items-center p-0 mt-4 mb-0">
                    <li className="text-start">
                      <h6 className="text-primary">Carbs</h6>
                      <div className="iq-progress-bar-linear d-inline-block w-100">
                        <div
                          className="iq-progress-bar progress"
                          style={{ height: "5px" }}
                        >
                          <span
                            className="bg-primary"
                            data-percent="50"
                            data-toggle="progress-bar"
                            role="progressbar"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "50%" }}
                          ></span>
                        </div>
                      </div>
                    </li>
                    <li className="text-start">
                      <h6 className="text-primary">Protein</h6>
                      <div className="iq-progress-bar-linear d-inline-block w-100">
                        <div
                          className="iq-progress-bar progress"
                          style={{ height: "5px" }}
                        >
                          <span
                            className="bg-danger"
                            data-percent="60"
                            data-toggle="progress-bar"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "60%" }}
                          ></span>
                        </div>
                      </div>
                    </li>
                    <li className="text-start">
                      <h6 className="text-primary">Fat</h6>
                      <div className="iq-progress-bar-linear d-inline-block w-100">
                        <div
                          className="iq-progress-bar progress"
                          style={{ height: "5px" }}
                        >
                          <span
                            className="bg-info"
                            data-percent="70"
                            data-toggle="progress-bar"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "70%" }}
                          ></span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col lg='8'>
                  <div className="iq-card">
                     <div className="iq-card-body pb-0">
                        <Row>
                           <Col sm='12'>
                              <div className="iq-card">
                                 <div className="iq-card-body bg-primary rounded-4 pt-2 pb-2 pe-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                       <p className="mb-0">Advice! Connect your Apple Watch for better results.</p>
                                       <div className="rounded-4 iq-card-icon bg-white">
                                          <img src={img1} className="img-fluid" alt="icon" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="iq-card">
                                 <div className="iq-header-title">
                                    <h4 className="card-title text-primary">Popular Training</h4>
                                 </div>
                                 <div className="iq-card-body ps-0 pe-0 pb-0">
                                    <Row>
                                       <Col md='4'>
                                          <div className="training-block d-flex align-items-center">
                                             <div className="rounded-circle iq-card-icon iq-bg-primary">
                                                <img src={img2} className="img-fluid" alt="icon" />
                                             </div>
                                             <div className="ms-3">
                                                <h5 className="">Power Training</h5>
                                                <p className="mb-0">395 kcal / h</p>
                                             </div>
                                          </div>
                                       </Col>
                                       <Col md='4' >
                                          <div className="training-block d-flex align-items-center">
                                             <div className="rounded-circle iq-card-icon iq-bg-primary">
                                                <img src={img3} className="img-fluid" alt="icon" />
                                             </div>
                                             <div className="ms-3">
                                                <h5 className="">Yoga Training</h5>
                                                <p className="mb-0">395 kcal / h</p>
                                             </div>
                                          </div>
                                       </Col>
                                       <Col md='4'>
                                          <div className="training-block d-flex align-items-center">
                                             <div className="rounded-circle iq-card-icon iq-bg-primary">
                                                <img src={img4} className="img-fluid" alt="icon" />
                                             </div>
                                             <div className="ms-3">
                                                <h5 className="">Stretching</h5>
                                                <p className="mb-0">395 kcal / h</p>
                                             </div>
                                          </div>
                                       </Col>
                                    </Row>
                                 </div>
                              </div>
                           </Col>
                           <Col lg='8'>
                              <div className="iq-card">
                                 <div className="iq-card-header d-flex justify-content-between p-0 bg-white">
                                    <div className="iq-header-title">
                                       <h4 className="card-title text-primary">Activity Statistic</h4>
                                    </div>
                                 </div>
                                 <div className="iq-card-body p-0">
                                    <Chart options={chart1.options} series={chart1.series} type="bar" height={280} />
                                 </div>
                              </div>
                           </Col>
                           <div className="col-lg-4">
                              <div className="iq-card mb-0">
                                 <div className="iq-card-header d-flex justify-content-between p-0 bg-white">
                                    <div className="iq-header-title">
                                       <h4 className="card-title text-primary">My Training</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                       <Dropdown>
                                          <Dropdown.Toggle variant="dropdown-toggle iq-bg-primary btn" id="dropdownMenuButton4" data-bs-toggle="dropdown" style={{border:'none'}}>
                                          <i className="ri-add-line m-0 text-primary"></i>
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton4">
                                             <Dropdown.Item className="dropdown-item" href="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                             <Dropdown.Item className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                             <Dropdown.Item className="dropdown-item" href="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                             <Dropdown.Item className="dropdown-item" href="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                             <Dropdown.Item className="dropdown-item" href="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                          </Dropdown.Menu>
                                       </Dropdown>
                                    </div>
                                 </div>
                                 <div className="iq-card-body p-0">
                                    <Table className="mb-0 table-box-shadow" borderless>
                                       <thead>
                                          <tr>
                                             <th scope="col">Training</th>
                                             <th scope="col">TRX Cardio</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>Burned</td>
                                             <td>350 kcal</td>
                                          </tr>
                                          <tr>
                                             <td>Spend</td>
                                             <td>1hr 45m</td>
                                          </tr>
                                       </tbody>
                                    </Table>
                                    <Table className="mb-0 mt-4 table-box-shadow" borderless>
                                       <thead>
                                          <tr>
                                             <th scope="col">Training</th>
                                             <th scope="col">Stretching</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>Burned</td>
                                             <td>180 kcal</td>
                                          </tr>
                                          <tr>
                                             <td>Spend</td>
                                             <td>30m</td>
                                          </tr>
                                       </tbody>
                                    </Table>
                                 </div>
                              </div>
                           </div>
                           <Col md='6'>
                              <div className="iq-card">
                                 <div className="iq-card-header d-flex justify-content-between p-0 bg-white min-height-auto mb-1">
                                    <div className="iq-header-title">
                                       <h4 className="card-title text-primary">Heart Rate</h4>
                                    </div>
                                 </div>
                                 <div className="iq-card-body p-0">
                                    <div className="d-flex align-items-center">
                                       <div className="me-3">
                                          <h4 className="">75 bpm</h4>
                                          <p className="mb-0 text-primary">Health Zone</p>
                                       </div>
                                       <div className="rounded-circle iq-card-icon iq-bg-primary"><i className="ri-windy-fill"></i></div>
                                    </div>
                                 </div>
                              </div>
                           </Col>
                           <Col md='6'>
                              <div className="iq-card">
                                 <div className="iq-card-header d-flex justify-content-between p-0 bg-white min-height-auto mb-1">
                                    <div className="iq-header-title">
                                       <h4 className="card-title text-primary">Water Balance</h4>
                                    </div>
                                 </div>
                                 <div className="iq-card-body p-0">
                                    <div className="d-flex align-items-center">
                                       <div className="me-3 text-start">
                                          <p className="mb-0">Drunk</p>
                                          <h4 className="">1250 ml/ 2000 ml</h4>
                                       </div>
                                       <div className="rounded-circle iq-card-icon iq-bg-primary"><i className="ri-add-fill"></i></div>
                                    </div>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </div>
                  </div>
               </Col>
        </Row>
    </Fragment>
  );
};

export default DashboardThree;
