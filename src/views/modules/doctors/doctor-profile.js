import React, { Fragment } from "react";
import { Col, Row, Table } from "react-bootstrap";

// Images
import user1 from "../../../assets/images/user/11.png";
import img1 from "../../../assets/images/page-img/g1.jpg";
import img2 from "../../../assets/images/page-img/g2.jpg";
import img3 from "../../../assets/images/page-img/g3.jpg";
import img4 from "../../../assets/images/page-img/g4.jpg";
import img5 from "../../../assets/images/page-img/g5.jpg";
import img6 from "../../../assets/images/page-img/g6.jpg";
import img7 from "../../../assets/images/page-img/g7.jpg";
import img8 from "../../../assets/images/page-img/g8.jpg";
import img9 from "../../../assets/images/page-img/g9.jpg";

import { Link } from "react-router-dom";

function DoctorProfile() {
  return (
    <Fragment>
        <Row>
          <Col lg="4">
            <div className="iq-card">
              <div className="iq-card-body ps-0 pe-0 pt-0">
                <div className="docter-details-block">
                  <div
                    className="doc-profile-bg bg-primary"
                    style={{ height: 150 }}
                  ></div>
                  <div className="docter-profile text-center">
                    <img
                      src={user1}
                      alt="profile-img"
                      className="avatar-130 img-fluid"
                    />
                  </div>
                  <div className="text-center mt-3 ps-3 pe-3">
                    <h4>
                      <b>Bini Jets</b>
                    </h4>
                    <p>Doctor</p>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus repudiandae eveniet harum.
                    </p>
                  </div>
                  <hr />
                  <ul className="doctoe-sedual d-flex align-items-center justify-content-between p-0 m-0">
                    <li className="text-center">
                      <h3 className="counter">4500</h3>
                      <span>Operations</span>
                    </li>
                    <li className="text-center">
                      <h3 className="counter">100</h3>
                      <span>Hospital</span>
                    </li>
                    <li className="text-center">
                      <h3 className="counter">10000</h3>
                      <span>Patients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Personal Information</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="about-info m-0 p-0">
                  <Row>
                    <div className="col-4">First Name:</div>
                    <div className="col-8">Bini</div>
                    <div className="col-4">Last Name:</div>
                    <div className="col-8">Jets</div>
                    <div className="col-4">Age:</div>
                    <div className="col-8">27</div>
                    <div className="col-4">Position:</div>
                    <div className="col-8">Senior Docter</div>
                    <div className="col-4">Email:</div>
                    <div className="col-8">
                      <Link to="mailto:biniJets24@demo.com">
                        {" "}
                        biniJets24@demo.com{" "}
                      </Link>
                    </div>
                    <div className="col-4">Phone:</div>
                    <div className="col-8">
                      <Link to="tel:001-2351-25612">001 2351 256 12</Link>
                    </div>
                    <div className="col-4">Location:</div>
                    <div className="col-8">USA</div>
                  </Row>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Photos</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="profile-img-gallary d-flex flex-wrap p-0 m-0">
                  <li className="col-md-4 col-6 pb-3">
                    <Link to="#">
                      <img
                        src={img1}
                        alt="gallary-images"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="col-md-4 col-6 pb-3">
                    <Link to="#">
                      <img
                        src={img2}
                        alt="gallary-images"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="col-md-4 col-6 pb-3">
                    <Link to="#">
                      <img
                        src={img3}
                        alt="gallary-images"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="col-md-4 col-6 pb-3">
                    <Link to="#">
                      <img
                        src={img4}
                        alt="gallary-images"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="col-md-4 col-6 pb-3">
                    <Link to="#">
                      <img
                        src={img5}
                        alt="gallary-images"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="col-md-4 col-6 pb-3">
                    <Link to="#">
                      <img
                        src={img6}
                        alt="gallary-images"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="col-md-4 col-6 pb-0">
                    <Link to="#">
                      <img
                        src={img7}
                        alt="gallary-images"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="col-md-4 col-6 pb-0">
                    <Link to="#">
                      <img
                        src={img8}
                        alt="gallary-images"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="col-md-4 col-6 pb-0">
                    <Link to="#">
                      <img
                        src={img9}
                        alt="gallary-images"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="8">
            <Row>
              <Col md="6">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Speciality</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <ul className="speciality-list m-0 p-0">
                      <li className="d-flex mb-4 align-items-center">
                        <div className="user-img img-fluid">
                          <Link to="#" className="iq-bg-primary">
                            <i className="ri-award-fill"></i>
                          </Link>
                        </div>
                        <div className="media-support-info ms-3">
                          <h6>professional</h6>
                          <p className="mb-0">Certified Skin Treatment</p>
                        </div>
                      </li>
                      <li className="d-flex mb-4 align-items-center">
                        <div className="user-img img-fluid">
                          <Link to="#" className="iq-bg-warning">
                            <i className="ri-award-fill"></i>
                          </Link>
                        </div>
                        <div className="media-support-info ms-3">
                          <h6>Certified</h6>
                          <p className="mb-0">Cold Laser Operation</p>
                        </div>
                      </li>
                      <li className="d-flex mb-4 align-items-center">
                        <div className="user-img img-fluid">
                          <Link to="#" className="iq-bg-info">
                            <i className="ri-award-fill"></i>
                          </Link>
                        </div>
                        <div className="media-support-info ms-3">
                          <h6>Medication Laser</h6>
                          <p className="mb-0">Hair Lose Product</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col  md='6'>
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Notifications</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <ul className="iq-timeline">
                      <li>
                        <div className="timeline-dots border-success"></div>
                        <h6 className="">Dr. Joy Send you Photo</h6>
                        <small className="mt-1">23 November 2019</small>
                      </li>
                      <li>
                        <div className="timeline-dots border-danger"></div>
                        <h6 className="">Reminder : Opertion Time!</h6>
                        <small className="mt-1">20 November 2019</small>
                      </li>
                      <li>
                        <div className="timeline-dots border-primary"></div>
                        <h6 className="mb-1">Patient Call</h6>
                        <small className="mt-1">19 November 2019</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Schedule</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <ul className="list-inline m-0 p-0">
                      <li>
                        <h6 className="float-start mb-1">
                          Ruby saul (Blood Check)
                        </h6>
                        <small className="float-end mt-1">Today</small>
                        <div className="d-inline-block w-100">
                          <p className="badge badge-primary">09:00 AM </p>
                        </div>
                      </li>
                      <li>
                        <h6 className="float-start mb-1"> Anna Mull (Fever)</h6>
                        <small className="float-end mt-1">Today</small>
                        <div className="d-inline-block w-100">
                          <p className="badge badge-danger">09:15 AM </p>
                        </div>
                      </li>
                      <li>
                        <h6 className="float-start mb-1">
                          Petey Cruiser (X-ray)
                        </h6>
                        <small className="float-end mt-1">Today</small>
                        <div className="d-inline-block w-100">
                          <p className="badge badge-warning">10:00 AM </p>
                        </div>
                      </li>
                      <li>
                        <h6 className="float-start mb-1">
                          Anna Sthesia (Full body Check up)
                        </h6>
                        <small className="float-end mt-1">Today</small>
                        <div className="d-inline-block w-100">
                          <p className="badge badge-info">01:00 PM </p>
                        </div>
                      </li>
                      <li>
                        <h6 className="float-start mb-1">
                          Paul Molive (Operation)
                        </h6>
                        <small className="float-end mt-1">Tomorrow</small>
                        <div className="d-inline-block w-100">
                          <p className="badge badge-success">09:00 AM </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Patients Notes</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <ul className="list-inline m-0 p-0">
                      <li className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                          <h6>Treatment was good!</h6>
                          <p className="mb-0">Eye Test </p>
                        </div>
                        <div>
                          <Link to="#" className="btn iq-bg-primary">
                            Open
                          </Link>
                        </div>
                      </li>
                      <li className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                          <h6>My Helth in better Now</h6>
                          <p className="mb-0">Fever Test</p>
                        </div>
                        <div>
                          <Link to="#" className="btn iq-bg-primary">
                            Open
                          </Link>
                        </div>
                      </li>
                      <li className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                          <h6>No Effacted</h6>
                          <p className="mb-0">Thyroid Test</p>
                        </div>
                        <div>
                          <Link to="#" className="btn iq-bg-danger">
                            Close
                          </Link>
                        </div>
                      </li>
                      <li className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                          <h6>Operation Successfull</h6>
                          <p className="mb-0">Orthopaedic</p>
                        </div>
                        <div>
                          <Link to="#" className="btn iq-bg-primary">
                            Open
                          </Link>
                        </div>
                      </li>
                      <li className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                          <h6>Mediacal Care is just a click away</h6>
                          <p className="mb-0">Join Pain </p>
                        </div>
                        <div>
                          <Link to="#" className="btn iq-bg-danger">
                            Close
                          </Link>
                        </div>
                      </li>
                      <li className="d-flex align-items-center justify-content-between">
                        <div>
                          <h6>Treatment is good</h6>
                          <p className="mb-0">Skin Treatment </p>
                        </div>
                        <div>
                          <Link to="#" className="btn iq-bg-primary">
                            Open
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md="12">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Education</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <div className="table-responsive">
                      <Table className="mb-0" borderless>
                        <thead>
                          <tr>
                            <th scope="col">Year</th>
                            <th scope="col">Degree</th>
                            <th scope="col">Institute</th>
                            <th scope="col">Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2010</td>
                            <td>MBBS, M.D</td>
                            <td>University of Wyoming</td>
                            <td>
                              <span className="badge badge-success">
                                Distinction
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>2014</td>
                            <td>M.D. of Medicine</td>
                            <td>Netherland Medical College</td>
                            <td>
                              <span className="badge badge-success">
                                Distinction
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="12">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Experience</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <div className="table-responsive">
                      <Table className="mb-0" borderless>
                        <thead>
                          <tr>
                            <th scope="col">Year</th>
                            <th scope="col">Department</th>
                            <th scope="col">Position</th>
                            <th scope="col">Hospital</th>
                            <th scope="col">Feedback</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2014 - 2018</td>
                            <td>MBBS, M.D</td>
                            <td>Senior Docter</td>
                            <td>Midtown Medical Clinic</td>
                            <td>
                              <span className="badge badge-primary">Good</span>
                            </td>
                          </tr>
                          <tr>
                            <td>2018 - 2020</td>
                            <td>M.D. of Medicine</td>
                            <td>Associate Prof.</td>
                            <td>Netherland Medical College</td>
                            <td>
                              <span className="badge badge-success">
                                excellence
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
    </Fragment>
  );
}

export default DoctorProfile;
