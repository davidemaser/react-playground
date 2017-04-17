/**
 * Created by DAVIM on 17/04/2017.
 */
import React, {Component,PropTypes} from 'react';
import NavGrandChildren from "./NavGrandChildren";
class NavChildren extends Component{
    constructor(props){
        super(props);
        this.state={
            lang:this.props.lang
        }
    }

    buildChildren(){
        let childData = this.props.json;
        let childArray = [];
        for(let c in childData){
            console.log('child',childData[c]);
            if(!Array.isArray(childData[c])) {
                childArray.push(
                    <div className="nav-item child" key={c} data-title={childData[c].title[this.state.lang]}>
                        {childData[c].title[this.state.lang]}
                        {Array.isArray(childData[c].child) ? <NavGrandChildren json={childData[c].child} lang={this.state.lang}/> : '' }
                    </div>
                )
            }
        }
        return (
            childArray
        )
    }

    render(){
        return(
            <div className="nav-dropdown">
            {this.buildChildren()}
            </div>
        )
    }
}
NavChildren.PropTypes = {
    json:PropTypes.object,
    lang:PropTypes.string
};
export default NavChildren;