/**
 * Created by David Maser on 12/04/2017.
 */
import React, {Component} from 'react';
import './Stylesheets/Modal.css';
/**
 * the modal class creates a two tier object on the page
 * The modal is created on the page and by default it is
 * hidden. A button is created at the point where the
 * class is called. The button onClick event opens the
 * modal view with the information passed in the props
 * The modal has it's own button components that displays
 * confirm and refuse buttons
 */
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
            buttons:{
                display:true,
                type:'YES/NO' // Can be YES or YES/NO
            },
            action:null,
            preventActions:true,
            title:this.props.title,
            body:this.props.body,
            link:this.props.link,
            cta:this.props.cta
        };
        this.showHideModal = this.changeModalVisibility.bind(this);
        this.getResponse = this.changeModalResponse.bind(this);
    }

    buildModal(){
        let modalButtons = <div className="modal-buttons">
                <button className="modal-confirm" onClick={() => this.getResponse(true)}>Ok</button>
            {this.state.buttons.type === 'YES/NO' ?
                <button className="modal-reject" onClick={() => this.getResponse(false)}>No</button>
            : '' }
            </div>;
        let modalContent = <div className="modal-content"><div className="modal-title">{this.state.title}</div><div className="modal-body">{this.state.body}</div>{this.state.buttons.display === true ? modalButtons : ''}</div>;
        let modalDisplay = this.state.format === 'full' ? <div className="modal-full">{modalContent}</div> : <div className="modal-compact">{modalContent}</div>;
        return(
            <div>
            <div className="modal-cta">{this.buildCta()}</div>
            <div className="modal-wrapper" data-view={this.state.visible}><div className="modal-mask">{null}</div>{modalDisplay}</div>
            </div>
        )
    }

    buildCta(){
        let modalCta = <button onClick={this.showHideModal}>{this.state.cta}</button>;
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