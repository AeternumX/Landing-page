
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Products from "@/pages/Products";
import TermsOfUse from "@/pages/TermsOfUse";
import Privacy from "@/pages/Privacy";
import Cookies from "@/pages/Cookies";
import TeachlyzeSignup from "@/pages/TeachlyzeSignup";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/teachlyze-signup" element={<TeachlyzeSignup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
