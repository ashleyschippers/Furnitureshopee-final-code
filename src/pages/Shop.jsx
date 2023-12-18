import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";

const Shop = () => {
  const { data: products} = useGetData("products");
 

  return (
    <Helmet title="Furniture">
      <CommonSection title="Furniture" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select>
                  <option>Filter By Category</option>
                  <option value="sofas">Sofas and Recliners</option>
                  <option value="beds">Beds abd Mattresses</option>
                  <option value="living">Living</option>
                  <option value="dining">Dining</option>
                  <option value="homewares">Homewares</option>
                  <option value="winz">Winz </option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search......"
                 
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {products.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductsList data={products} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
