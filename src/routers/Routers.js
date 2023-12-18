import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Winz from "../pages/Winz";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Privacy from '../pages/Privacy';
import Paymentpage from '../pages/Paymentpage';



import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";
import AboutUs from "../pages/AboutUs";

// import Home from '../pages/Home';
// The path prop in the <Route> component specifies the URL path that the route should match.
// id is a placeholder for specific product ID

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="winz" element={<Winz />} />
      
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
    <Route path='Paymentpage' element={<Paymentpage/>}/>
    <Route path='privacy' element={<Privacy/>}/>





      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="checkout" element={<Checkout />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProducts />} />
        <Route path="dashboard/add-product" element={<AddProducts />} />
        <Route path="dashboard/users" element={<Users />} />
        
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
