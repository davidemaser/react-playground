/**
 * Created by DAVIM on 07/04/2017.
 */
import React, {Component} from 'react';
import DatePickerCols from "./_DatePickerCols";

export default class DatePickerRows extends Component{
    render() {
        let rows = 4;
        let rowArray = [];
        for(let count=1;count<=rows;count++){
            rowArray.push(<DatePickerCols key={count} offset={count} />);
        }
        return(
            <div className="calendar-wrapper" key={this.props.offset}>
            {rowArray}
            </div>
        )
    }
}