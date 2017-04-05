import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Prefooter from './Components/PreFooter';
import './index.css';

ReactDOM.render(
    <div>
        <App />
        <Body />
        <Prefooter />
        <Footer />
    </div>,
    document.getElementById('root')
);
