/**
 * Created by DAVIM on 07/04/2017.
 */
import React, {Component} from 'react';

class DatePickerCols extends Component{
    render() {
        /**
         * @todo need to wrap my head around the math to get the offset working properly
         * @type {number}
         */
        let intOffset = parseInt(this.props.offset);
        let cols = 7*intOffset;
        let colArray = [];
        let counter = [1,8,17,25];
        for(let count=counter[intOffset-1];count<=cols;count++){
            colArray.push(<div className="calendar-col" key={count}>{count}</div>);
        }
        return(
            <div className="calendar-row" key={this.props.offset}>
            {colArray}
            </div>
        )
    }
}

export default DatePickerCols;