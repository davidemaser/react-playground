/**
 * Created by David Maser on 12/04/2017.
 */
import React, {Component,PropTypes} from 'react';
import Request from 'react-http-request';
import NavBlock from "./Modules/NavComponent";

class Nav extends Component{
    render() {
        let setLang = this.props.language !== '' ? this.props.language : 'en';
        let setNode = this.props.node !== '' ? this.props.node : '';
        let setMethod = this.props.method !== '' ? this.props.method: 'get';
        return (
            <Request
                url={this.props.url}
                method={setMethod}
                accept='application/json'
                verbose={false}
                timeout={5000}
            >
                {
                    ({error, result, loading}) => {
                        if (loading) {
                            return <div>loading...</div>;
                        }else if (error) {
                            return <div>Woops....</div>
                        } else {
                            let data = result.body[setNode];
                            return <NavBlock language={setLang} json={data}/>;
                        }
                    }
                }
            </Request>
        );
    }
}
Nav.PropTypes = {
    language:PropTypes.string,
    node:PropTypes.string,
    method:PropTypes.string
};
Nav.defaultProps = {
    language:'en',
    method:'GET'
};
export default Nav;