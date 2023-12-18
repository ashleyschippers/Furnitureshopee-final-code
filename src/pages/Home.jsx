import React, { useState, useEffect } from "react";


import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col, Form } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

import counterImg from "../assets/images/counter-timer-img.png";

import useGetData from "../custom-hooks/useGetData";
import ConvertKitForm from "convertkit-react";  




//converkit form


const Home = () => {
  const { data: products, loading } = useGetData("products");
  const MY_FORM_ID = 5917410;

  //const [products, setProducts] = useState([]);

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [sofasReclinersProducts, setSofasReclinersProducts] = useState([]);

  

  //Filtering products
  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      item => item.category === "winz"
    );

    const filteredBestSalesProducts = products.filter(
      item => item.category === "beds"
    );

    const filteredMobileProducts = products.filter(
      item => item.category === ""
    );

    const filteredWirelessProducts = products.filter(
      item => item.category === ""
    );

    const filteredSofasReclinersProducts = products.filter(
      item => item.category === "sofas"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setSofasReclinersProducts(filteredSofasReclinersProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                {/*<p className="hero__subtitle">Trending product in {year}</p> */}
                <h2>Furnitureshopee!!</h2>
                <p>
                We are your one-stop destination for all your home décor needs. Our mission is to provide high-quality furniture and home décor items that help you transform your living spaces into your dream home.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/Shop">Shop Furniture</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Beds and Mattresses </h2>
              <Col md="" className="home__subtitle">
              <p>
                We have a wide range of beds and mattresses to suit your comfort and style.
              </p>
              </Col>
              
              
             
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductsList data={bestSalesProducts} />
            )}
          </Row>
        </Container>
      </section>



      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-2 mb-2">Subcribe for more Hot Offers!</h4>
                <h3 className="text-white fs-5 mb-3"></h3>

                <ConvertKitForm  formId={MY_FORM_ID} />
              </div>
            

             {/* <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn "
              >
                <Link to="#">Submit</Link>
              </motion.button>*/} 
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
          <Col lg="12" className="text-center">
              <h2 className="section__title">Sofas and Recliners </h2>
              <Col md="" className="home__subtitle">
              <p>
                We have a wide range of sofas and recliners to suit your comfort and style.
              </p>
              </Col>
              
              
             
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductsList data={sofasReclinersProducts} />
            )}
            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductsList data={null} />
            )}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <div>
            

            </div>
          

      
            

            
          
          </Row>
        </Container>
      </section>


    </Helmet>
  );
};

export default Home;
