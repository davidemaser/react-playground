/**
 * Created by DAVIM on 06/04/2017.
 */
import React, {Component} from 'react';
import './Stylesheets/GutterStyles.css'

class Gutter extends Component {

    constructor(props){
        super(props);
        this.state = {
            view: this.props.view,
            position:'left'
        };
        this.handleNavStateChange = this.doNavLayout.bind(this);
    }

    doNavLayout(){
        this.state.view === 'open' ? this.setState({view : 'closed'}) : this.setState({view : 'open'});
        console.log('hit '+this.state.view)
    }

    render(){
        let sectionClass = 'nav-gutter '+this.state.view;
        return (
            <nav className={sectionClass}>
                <section className="interaction">
                    <div className="burgermenu" onClick={this.handleNavStateChange}>click {this.state.position}</div>
                </section>
                {this.state.position}
            </nav>
        )
    }
}

export default Gutter;