import React, {Component} from 'react';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Prefooter from './Components/PreFooter';
import Gutter from "./Components/Gutter";
import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form";
import Provinces from "./Widgets/ProvinceList";

class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            appView: 'gutter-hidden'
        };
    }

    componentWillMount() {
        window.dataDump= {}
    }

    changeModalState() {
        this.state.appView === 'gutter-hidden' ? this.setState({appView: 'gutter-visible'}): this.setState({appView: 'gutter-hidden'})
    }

    render() {
        let appClass = 'App '+this.state.appView;
        return (
            <section className={appClass}>
                    <Gutter onStateChange={this.changeModalState.bind(this)}/>
                <section className="app-body">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>{this.props.intro}</h2>
                    </div>
                    <p className="App-intro">
                        Call the following view into scope <strong>{this.props.initialView}</strong>
                    </p>
                    <Body />
                    <Form view="default"/>
                    <Provinces country="CA"/>
                    <Prefooter />
                    <Footer />
                </section>
            </section>
        );
    }
}

export default App;
