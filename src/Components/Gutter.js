/**
 * Created by DAVIM on 06/04/2017.
 */
import React, {Component} from 'react';
import './Stylesheets/GutterStyles.css'

class Gutter extends Component {
    constructor(props){
        super(props);
        this.state = {
            view: 'closed',
            position:'left'
        };
    }

    render(){
        let sectionClass = 'nav-gutter '+this.state.view;
        return (
            <nav className={sectionClass}>
                {this.state.position}
            </nav>
        )
    }
}

export default Gutter;