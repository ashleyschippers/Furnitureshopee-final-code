import React, { useState, useEffect } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";


import "../styles/shop.css";

import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";


import { Link } from "react-router-dom";
import { motion } from "framer-motion";



import heroImg from "../assets/images/Winz-Quote.jpg";

import Services from "../services/Services";


import counterImg from "../assets/images/counter-timer-img.png";





const Winz = () => {
  const { data: products, loading } = useGetData("products");

  const [winzProducts, setWinzProducts] = useState([]);


  useEffect(() => {
    const filteredWinzProducts = products.filter(
      item => item.category === "Winz"
    );



    setWinzProducts(filteredWinzProducts);

  }, [products]);
 

  return (
    <Helmet title="Winz Catalogue">
      <CommonSection title="Winz Catalogue" />

      <section>
        <Container>
          <Row>
          <Col lg="12" className="text-center">
          <h3 className="text-center mb-4">We are a registered supplier for Work and Income.</h3>

                <p className="home__subtitle">
                We are happy to provide free WINZ / Work and Income and Social Welfare quotes.
                WINZ quotes for furniture and other goods are available at our store or you can ask for the same ONLINE through our Contact Form or 
                Winz Form available on our website.</p>

            

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/Contact">Contact Us</Link>
                </motion.button>
            
              
            </Col>

          </Row>
        </Container>
      </section>


      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">WINZ Catalogue</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading....</h5>
            ) : (
              <ProductsList data={winzProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Winz;