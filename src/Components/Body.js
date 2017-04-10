/**
 * Created by DAVIM on 05/04/2017.
 */
import React, {Component} from 'react';
import AjaxLoader from './AjaxLoader';

class Body extends Component {
    render(){
        return (
            <AjaxLoader datasource="http://www.reddit.com/r/reactjs" log="false"/>
        )
    }
}

export default Body;