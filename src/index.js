import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Navbar from './navbar/navbar';
import Jumbo from './Jumbo/jumbo';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Jumbo />
  </React.StrictMode>,
  document.getElementById('root')
);