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
            visible:false
        };
        this.handleCalendarStateChange = this.toggleCalendarState.bind(this);
    }

    toggleCalendarState(){
        this.state.visible === true ? this.setState({visible:false}) : this.setState({visible:true});
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
            return (
                rowString
            )
        }
        function buildColumns(){
            let columnString = '';
            let c = 1;
            for(;c<=monthLayout.columns;c++){
                columnString += '<td>'+c+'</td>';
            }
            return (
                columnString
            )
        }
        return (
            <div className="date-selector">
                {buildRows()}
            </div>
        )
    }

    render() {
        return (
            <div className="datePicker">
                <input className={this.state.visible} type="text" data-handles-click="wait" onClick={this.handleCalendarStateChange} />
                <div className={this.state.visible} >{this.buildCalendarLayout()}</div>
            </div>
        );
    }
}

export default DatePicker;