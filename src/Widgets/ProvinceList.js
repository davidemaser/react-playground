/**
 * Created by DAVIM on 10/04/2017.
 */
import React, {Component} from 'react';
import JsonList from '../Data/Provinces/provinces.json';

class Provinces extends Component {
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
        let provinceList = [];
        let countryFilter = this.state.country || 'all';
        for(let j in provinces){
            if(provinces[j].country === countryFilter || countryFilter === 'all'){
                provinceList.push(<option key={j} value={provinces[j].short}>{provinces[j].name}</option>);
            }
        }

        return(
            <div>
                <select name="country" onChange={this.handleCountryChange}>
                        {countries.map((m, i) =>
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

export default Provinces;