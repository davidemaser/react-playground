/**
 * Created by DAVIM on 12/04/2017.
 */
import React, {Component} from 'react';
import Request from 'react-http-request';
import HeroBanner from "../Widgets/HeroBanner";

export default class GetJSON extends Component{
    render() {
        return (
            <Request
                url='https://davidemaser.github.io/data/temp.json'
                method='get'
                accept='application/json'
                verbose={false}
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