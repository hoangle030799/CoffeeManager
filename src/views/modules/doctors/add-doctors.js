import React, { Fragment } from "react";
import { Col, Form, Row } from "react-bootstrap";
import {  Link } from "react-router-dom";

// Image
import user1 from "../../../assets/images/user/11.png";

const AddDoctors = () => {
  return (
    <Fragment>
        <Row>
          <Col lg="3">
          <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">Add New User</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <form>
                              <div className="form-group">
                                 <div className="add-img-user profile-img-edit">
                                    <img className="profile-pic img-fluid" src={user1} alt="profile-pic" />
                                    <div className="p-image">
                                       <Link to='#' className="upload-button btn iq-bg-primary">File Upload</Link>
                                       <input className="file-upload" type="file" accept="image/*" />
                                    </div>
                                 </div>
                                 <div className="img-extension mt-3">
                                    <div className="d-inline-block align-items-center">
                                       <span>Only</span>
                                       <Link to='#'>.jpg</Link>
                                       <Link to='#'>.png</Link>
                                       <Link to='#'>.jpeg</Link>
                                       <span>allowed</span>
                                    </div>
                                 </div>
                              </div>
                              <Form.Group className="form-group">
                                 <label>User Role:</label>
                                 <select className="form-control my-2" id="selectuserrole">
                                    <option>Select</option>
                                    <option>Surgery</option>
                                    <option>Gastroenterologist</option>
                                    <option>Endocrinologist</option>
                                    <option>Orthopaedic surgeon</option>
                                    <option>Cardiologist </option>
                                 </select>
                              </Form.Group>
                              <Form.Group className="form-group">
                                 <Form.Label className="mb-0" htmlFor="furl">Facebook Url:</Form.Label>
                                 <Form.Control type="text" className="form-control my-2" id="furl" placeholder="Facebook Url" />
                              </Form.Group>
                              <Form.Group className="form-group">
                                 <Form.Label className="mb-0" htmlFor="turl">Twitter Url:</Form.Label>
                                 <Form.Control type="text" className="form-control my-2" id="turl" placeholder="Twitter Url" />
                              </Form.Group>
                              <Form.Group className="form-group">
                                 <Form.Label className="mb-0" htmlFor="instaurl">Instagram Url:</Form.Label>
                                 <Form.Control type="text" className="form-control my-2" id="instaurl" placeholder="Instagram Url" />
                              </Form.Group>
                              <Form.Group className="form-group">
                                 <Form.Label className="mb-0" htmlFor="lurl">Linkedin Url:</Form.Label>
                                 <Form.Control type="text" className="form-control my-2" id="lurl" placeholder="Linkedin Url" />
                              </Form.Group>
                           </form>
                        </div>
                     </div>
          </Col>
          <Col lg='9'>
                     <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                           <div className="iq-header-title">
                              <h4 className="card-title">New User Information</h4>
                           </div>
                        </div>
                        <div className="iq-card-body">
                           <div className="new-user-info">
                              <Form>
                                 <Row>
                                    <Form.Group className="col-md-6">
                                       <Form.Label className="mb-0" htmlFor="fname">First Name:</Form.Label>
                                       <Form.Control type="text" className="form-control my-2" id="fname" placeholder="First Name" />
                                    </Form.Group>
                                    <div className="form-group col-md-6">
                                       <Form.Label className="mb-0" htmlFor="lname">Last Name:</Form.Label>
                                       <Form.Control type="text" className="form-control my-2" id="lname" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <Form.Label className="mb-0" htmlFor="add1">Street Address 1:</Form.Label>
                                       <Form.Control type="text" className="form-control my-2" id="add1" placeholder="Street Address 1" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <Form.Label className="mb-0" htmlFor="add2">Street Address 2:</Form.Label>
                                       <Form.Control type="text" className="form-control my-2" id="add2" placeholder="Street Address 2" />
                                    </div>
                                    <div className="form-group col-md-12">
                                       <Form.Label className="mb-0" htmlFor="cname">Department Name:</Form.Label>
                                       <Form.Control type="text" className="form-control my-2" id="cname" placeholder="Department Name" />
                                    </div>
                                    <div className="form-group col-sm-12">
                                       <Form.Label className="mb-0">Country:</Form.Label>
                                       <select className="form-control my-2" id="selectcountry">
                                          <option>Select Country</option>
                                          <option>Caneda</option>
                                          <option>Noida</option>
                                          <option >USA</option>
                                          <option>India</option>
                                          <option>Africa</option>
                                       </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                       <Form.Label className="mb-0" htmlFor="mobno">Mobile Number:</Form.Label>
                                       <Form.Control type="text" className="form-control my-2" id="mobno" placeholder="Mobile Number" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <Form.Label className="mb-0" htmlFor="altconno">Alternate Contact:</Form.Label>
                                       <Form.Control type="text" className="form-control my-2" id="altconno" placeholder="Alternate Contact" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <Form.Label className="mb-0" htmlFor="email">Email:</Form.Label>
                                       <Form.Control type="email" className="form-control my-2" id="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <Form.Label className="mb-0" htmlFor="pno">Pin Code:</Form.Label>
                                       <Form.Control type="text" className="form-control my-2" id="pno" placeholder="Pin Code" />
                                    </div>
                                    <div className="form-group col-md-12">
                                       <Form.Label className="mb-0" htmlFor="city">Town/City:</Form.Label>
                                       <Form.Control type="text" className="form-control my-2" id="city" placeholder="Town/City" />
                                    </div>
                                 </Row>
                                 <hr />
                                 <h5 className="mb-3">Security</h5>
                                 <div className="row">
                                    <div className="form-group col-md-12">
                                       <Form.Label className="mb-0" htmlFor="uname">User Name:</Form.Label>
                                       <Form.Control type="text" className="form-control my-2" id="uname" placeholder="User Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <Form.Label className="mb-0" htmlFor="pass">Password:</Form.Label>
                                       <Form.Control type="password" className="form-control my-2" id="pass" placeholder="Password" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <Form.Label className="mb-0" htmlFor="rpass">Repeat Password:</Form.Label>
                                       <Form.Control type="password" className="form-control my-2" id="rpass" placeholder="Repeat Password " />
                                    </div>
                                 </div>
                                <div className="custom-control custom-checkbox mb-4">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Enable Two-Factor-Authentication</label>
                                 </div>
                                 <button type="submit" className="btn btn-primary">Add New User</button>
                              </Form>
                           </div>
                        </div>
                     </div>
                  </Col>
        </Row>
    </Fragment>
  );
};

export default AddDoctors;
