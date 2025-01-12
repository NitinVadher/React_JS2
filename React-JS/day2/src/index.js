import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Webb from './web';
import Skillss from './skills';
import Pr from './projects';
import Conn from './contact';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
  <App/>
  <Webb/>
  <Skillss/>
  <Pr/>
  <Conn/>
 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
