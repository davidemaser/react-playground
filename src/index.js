import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DateTime from "./Widgets/DateTime";

import './index.css';


ReactDOM.render(
    <div>
        <App />

        <DateTime view="Time"/>
    </div>,
    document.getElementById('root')
);
