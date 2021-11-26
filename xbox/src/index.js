import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import axios from 'axios'

axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);


