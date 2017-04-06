/**
 * Created by DAVIM on 05/04/2017.
 */
import React, {Component} from 'react';
import Column from '../Components/Column'
import './Stylesheets/FooterStyles.css';

class FooterSection extends Component {
    constructor(props) {
        super(props);
        this.handleDateUpdate = this.handleDateUpdate.bind(this);
    }

    handleDateUpdate() {
        this.setState({currentDateValue: new Date()});
    }

    render() {
        return (
            <div className="footer">
                <Column count="4"/>
            </div>
        );
    }
}

export default FooterSection;