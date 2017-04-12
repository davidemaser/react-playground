/**
 * Created by David Maser on 11/04/2017.
 */
import React, {Component} from 'react';
import Json from '../Data/HeroBanner/banner.json';
import './Stylesheets/HeroBanner.css';

export default class HeroBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            dataSource : this.props.json, //this can also be a static source by invoking the constant Json **see line 5
            language: this.props.language,
            currentSlide:0
        };
        this.triggerViewState = this.setViewState.bind(this);
    }

    buildHero() {
        const data = this.state.dataSource;
        let dataDump = [];
        const globals = {
            object:{
                width:parseInt(window.innerWidth,10),
                height:parseInt(window.innerHeight,10),
                units:parseInt(data.length,10),
                constrain:parseInt(window.innerWidth,10)*parseInt(data.length,10)
            },
            styles:{
                containerWidth: {width: parseInt(window.innerWidth,10)*parseInt(data.length,10)},
                nodeWidth:{width: parseInt(window.innerWidth,10)}
            }
        };
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
                dataDump.push(
                    data[d].active === true ?
                        <div onClick={this.userHasClicked.bind(null, unitParams.buttonURL)} data-click={unitParams.buttonURL} data-instace={`hero-elem` + d} style={globals.styles.nodeWidth} className="hero-layout" key={d}>
                            <div className="hero-background" style={unitParams.bgImage}>
                                <div className="hero-container">
                                    {data[d].title.showTitle === true ? <h1 className="hero-headline" style={unitParams.titleColor} dangerouslySetInnerHTML={{__html: unitParams.titleText}}>{null}</h1> : ''}
                                    {data[d].text.showSubTitle === true ? <p className="hero-subtitle" dangerouslySetInnerHTML={{__html: unitParams.subTitleText}}>{null}</p>:''}
                                    <a href={unitParams.buttonURL} className="hero-action-button">{unitParams.buttonLabel}</a>
                                </div>
                            </div>
                        </div>
                    :''
                )
            }catch(e){

            }
        }
        return (
            <div className="hero-banner" style={globals.styles.containerWidth}>
                {dataDump}
            </div>
        )
    }

    setViewState(target) {
        this.setState({currentSlide:target+1})
    }

    userHasClicked(target) {
        console.log(target)
    }

    render() {
        return (<section className="hero-wrapper" onClick={this.triggerViewState}>{this.buildHero()}</section>)
    }
}
