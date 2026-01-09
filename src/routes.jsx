import React from "react";
import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
import Services from "./pages/Services";
import Plans from "./pages/Plans";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
// import Product from "./pages/Product";
import Product from "./modules/product/product";
import Login from "./components/auth/Login";
import RecoverPassword from "./components/auth/RecoverPassword";
import Terms from "./pages/Terms";
import Home from './modules/home/home';
import About from "./modules/about/about";

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/Product" element={<Product />} />
      {/* <Route path="/plans" element={<Plans />} /> */}
      {/* <Route path="/faq" element={<FAQ />} /> */}
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/forgot-password" element={<RecoverPassword />} /> */}
      {/* <Route path="/terms" element={<Terms />} /> */}

      {/* Optional: 404 page if you want */}
      {/* <Route path="*" element={<Home />} /> */}
    </Routes>
  );
}
