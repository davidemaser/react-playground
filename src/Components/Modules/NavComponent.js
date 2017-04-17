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
            lang:this.props.language,
            vis:false
        };
        this.handleStateChange = this.changeVisState.bind(this);
    }

    changeVisState(){
        this.state.vis === true ? this.setState({vis:false}) : this.setState({vis:true});
        this.setState({vis:true});
    }

    buildRawParent(){
        let dataList = this.state.data;
        let dataArray = [];
        for(let d in dataList){
            dataArray.push(
            <div className="nav-item parent" data-visible={this.state.vis} key={d}>
                <a onMouseOver={this.handleStateChange} onMouseOut={this.handleStateChange} href={dataList[d].url[this.state.lang]}>{dataList[d].title[this.state.lang]}</a>
                {Array.isArray(dataList[d].child) ? <NavChildren json={dataList[d].child} lang={this.state.lang}/> : ''}
            </div>
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