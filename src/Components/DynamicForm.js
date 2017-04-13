/**
 * Created by David Maser on 11/04/2017.
 */
import React, {Component} from 'react';
import Json from '../Data/Forms/default.json';
/**
 * dynamic form object, that loads the form object definitions
 * form an external jason file.
 */
export default class DynamicForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            type:this.props.form //get the form state from the passed props
        }
    }

    /**
     * Builds the actual form object from the loaded json data
     * @returns {Array}
     */
    buildFormFields() {

        let formArray = [];
        let formFields = Json[this.state.type];
        let keyCounter = 0;
        //let layoutFormat = Json.layout[this.state.type];
        for(let f in formFields){
            let defText = formFields[f].default === 'label' ? formFields[f].label : formFields[f].default;
            let classString = formFields[f].class !== null ? formFields[f].class : '';
            let formType = formFields[f].type !== null ? formFields[f].type : '';
            switch(formFields[f].tag){
                case 'input':
                    formArray.push(<label key={keyCounter+f} htmlFor={formFields[f].id}>{formFields[f].label}<input id={formFields[f].id} className={classString} placeholder={defText} maxLength={formFields[f].length} type={formType} /></label>);
                    break;
                case 'textarea':
                    formArray.push(<label key={keyCounter+f} htmlFor={formFields[f].id}>{formFields[f].label}<textarea id={formFields[f].id} className={classString} placeholder={defText} maxLength={formFields[f].length} rows={formFields[f].rows} type={formType} /></label>);
                    break;
                case 'select':
                    let listObject = formFields[f].list;
                    let listObjectArray = [];
                    for(let l in listObject){
                        listObjectArray.push(<option key={keyCounter+f+l} value={listObject[l].value}>{listObject[l].text}</option>)
                    }
                    formArray.push(<label key={keyCounter+f} htmlFor={formFields[f].id}>{formFields[f].label}<select id={formFields[f].id} className={classString} default={defText}>{listObjectArray}</select></label>);
                    break;
                case 'checkbox':
                    let checkSelected = formFields[f].checked === true ? 'checked' : '';
                    formArray.push(<label key={keyCounter+f} htmlFor={formFields[f].id}>{formFields[f].label}<input id={formFields[f].id} className={classString} type={formType} defaultChecked={checkSelected} /></label>);
                    break;
                case 'checkbox_group':
                    let checkGroup = formFields[f].group;
                    let checkGroupArray = [];
                    for(let c in checkGroup){
                        let checkSelected = checkGroup[c].checked === true ? 'checked' : '';
                        checkGroupArray.push(<label key={keyCounter+f+c} htmlFor={checkGroup[c].id}>{checkGroup[c].label}<input type="checkbox" name={formFields[f].name} id={checkGroup[c].id} className={checkGroup[c].class} value={checkGroup[c].value} key={keyCounter+c} defaultChecked={checkSelected} /></label>)
                    }
                    formArray.push(<fieldset key={keyCounter+f} id={formFields[f].id} className={classString}><legend>{formFields[f].title}</legend>{checkGroupArray}</fieldset>);
                    break;
                case 'radio_group':
                    let radioGroup = formFields[f].group;
                    let radioGroupArray = [];
                    for(let r in radioGroup){
                        let radioSelected = radioGroup[r].checked === true ? 'checked' : '';
                        radioGroupArray.push(<label key={keyCounter+f+r} htmlFor={radioGroup[r].id}>{radioGroup[r].label}<input type="radio" name={formFields[f].name} id={radioGroup[r].id} defaultChecked={radioSelected} /></label>)
                    }
                    formArray.push(<fieldset key={keyCounter+f} id={formFields[f].id}><legend>{formFields[f].title}</legend>{radioGroupArray}</fieldset>);
                    break;
                case 'button':
                    formArray.push(<button key={keyCounter+f} className={formFields[f].class} id={formFields[f].id}>{formFields[f].label}</button>);
                    break;
                default:

                    break;
            }
            keyCounter++;
        }
        return (
            formArray
        )
    }

    render(){
        if(Json.instructions[this.state.type].wrap === true){
            return(
                <form action={Json.instructions[this.state.type].action} method={Json.instructions[this.state.type].method}>
                    {this.buildFormFields()}
                </form>
            )
        }else{
            return(
                <div>
                    {this.buildFormFields()}
                </div>
            )
        }

    }
}