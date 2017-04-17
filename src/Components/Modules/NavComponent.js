/**
 * Created by DAVIM on 17/04/2017.
 */
import React, {Component,PropTypes} from 'react';
import NavChildren from "./NavChildren";

class NavBlock extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.json,
            lang:this.props.language
        }
    }

    buildRawParent(){
        let dataList = this.state.data;
        let dataArray = [];
        console.log(dataList);
        for(let d in dataList){

            dataArray.push(
            <ul key={d}>
                <a href={dataList[d].url[this.state.lang]}>{dataList[d].title[this.state.lang]}</a>
                {Array.isArray(dataList[d].child) ? <NavChildren json={dataList[d].child} lang={this.state.lang}/> : ''}
            </ul>
            )
        }
        return(
            dataArray
        )
    }

    render(){
        return(
            <nav>
                {this.buildRawParent()}
            </nav>
        );
    }
}
NavBlock.PropTypes = {
    data:PropTypes.object,
    lang:PropTypes.string
};
export default NavBlock;