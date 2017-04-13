/**
 * Created by David Maser on 12/04/2017.
 */
import React, {Component} from 'react';
import './Stylesheets/Modal.css';

class Modal extends Component{

    constructor(props){
        super(props);
        /**
         * Defines the default states of the modal. Some parameters are passed in the objects props
         * @type {{visible: boolean, response: boolean, format: string, buttons: boolean, action: null, preventActions: boolean, title, body, link}}
         */
        this.state = {
            visible:false,
            response:false,
            format:'full',
            buttons:true,
            action:null,
            preventActions:true,
            title:this.props.title,
            body:this.props.body,
            link:this.props.link
        };
        this.showHideModal = this.changeModalVisibility.bind(this);
        this.getResponse = this.changeModalResponse.bind(this);
    }

    buildModal(){
        let modalButtons = this.state.buttons === true ? <div className="modal-buttons"><button className="modal-confirm" onClick={() => this.getResponse(true)}>Ok</button><button className="modal-reject" onClick={() => this.getResponse(false)}>No</button></div> : null;
        let modalContent = <div className="modal-content"><div className="modal-title">{this.state.title}</div><div className="modal-body">{this.state.body}</div>{modalButtons}</div>;
        let modalDisplay = this.state.format === 'full' ? <div className="modal-full">{modalContent}</div> : <div className="modal-compact">{modalContent}</div>;
        return(
            <div>
            <div className="modal-cta">{this.buildCta()}</div>
            <div className="modal-wrapper" data-view={this.state.visible}><div className="modal-mask">{null}</div>{modalDisplay}</div>
            </div>
        )
    }

    buildCta(){
        let modalCta = <button onClick={this.showHideModal}>Click me</button>;
        return(
            modalCta
        )
    }

    changeModalVisibility(){
        this.state.visible === true ? this.setState({visible:false}) : this.setState({visible:true})
    }

    changeModalResponse(res){
        this.setState({response:res});
        this.changeModalVisibility();
        if(this.state.link !== undefined && this.state.link !== '' && res === true){
            window.location.href = this.state.link;
        }
        console.log(res,this.state.response)
    }

    render(){
        return(<section>{this.buildModal()}</section>);
    }
}

export default Modal;