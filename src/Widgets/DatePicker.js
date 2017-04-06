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
        function buildRows(){
            let rowString = '';
            let r = 1;
            for(;r<=monthLayout.rows;r++){
                rowString += '<tr>'+buildColumns(r)+'</tr>';
            }
            return rowString;
        }
        function buildColumns(){
            let columnString = '';
            let c = 1;
            for(;c<=monthLayout.columns;c++){
                columnString += '<td>'+c+'</td>';
            }
            return columnString;
        }
        return (
            '<div class="date-selector">'+buildRows()+'</div>'
        )
    }

    render() {
        return (
            <div className="datePicker">
                <input type="text" data-handles-click="wait" defaultValue={this.buildCalendarLayout()} />
            </div>
        );
    }
}

export default DatePicker;