/**
 * Created by David Maser on 06/04/2017.
 */
import React, {Component} from 'react';

class DateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    render(){
        let displayMethod = this.props.view;
        switch (displayMethod) {
            case 'Date':
                return (
                    <div className="datetime date">{this.state.date.toDateString()}</div>
                );
                break;
            case 'Time':
                return (
                    <div className="datetime time">{this.state.date.toTimeString()}</div>
                );
                break;
            default :
                return (
                    <div className="datetime date">{this.state.date.toDateString()}</div>
                );
                break;
        }
    }
}

export default DateTime;