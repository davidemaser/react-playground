/**
 * Created by David Maser on 06/04/2017.
 */
import React, {Component} from 'react';
import './Stylesheets/GutterStyles.css'

class Gutter extends Component {
    constructor(props){
        super(props);
        this.state = {
            position:'left'
        };
    }

    render(){
        return (
            <nav className="nav-gutter">
                <section className="interaction">
                    <div className="burgermenu" onClick={this.props.onStateChange}>&nbsp;</div>
                </section>
            </nav>
        )
    }
}

export default Gutter;