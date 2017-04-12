import React, {Component} from 'react';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Prefooter from './Components/PreFooter';
import Gutter from "./Components/Gutter";
import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form";
import Provinces from "./Widgets/ProvinceList";
import DateTime from "./Widgets/DateTime";
import UserManager from "./Components/UserEntry";
import HeroBanner from "./Widgets/HeroBanner";

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
        let appClass = 'app '+this.state.appView;
        return (
            <section className={appClass}>
                    <Gutter onStateChange={this.changeModalState.bind(this)}/>
                <section className="app-body">
                    <div className="app-header">
                        <img src={logo} className="app-logo" alt="logo"/>
                        <h2>{this.props.intro}</h2>
                    </div>
                    <p className="app-intro">
                        Call the following view into scope <strong>{this.props.initialView}</strong>
                    </p>
                    <Body />
                    <HeroBanner language="en"/>
                    <Form view="default"/>
                    <Provinces country="CA"/>
                    <Prefooter />
                    <Footer />
                    <UserManager form="login"/>
                    <UserManager form="general"/>
                    <DateTime view="Time"/>
                </section>
            </section>
        );
    }
}

export default App;
