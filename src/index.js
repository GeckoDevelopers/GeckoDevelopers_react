import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Navbar from './navbar/navbar';
import Home from './home/home';
import Full from "./full_services/full"

// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// const rootElement = document.getElementById("root");


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/full" element={<Full/>} />
    </Routes>
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