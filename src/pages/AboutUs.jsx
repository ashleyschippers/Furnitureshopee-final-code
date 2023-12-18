import React, { useState, useEffect } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";


import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import heroImg from "../assets/images/hero-img.png";
import Services from "../services/Services";


import counterImg from "../assets/images/counter-timer-img.png";





const AboutUs = () => {
  const { data: products, loading } = useGetData("products");

  const [winzProducts, setWinzProducts] = useState([]);


  useEffect(() => {
    const filteredWinzProducts = products.filter(
      item => item.category === "Winz"
    );



    setWinzProducts(filteredWinzProducts);

  }, [products]);
 

  return (
    <Helmet title=" About Us">
      <CommonSection title="About Us" />


      <section>
        <Container>
          <Row>
          <Col lg="12" className="text-center">
          <h3 className="text-center mb-4">We are a registered supplier for Work and Income.</h3>

                <p className="text-center mb-4">
                We are happy to provide free WINZ / Work and Income and Social Welfare quotes.
                NZ quotes for furniture and other goods are available at our store or you can ask for the same ONLINE through our Contact Form or 
                Winz Form available on our website.</p>
              
            </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AboutUs;