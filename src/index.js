import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Navbar from './navbar/navbar';
import Home from './home/home';


// import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// const rootElement = document.getElementById("root");


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);