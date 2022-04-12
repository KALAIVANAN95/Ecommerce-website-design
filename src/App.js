import React, { useState } from "react";
import Categories from "./components/Categories";
import Choose from "./components/Choose";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MostSold from "./components/MostSold";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Promo from "./components/Promo";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import "./scss/index.scss";

export default function App() {
  const [theme, SetTheme] = useState("dark");

  return (
    <div className="app" data-theme={theme}>
      Hello World! Welcome to React JS first project one
      <Navbar />
      <Home />
      <Services />
      <Categories />
      <Recommend />
      <Choose />
      <Products />
      <Promo />
      <MostSold />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
