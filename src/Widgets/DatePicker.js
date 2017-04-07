/**
 * Created by DAVIM on 05/04/2017.
 */
import React, {Component} from 'react';
import './Stylesheets/DatePicker.css'
import DatePickerRows from "./_DatePickerRows";

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            visible:false
        };
        this.handleCalendarStateChange = this.toggleCalendarState.bind(this);
    }

    toggleCalendarState(){
        this.state.visible === true ? this.setState({visible:false}) : this.setState({visible:true});
    }

    render() {
        return (
            <div className="datePicker" data-view={this.state.visible}>
                <input type="text" onClick={this.handleCalendarStateChange} />
                <DatePickerRows/>
            </div>
        );
    }
}

export default DatePicker;