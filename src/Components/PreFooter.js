/**
 * Created by David Maser on 05/04/2017.
 */
import React, { Component } from 'react';
import Column from '../Components/Column'
import './Stylesheets/PreFooterStyles.css';

export default class PreFooterSection extends Component {
    render() {
        return (
            <section className="prefooter">
                <Column count="3"/>
            </section>
        );
    }
}