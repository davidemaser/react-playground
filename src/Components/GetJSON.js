/**
 * Created by David Maser on 12/04/2017.
 */
import React, {Component} from 'react';
import Request from 'react-http-request';
import HeroBanner from "../Widgets/HeroBanner";

class GetJSON extends Component{
    render() {
        return (
            <Request
                url={this.props.url}
                method={this.props.method}
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
                            let data = result.body[this.props.target];
                            return <HeroBanner language={this.props.language} json={data}/>;
                        }
                    }
                }
            </Request>
        );
    }
}

export default GetJSON;