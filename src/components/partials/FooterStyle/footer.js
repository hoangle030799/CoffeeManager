import React, { Fragment, memo } from 'react'

// react-bootstrap
import { Row, Col, Container } from 'react-bootstrap'

const Footer = memo(() => {
   return (
      <Fragment>
         <footer className="bg-white iq-footer">
            <Container fluid>
               <Row>
                  <Col lg="6" >
                     <div className="row">
                        <div className="col-auto">
                           <ul className="list-inline mb-0">
                              <li className="list-inline-item">
                                 <a
                                    href="https://www.facebook.com/groups/1443843489189850"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    Chia sẻ kinh nghiệm
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <div className="col-auto">
                           <ul className="list-inline mb-0">
                              <li className="list-inline-item">
                                 <a
                                    href="https://forms.gle/XNk5NTKt4nN3VHCGA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    Feedback
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </Col>
                  <Col lg="6" className="text-end">
                     © {new Date().getFullYear()} <span style={{ color: "#a47551", fontWeight: 600 }}>EasyCoffeeManager</span> – All rights reserved.
                  </Col>
               </Row>
            </Container>
         </footer>
      </Fragment>
   )
})

Footer.displayName = "Footer"
export default Footer