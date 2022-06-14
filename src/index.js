import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Navbar from './components/navbar/navbar';
import Home from './views/home/home';
import Footer from "./components/footer/footer"

import Full from "./views/servizi/full";
import Individuals from "./views/servizi/individuals"
import Companies from './views/servizi/companies';
import Design from './views/servizi/design';
import Support from './views/servizi/support';
import ContentCreation from './views/servizi/content_creation';
import Marketing from './views/servizi/marketing';

import Portfoliomore from './views/portfolio_more/portfolio_more';

// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Routes path="/services">
        <Route path="/full" element={<Full/>} />
        <Route path="/individuals" element={<Individuals/>}/>
        <Route path="/companies" element={<Companies/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/content-creation" element={<ContentCreation/>}/>
        <Route path="/marketing" element={<Marketing/>}/>
      </Routes> */}
      <Route path="/full" element={<Full/>} />
      <Route path="/individuals" element={<Individuals/>}/>
      <Route path="/companies" element={<Companies/>}/>
      <Route path="/design" element={<Design/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/content-creation" element={<ContentCreation/>}/>
      <Route path="/marketing" element={<Marketing/>}/>
      <Route path="/discover_more" element={<Portfoliomore/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);


/*  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter} from "react-router-dom";

import Home from "./home/home"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App/>
    <Home></Home>
  </BrowserRouter>,
  rootElement
); */