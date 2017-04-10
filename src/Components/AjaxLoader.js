/**
 * Created by DAVIM on 05/04/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';

class AjaxLoader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios({
            method:'get',
            url:`${this.props.datasource}.json`,
            params: {},
            responseType:'json'
        }).then(res => {
                window.dataDump = res.data;
                if(this.props.log === 'true'){
                    console.log(res.data)
                }
                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({ posts });
            });
    }
    render() {
        return (
            <div>
                <h1>{`${this.props.datasource}`}</h1>
                <ul>
                    {this.state.posts.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default AjaxLoader;