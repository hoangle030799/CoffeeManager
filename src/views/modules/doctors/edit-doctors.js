import React, { Fragment } from 'react'
import { Button, Col, Form, Nav, Row, Tab } from 'react-bootstrap'

// Image
import user from "../../../assets/images/user/11.png"
import { Link } from 'react-router-dom'

const EditDoctors = () => {
  return (
    <Fragment>
        <Tab.Container defaultActiveKey={'personal-information'}>
            <Row>
            <Col lg='12'>
                     <div className="iq-card">
                        <div className="iq-card-body p-0">
                           <div className="iq-edit-list">
                              <Nav as={'ul'} className="iq-edit-profile nav nav-pills list-inline mb-0 flex-md-row flex-column">
                                 <Nav.Item as={'li'} className="col-md-3 p-0">
                                    <Nav.Link className="nav-link" data-bs-toggle="pill" eventKey="personal-information">
                                    Personal Information
                                    </Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item as={'li'} className="col-md-3 p-0">
                                    <Nav.Link className="nav-link" data-bs-toggle="pill" eventKey="chang-pwd">
                                    Change Password
                                    </Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item as={'li'} className="col-md-3 p-0">
                                    <Nav.Link className="nav-link" data-bs-toggle="pill" eventKey="emailandsms">
                                    Email and SMS
                                    </Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item as={'li'} className="col-md-3 p-0">
                                    <Nav.Link className="nav-link" data-bs-toggle="pill" eventKey="manage-contact">
                                    Manage Contact
                                    </Nav.Link>
                                 </Nav.Item>
                              </Nav>
                           </div>
                        </div>
                     </div>
                  </Col>
                  <Col lg='12' >
                     <div className="iq-edit-list-data">
                        <Tab.Content>
                           <Tab.Pane className="fade show" eventKey="personal-information" role="tabpanel">
                              <div className="iq-card">
                                 <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                       <h4 className="card-title">Personal Information</h4>
                                    </div>
                                 </div>
                                 <div className="iq-card-body">
                                    <Form>
                                       <Row className="form-group align-items-center">
                                          <Col md='12'>
                                             <div className="profile-img-edit">
                                                <img className="profile-pic" src={user} alt="profile-pic" />
                                                <div className="p-image">
                                                   <i className="ri-pencil-line upload-button"></i>
                                                   <input className="file-upload" type="file" accept="image/*"/>
                                                </div>
                                             </div>
                                          </Col>
                                       </Row>
                                       <Row className="align-items-center">
                                          <Form.Group className="form-group col-sm-6">
                                             <Form.Label className='mb-0' htmlFor="fname">First Name:</Form.Label>
                                             <Form.Control type="text" className="my-2" id="fname" defaultValue="Bini" />
                                          </Form.Group>
                                          <Form.Group className=" form-group col-sm-6">
                                             <Form.Label className='mb-0' htmlFor="lname">Last Name:</Form.Label>
                                             <Form.Control type="text" className=" my-2" id="lname" defaultValue="Jets" />
                                          </Form.Group>
                                          <Form.Group className="form-group col-sm-6">
                                             <Form.Label className='mb-0' htmlFor="uname">User Name:</Form.Label>
                                             <Form.Control type="text" className=" my-2" id="uname" defaultValue="Bini@01" />
                                          </Form.Group>
                                          <Form.Group className="form-group col-sm-6">
                                             <Form.Label className='mb-0' htmlFor="cname">City:</Form.Label>
                                             <Form.Control type="text" className=" my-2" id="cname" defaultValue="Atlanta" />
                                          </Form.Group>
                                          <Form.Check className="form-group col-sm-6">
                                             <label  className="d-block">Gender:</label>
                                             <div className="custom-control custom-radio d-inline-flex me-3">
                                                <Form.Check.Input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" defaultChecked />
                                                <Form.Label  className="custom-control-label mb-0" htmlFor="customRadio6"> Male </Form.Label>
                                             </div>
                                             <div className="custom-control custom-radio d-inline-flex me-3">
                                                <Form.Check.Input type="radio" id="customRadio7" name="customRadio1" className="custom-control-input" />
                                                <Form.Label  className="custom-control-label mb-0" htmlFor="customRadio7"> Female </Form.Label>
                                             </div>
                                          </Form.Check>
                                          <Form.Group className="form-group col-sm-6">
                                             <Form.Label className='mb-0' htmlFor="dob">Date Of Birth:</Form.Label>
                                             <Form.Control  className="my-2" id="dob" defaultValue="1984-01-24" />
                                          </Form.Group>
                                          <div className="form-group col-sm-6">
                                             <Form.Label className='mb-0'>Marital Status:</Form.Label>
                                             <select className="form-control my-2" id="exampleFormControlSelect1">
                                                <option defaultValue>Single</option>
                                                <option>Married</option>
                                                <option>Widowed</option>
                                                <option>Divorced</option>
                                                <option>Separated </option>
                                             </select>
                                          </div>
                                          <Form.Group className="form-group col-sm-6">
                                             <Form.Label className='mb-0'>Age:</Form.Label>
                                             <select className="form-control my-2" id="exampleFormControlSelect2">
                                                <option>12-18</option>
                                                <option>19-32</option>
                                                <option defaultValue>33-45</option>
                                                <option>46-62</option>
                                                <option>63 {'>'} </option>
                                             </select>
                                          </Form.Group>
                                          <Form.Group className="form-group col-sm-6">
                                             <label >Country:</label>
                                             <select className="form-control my-2" id="exampleFormControlSelect3">
                                                <option>Caneda</option>
                                                <option>Noida</option>
                                                <option defaultValue>USA</option>
                                                <option>India</option>
                                                <option>Africa</option>
                                             </select>
                                          </Form.Group>
                                          <Form.Group className="form-group col-sm-6">
                                             <Form.Label className='mb-0'>State:</Form.Label>
                                             <select className="form-control my-2" id="exampleFormControlSelect4">
                                                <option>California</option>
                                                <option>Florida</option>
                                                <option defaultValue>Georgia</option>
                                                <option>Connecticut</option>
                                                <option>Louisiana</option>
                                             </select>
                                          </Form.Group>
                                          <Form.Group className="form-group col-sm-12">
                                             <Form.Label className='mb-0'>Address:</Form.Label>
                                             <div className="form-floating overflow-hidden">
                                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:100}}></textarea>
                                                <Form.Label htmlFor="floatingTextarea2">37 Cardinal Lane
                                                   Petersburg, VA 23803
                                                   United States of America
                                                   Zip Code: 85001</Form.Label>
                                              </div>
                                          </Form.Group>
                                       </Row>
                                       <Button type="submit" className="btn btn-primary me-2 mt-3">Submit</Button>
                                       <Button type="reset" variant='none' className="btn iq-bg-danger mt-3">cancel</Button>
                                    </Form>
                                 </div>
                              </div>
                           </Tab.Pane>
                           <Tab.Pane className="fade" eventKey="chang-pwd" role="tabpanel">
                              <div className="iq-card">
                                 <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                       <h4 className="card-title">Change Password</h4>
                                    </div>
                                 </div>
                                 <div className="iq-card-body">
                                    <Form>
                                       <Form.Group className='form-group'>
                                          <Form.Label htmlFor="cpass" className='mb-0'>Current Password:</Form.Label>
                                          <Link to="#" className="float-end">Forgot Password</Link>
                                          <Form.Control type="Password" className="my-2" id="cpass" />
                                       </Form.Group>
                                       <Form.Group className='form-group'>
                                          <Form.Label htmlFor="npass" className='mb-0'>New Password:</Form.Label>
                                          <Form.Control type="Password" className="my-2" id="npass" />
                                       </Form.Group>
                                       <Form.Group className='form-group'>
                                          <Form.Label htmlFor="vpass" className='mb-0'>Verify Password:</Form.Label>
                                          <Form.Control type="Password" className="my-2" id="vpass" />
                                       </Form.Group>
                                       <Button type="submit" className="btn btn-primary me-2">Submit</Button>
                                       <Button type="reset" variant='none' className="btn iq-bg-danger">cancel</Button>
                                    </Form>
                                 </div>
                              </div>
                           </Tab.Pane>
                           <Tab.Pane className="fade" eventKey="emailandsms" role="tabpanel">
                              <div className="iq-card">
                                 <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                       <h4 className="card-title">Email and SMS</h4>
                                    </div>
                                 </div>
                                 <div className="iq-card-body">
                                    <Form>
                                       <Form.Group className='form-group'>
                                          <Row className="align-items-center">
                                             <Col md='3'>
                                                <Form.Label htmlFor="emailnotification" className='mb-0'>Email Notification:</Form.Label>
                                             </Col>
                                             <Col md='9'>
                                                <Form.Check className="custom-control custom-switch">
                                                   <Form.Check.Input type="checkbox" className="custom-control-input" id="emailnotification" defaultChecked />
                                                   <Form.Label className="custom-control-label" htmlFor="emailnotification"></Form.Label>
                                                </Form.Check>
                                             </Col>
                                          </Row>
                                       </Form.Group>
                                       <Form.Group className='form-group'>
                                          <Row className="align-items-center">
                                             <Col md='3'>
                                                <Form.Label htmlFor="smsnotification" className='mb-0'>SMS Notification:</Form.Label>
                                             </Col>
                                             <Col md='9'>
                                                <Form.Check className="custom-control custom-switch">
                                                   <Form.Check.Input type="checkbox" className="custom-control-input" id="smsnotification" defaultChecked />
                                                   <Form.Label className="custom-control-label" htmlFor="smsnotification"></Form.Label>
                                                </Form.Check>
                                             </Col>
                                          </Row>
                                       </Form.Group>
                                       <Form.Group className='form-group'>
                                          <Row className=" align-items-center">
                                             <Col md='3'>
                                                <Form.Label htmlFor="npass" className='mb-0'>When To Email</Form.Label>
                                             </Col>
                                             <Col md='9'>
                                                <Form.Check className="custom-control custom-checkbox">
                                                   <Form.Check.Input type="checkbox" className="custom-control-input" id="email01" />
                                                   <Form.Label className="custom-control-label" htmlFor="email01">You have new notifications.</Form.Label>
                                                </Form.Check>
                                                <Form.Check className="custom-control custom-checkbox">
                                                   <Form.Check.Input type="checkbox" className="custom-control-input" id="email02" />
                                                   <Form.Label className="custom-control-label" htmlFor="email02">You're sent a direct message</Form.Label>
                                                </Form.Check>
                                                <Form.Check className="custom-control custom-checkbox">
                                                   <Form.Check.Input type="checkbox" className="custom-control-input" id="email03" defaultChecked/>
                                                   <Form.Label className="custom-control-label" htmlFor="email03">Someone adds you as a connection</Form.Label>
                                                </Form.Check>
                                             </Col>
                                          </Row>   
                                       </Form.Group>
                                       <Form.Group className='form-group'>
                                          <Row className="align-items-center">
                                             <Col md='3'>
                                                <Form.Label htmlFor="npass" className='mb-0'>When To Escalate Emails</Form.Label>
                                             </Col>
                                             <Col md='9'>
                                                <Form.Check className="custom-control custom-checkbox">
                                                   <Form.Check.Input type="checkbox" className="custom-control-input" id="email04" />
                                                   <Form.Label className="custom-control-label" htmlFor="email04"> Upon new order.</Form.Label>
                                                </Form.Check>
                                                <div className="custom-control custom-checkbox">
                                                   <Form.Check.Input type="checkbox" className="custom-control-input" id="email05" />
                                                   <Form.Label className="custom-control-label" htmlFor="email05"> New membership approval</Form.Label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                   <Form.Check.Input type="checkbox" className="custom-control-input" id="email06" defaultChecked />
                                                   <Form.Label className="custom-control-label" htmlFor="email06"> Member registration</Form.Label>
                                                </div>
                                             </Col>
                                          </Row>
                                       </Form.Group>
                                       <Button type="submit" className="btn btn-primary me-2">Submit</Button>
                                       <Button type="reset" variant='none' className="btn iq-bg-danger">cancel</Button>
                                    </Form>
                                 </div>
                              </div>
                           </Tab.Pane>
                           <Tab.Pane className="fade" eventKey="manage-contact" role="tabpanel">
                              <div className="iq-card">
                                 <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                       <h4 className="card-title">Manage Contact</h4>
                                    </div>
                                 </div>
                                 <div className="iq-card-body">
                                    <Form>
                                       <Form.Group className='form-group'>
                                          <Form.Label htmlFor="cno" className='mb-0'>Contact Number:</Form.Label>
                                          <Form.Control type="text" className="my-2" id="cno" defaultValue="001 2536 123 458" />
                                       </Form.Group>
                                       <Form.Group className='form-group'>
                                          <Form.Label htmlFor="email" className='mb-0'>Email:</Form.Label>
                                          <Form.Control type="text" className="my-2" id="email" defaultValue="Binijone@demo.com" />
                                       </Form.Group>
                                       <Form.Group className='form-group'>
                                          <Form.Label htmlFor="url" className='mb-0'>Url:</Form.Label>
                                          <Form.Control type="text" className="my-2" id="url" defaultValue="https://getbootstrap.com" />
                                       </Form.Group>
                                       <Button type="submit" className="btn btn-primary me-2">Submit</Button>
                                       <Button type="reset" variant='none' className="btn iq-bg-danger">cancel</Button>
                                    </Form>
                                 </div>
                              </div>
                           </Tab.Pane>
                        </Tab.Content>
                     </div>
                  </Col>
            </Row>
        </Tab.Container>
    </Fragment>
  )
}

export default EditDoctors
