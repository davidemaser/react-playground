/**
 * Created by DAVIM on 05/04/2017.
 */
import React, {Component} from 'react';
import DatePicker from "../Widgets/DatePicker";

export default class Column extends Component {
    render() {
        let myObject = [
            {
                class: "a_class_name",
                title: "a title name",
                data: "something else"
            },
            {
                class: "another_class_name",
                title: "a title name",
                data: "something else"
            }
        ];
        let columnList = Object.keys(myObject).map(function (key, index) {
            return <div key={index} className={myObject[key].class} data-attribute={myObject[key].data}>{myObject[key].title}</div>;
        });
        return (
            <div className="footerColumn" data-count={this.props.count}>
                {columnList}<DatePicker/>
            </div>
        );
    }
}