/**
 * Created by DAVIM on 11/04/2017.
 */
import React, {Component} from 'react';
//import axios from 'axios';
import Json from '../Data/HeroBanner/Data/banner.json'

class HeroBanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        };

        this.triggerViewState = this.setViewState.bind(this);
    }
    /*componentDidMount() {
        axios({
            method:'get',
            url:'../Data/HeroBanner/Data/banner.json',
            params: {},
            responseType:'json'
        }).then(res => {
            console.log(res.data);
            const posts = res.data.hero.map(obj => obj.data);
            this.setState({ posts });
        });
    }
        */
    buildLayout(){
        const data = Json.hero;
        let dataDump = [];
        for(let d in data){
            dataDump.push(<div>{data[d].heroId}</div>)
        }
        return (
            <div>
                {dataDump}
            </div>
        )

    }

    setViewState(){
        //function to handle clicks on the hero banner
    }

    render(){
        return (<section className="hero-banner" onClick={this.triggerViewState}>{this.buildLayout()}</section>)
    }
}

export default HeroBanner;