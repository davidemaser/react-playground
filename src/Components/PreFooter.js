/**
 * Created by DAVIM on 05/04/2017.
 */
import React, { Component } from 'react';
import Column from '../Components/Column'
import './Stylesheets/PreFooterStyles.css';

class PreFooterSection extends Component{
        render(){
            return (
                <div className="prefooter">
                    <Column count="3" />
                </div>
            );
        }
}

export default PreFooterSection;