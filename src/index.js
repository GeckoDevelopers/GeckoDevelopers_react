import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import "./i18n";

import Navbar from "./components/navbar/navbar";
import Home from "./views/home/home";
import Footer from "./components/footer/footer";

import Full from "./views/servizi/full";
import Individuals from "./views/servizi/individuals";
import Companies from "./views/servizi/companies";
import Design from "./views/servizi/design";
import Support from "./views/servizi/support";
import ContentCreation from "./views/servizi/content_creation";
import Marketing from "./views/servizi/marketing";
import ServiziMain from "./views/servizi_mainpage/servizi_mainpage";
import AboutUs from "./views/about_us/about_us";

import ServiceMainCard from "./components/serviceMainCard/serviceMainCard"

import Portfoliomore from "./views/portfolio_more/portfolio_more";

// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// const rootElement = document.getElementById("root");

ReactDOM.render(
    <Suspense fallback={<div>Loading ~~~</div>}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/full" element={<Full />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/design" element={<Design />} />
        <Route path="/support" element={<Support />} />
        <Route path="/content_creation" element={<ContentCreation />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/discover_more" element={<Portfoliomore />} />
        <Route path="/servizi_mainpage" element={<ServiziMain />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/test" element={<ServiceMainCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
