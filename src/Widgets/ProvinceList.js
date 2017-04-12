/**
 * Created by DAVIM on 10/04/2017.
 */
import React, {Component} from 'react';
import JsonList from '../Data/Provinces/provinces.json';

export default class Provinces extends Component {
    constructor(props){
        super(props);
        this.state = {
            country: this.props.country
        };
        this.handleCountryChange = this.countryChange.bind(this);
    }

    countryChange(event) {
        this.setState({country: event.target.value});
    }

    render(){
        let provinces = JsonList.list;
        let countries = JsonList.options;
        let countriesList = [];
        let provinceList = [];
        let countryDefault = this.state.country || 'all'; //set default state
        let countryFilter = ['US','CA','AU']; //filter out some countries from the JSON to show only selected
        for(let j in provinces){
            if(provinces[j].country === countryDefault || countryDefault === 'all'){
                provinceList.push(<option key={j} value={provinces[j].short}>{provinces[j].name}</option>);
            }
        }
        for(let c in countries){
            if(countryFilter.indexOf(countries[c].value) > -1){
                countriesList.push(countries[c]);
            }
        }
        return(
            <div>
                <select defaultValue={this.props.country} name="country" onChange={this.handleCountryChange}>
                        {countriesList.map((m, i) =>
                                <option key={i} value={m.value}>{m.name}</option>
                        )}
                </select>
            <select>
                {provinceList}
            </select>
            </div>
        )
    }
}
