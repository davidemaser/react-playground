/**
 * Created by DAVIM on 05/04/2017.
 */
import React, {Component} from 'react';
import AjaxLoader from './AjaxLoader';

class Body extends Component {
    render(){
        return (
            <AjaxLoader subreddit="reactjs"/>
        )
    }
}

export default Body;