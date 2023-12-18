import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white">Furnitureshopee</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
            We are your one-stop destination for all your home décor needs. 
            Our mission is to provide high-quality furniture and 
            home décor items that help you transform your living spaces into your dream home.
            </p>

            
            </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Beds and Matresses</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Sofas and Recliners</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Living</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Dinning</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Homewares</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Furniture</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                <Link to="/Paymentpage">Payment Options</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/Privacy">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>Shop c2, 459 Roscommon Road, Clendon Park, Clendon, Auckland 2103 </p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+ 64 22 063 7040</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>furnitureshopee@hotmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-time-line">
                      
                    </i>
                  </span>
                  <p>WORKING HOURS: MON-FRI (9AM-5:30PM) SAT-SUN - (10AM-4PM) </p>
                </ListGroupItem>
                
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
