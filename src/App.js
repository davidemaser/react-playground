import React, {Component} from 'react';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Prefooter from './Components/PreFooter';
import Gutter from "./Components/Gutter";
import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form"; //static form loaded from internal array
import Provinces from "./Widgets/ProvinceList";
import DateTime from "./Widgets/DateTime";
import DynamicForm from "./Components/DynamicForm"; //dynamic form loaded from a JSON file
import Modal from "./Widgets/Modal";
import GetJSON from "./Components/GetJSON";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            appView: 'gutter-hidden',
            defaultLink:'index.html' //set a default jump link for the modal
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
                    <Form view="default"/>
                    <Provinces country="CA"/>
                    <Prefooter />
                    <Footer />
                    <Modal format="full" title="This is the title" body="This would be the body of the modal" link={this.state.defaultLink}/>
                    <DynamicForm form="login"/>
                    <DynamicForm form="general"/>
                    <DateTime view="Time"/>
                    <GetJSON url="https://davidemaser.github.io/data/temp.json" method="get" language="en" target="hero"/>
                </section>
            </section>
        );
    }
}
