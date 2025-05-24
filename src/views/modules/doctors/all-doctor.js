import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

// Images
import user1 from "../../../assets/images/user/12.jpg";
import user2 from "../../../assets/images/user/13.jpg";
import user3 from "../../../assets/images/user/14.jpg";
import user4 from "../../../assets/images/user/15.jpg";
import user5 from "../../../assets/images/user/16.jpg";
import user6 from "../../../assets/images/user/17.jpg";
import user7 from "../../../assets/images/user/18.jpg";

// Link
import { Link } from "react-router-dom";

const AllDoctors = () => {
  return (
    <Fragment>
        <Row>
          <Col sm="12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Docters List</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user1}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Anna Mull</h4>
                  <p className="mb-0">Cardiologists</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user2}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Paul Molive</h4>
                  <p className="mb-0">Heart Surgeons</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user3}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Terry Aki</h4>
                  <p className="mb-0">Medicine Specialists</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user4}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Poppa Cherry</h4>
                  <p className="mb-0">Family Physicians</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user5}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Saul T. Balls</h4>
                  <p className="mb-0">Gynaecology</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user6}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Hal Appeno </h4>
                  <p className="mb-0">MD</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user7}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Polly Tech</h4>
                  <p className="mb-0">Eye Special</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user1}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Pat Agonia</h4>
                  <p className="mb-0">Therapy Special</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user2}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Barry Cade</h4>
                  <p className="mb-0">Heart Surgeons</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user3}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr.Jimmy Changa</h4>
                  <p className="mb-0">Cardiologists</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user4}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Sue Vaneer</h4>
                  <p className="mb-0">Orthopedics Special</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user5}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Monty Carlo</h4>
                  <p className="mb-0">Anesthesiologists</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user6}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Rick O'Shea</h4>
                  <p className="mb-0">General</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user7}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Bunny Joy</h4>
                  <p className="mb-0">Gynaecology</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user1}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Shonda Leer</h4>
                  <p className="mb-0">Orthopedics Special</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user2}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <h4> Dr. Ira Membrit</h4>
                  <p className="mb-0">MD</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <div className="iq-doc-social-info mt-3 mb-3">
                  <ul className="m-0 p-0 list-inline">
                    <li>
                      <Link to="#">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-twitter-fill"></i>
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="#">
                        <i className="ri-google-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-primary">
                  View Profile
                </Link>
              </div>
            </div>
          </Col>
        </Row>
    </Fragment>
  );
};

export default AllDoctors;
