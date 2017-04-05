/**
 * Created by DAVIM on 05/04/2017.
 */
import React, {Component} from 'react';
import './Stylesheets/DatePicker.css'

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    buildCalendarLayout(){
        let monthLayout = {
            columns : 7,
            rows : 4,
            readable : this.state.date.toDateString()
        };
        let i = 1;
        let cString = '';
        for(;i<=monthLayout.columns;i++){
            cString += '<td>'+i+'</td>';
        }
        return (
            cString
        )
    }

    render() {
        return (
            <div className="datePicker">
                <input type="text" data-handles-click="wait" defaultValue={this.buildCalendarLayout()} onClick={this.buildCalendarLayout()} />
            </div>
        );
    }
}

export default DatePicker;