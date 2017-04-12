/**
 * Created by DAVIM on 11/04/2017.
 */
import React, {Component} from 'react';
//import axios from 'axios';
import Json from '../Data/HeroBanner/Data/banner.json';
import './Stylesheets/HeroBanner.css';

export default class HeroBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            language: this.props.language,
            currentSlide:0
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
    buildHero() {
        const data = Json.hero;
        let dataDump = [];
        for (let d in data) {
            try {
                let unitParams = {
                    bgImage: {backgroundImage: 'url(' + data[d].image.url + ')'},
                    titleColor: {color: data[d].title.color},
                    titleText: data[d].title[this.state.language],
                    subTitleText: data[d].text[this.state.language],
                    buttonURL: data[d].button.url,
                    buttonLabel: data[d].button.label[this.state.language]
                };
                dataDump.push(<div data-instace={`hero-elem` + d} title="" className="hero-layout" key={d}>
                    <div className="hero-background" style={unitParams.bgImage}>
                        <div className="hero-container"><h1 className="hero-headline"
                                                            style={unitParams.titleColor}
                                                            dangerouslySetInnerHTML={{__html: unitParams.titleText}}>{null}</h1>
                            <p
                                className="hero-subtitle"
                                dangerouslySetInnerHTML={{__html: unitParams.subTitleText}}>{null}</p><a
                                href={unitParams.buttonURL}
                                className="hero-action-button">{unitParams.buttonLabel}</a>
                        </div>
                    </div>
                </div>)
            }catch(e){

            }
        }
        return (
            <div className="hero-banner">
                {dataDump}
            </div>
        )
    }

    setViewState(target) {
        this.setState({currentSlide:target+1})
    }

    render() {
        return (<section className="hero-wrapper" onClick={this.triggerViewState}>{this.buildHero()}</section>)
    }
}
