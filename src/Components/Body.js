/**
 * Created by DAVIM on 05/04/2017.
 */
import React, {Component} from 'react';
import AjaxLoader from './AjaxLoader';

export default class Body extends Component {
    render(){
        return (
            <AjaxLoader datasource="http://www.reddit.com/r/reactjs" log="false"/>
        )
    }
}
