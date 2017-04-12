/**
 * Created by David Maser on 05/04/2017.
 */
import React, {Component} from 'react';
import Column from '../Components/Column'
import './Stylesheets/FooterStyles.css';

export default class FooterSection extends Component {
    constructor(props) {
        super(props);
        this.handleDateUpdate = this.handleDateUpdate.bind(this);
    }

    handleDateUpdate() {
        this.setState({currentDateValue: new Date()});
    }

    render() {
        return (
            <section className="footer">
                <Column count="4"/>
            </section>
        );
    }
}
