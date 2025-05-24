import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination,Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';

// Image
import logo from "../../../assets/images/logo-white.png"
import img from "../../../assets/images/login/1.png"
import img1 from "../../../assets/images/login/2.png"
import img2 from "../../../assets/images/login/3.png"
const LoginPage = () => {
  return (
    <Fragment>
<section className="sign-in-page">
            <Container className="sign-in-page-bg mt-5 mb-md-5 mb-0 p-0">
                <Row className="row no-gutters">
                    <Col md='6' className="text-center">
                        <div className="sign-in-detail text-white">
                            <Link className="sign-in-logo mb-5" to="/"><img src={logo} className="img-fluid" alt="logo" /></Link>
                            <Swiper className="owl-carousel" autoplay={{delay:3000}} loop='true' modules={[Pagination,Autoplay]} spaceBetween={30}>
                                <SwiperSlide className="item">
                                    <img src={img} className="img-fluid mb-4" alt="logo" />
                                    <h4 className="mb-1 text-white">Manage your orders</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <img src={img1} className="img-fluid mb-4" alt="logo" />
                                    <h4 className="mb-1 text-white">Manage your orders</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <img src={img2} className="img-fluid mb-4" alt="logo" />
                                    <h4 className="mb-1 text-white">Manage your orders</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Col>
                    <Col md='6' className="position-relative">
                        <div className="sign-in-from">
                            <h1 className="mb-0">Sign in</h1>
                            <p>Enter your email address and password to access admin panel.</p>
                            <Form className="mt-4">
                                <Form.Group className='form-group'>
                                    <Form.Label htmlFor="exampleInputEmail1" className="mb-2">Email address</Form.Label>
                                    <Form.Control type="email" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email" />
                                </Form.Group>
                                <div className="d-flex justify-content-between my-2">
                                    <Form.Label htmlFor="exampleInputPassword1" className='mb-0'>Password</Form.Label>
                                    <Link to="/recover-password" className="float-end">Forgot password?</Link>
                                </div>
                                <Form.Control type="password" className="form-control mb-0" id="exampleInputPassword1" placeholder="Password" />
                                <div className="d-flex w-100 justify-content-between  align-items-center mt-3 w-100">
                                    <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                        <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <Form.Label className="custom-control-label" htmlFor="customCheck1">Remember Me</Form.Label>
                                    </div>
                                    <Button type="submit" className="btn btn-primary float-end">Sign in</Button>
                                </div>
                                <div className="sign-info">
                                    <span className="dark-color d-inline-block line-height-2">Don't have an account? <Link to="/sign-up">Sign up</Link></span>
                                    <ul className="iq-social-media">
                                        <li><Link to="#"><i className="ri-facebook-box-line"></i></Link></li>
                                        <li><Link to="#"><i className="ri-twitter-line"></i></Link></li>
                                        <li><Link to="#"><i className="ri-instagram-line"></i></Link></li>
                                    </ul>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>    
    </Fragment>
  )
}

export default LoginPage
