import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter >
  
  <App />
 
</BrowserRouter>

  
);


// import React from 'react';
// import axios from 'axios';
// import ReactDOM from 'react-dom/client';
// import {BrowserRouter} from 'react-router-dom'
// import App from './App';


// const Item = localStorage.getItem('user');
// if (Item) {
//   const data = JSON.parse(Item);
//   axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
// <BrowserRouter >
  
//   <App />
 
// </BrowserRouter>

  
// );