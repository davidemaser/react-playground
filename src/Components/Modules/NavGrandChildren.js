/**
 * Created by DAVIM on 17/04/2017.
 */
import React, {Component,PropTypes} from 'react';
class NavGrandChildren extends Component{
    constructor(props){
        super(props);
        this.state={
            lang:this.props.lang
        }
    }

    buildGrandChildren(){
        let grandChildData = this.props.json;
        let grandChildArray = [];
        for(let c in grandChildData){
            console.log('grandchild',grandChildData[c]);
            if(!Array.isArray(grandChildData[c])) {
                grandChildArray.push(
                    <li key={c} data-title={grandChildData[c].title[this.state.lang]}>
                        {grandChildData[c].title[this.state.lang]}
                    </li>
                )
            }
        }
        return (
            grandChildArray
        )
    }

    render(){
        return(
            <ul>
            {this.buildGrandChildren()}
            </ul>
        )
    }
}
NavGrandChildren.PropTypes = {
    json:PropTypes.object,
    lang:PropTypes.string
};
export default NavGrandChildren;