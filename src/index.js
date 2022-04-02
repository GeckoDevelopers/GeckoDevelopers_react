import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Navbar from './navbar/navbar';
import Jumbo from './Jumbo/jumbo';
import About_us from './about_us/about_us';
import Services from './services/services';

// import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// const rootElement = document.getElementById("root");


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Jumbo />
    <About_us />
    <Services />
  </BrowserRouter>,
  document.getElementById('root')
);