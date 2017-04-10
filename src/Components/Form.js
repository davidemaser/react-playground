/**
 * Created by DAVIM on 10/04/2017.
 */
import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view:'default'
        }
    }

    render() {
        let formObject = [{tag:'input',type: 'input', defaultValue: 'Placeholder', name: 'name', ID: ''},
            {
            tag:'select',
            type: null,
            defaultValue: null,
            name: 'name',
            ID: '',
            options: [{label: 'label', value: 'value'}]
        }];
        let formArray = [];
        for(let f in formObject){
            switch(formObject[f].tag) {
                case 'input':
                    formArray.push(<input key={f} type={formObject[f].type} id={formObject[f].ID} name={formObject[f].name} placeholder={formObject[f].defaultValue} />);
                    break;
                case 'select':
                    let optionArray = [];
                    for(let o in formObject[f].options){
                        optionArray.push(<option key={o} value={formObject[f].options[o].value}>{formObject[f].options[o].label}</option>)
                    }
                    formArray.push(<select key={f} id={formObject[f].ID} name={formObject[f].name}>{optionArray}</select>);
                    break;
            }
        }
        return (
            <div>
                {formArray}
            </div>
        )
    }
}

export default Form;