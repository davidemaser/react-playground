import React, {Component} from 'react';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Prefooter from './Components/PreFooter';
import Gutter from "./Components/Gutter";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    componentWillMount() {
        window.dataDump = {}
    }
    render() {
        return (
            <section className="App">
                <Gutter/>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Body />
                <Prefooter />
                <Footer />
            </section>
        );
    }
}

export default App;
