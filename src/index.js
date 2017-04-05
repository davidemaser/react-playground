import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Components/Footer';
import Prefooter from './Components/PreFooter';
import './index.css';
import PreFooterSection from "./Components/PreFooter";

ReactDOM.render(
    <div>
        <App />
        <Prefooter />
        <Footer />
    </div>,
  document.getElementById('root')
);
