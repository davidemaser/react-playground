import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Stylesheets/index.css';

ReactDOM.render(
    <div>
        <App intro="Use a prop to pass the intro" initialView="default" />

    </div>,
    document.getElementById('root')
);
