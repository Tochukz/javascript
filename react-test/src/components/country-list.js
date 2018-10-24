import React from 'react';
import fetch from 'isomorphic-fetch';

class CountryList extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            countryNames:[],
            loading: false
        };

    }
    componentDidMount(){
        this.setState({loading: true});
        fetch('https://restcountries.eu/rest/v1/all')
             .then(response => response.json())
             .then(objArray => objArray.map(country => country.name))
             .then(countryNames => this.setState({countryNames, loading:false}) );
    }
    render(){
        const {countryNames, loading} = this.state;
        return (
            <div className="country-list">               
                (loading)? <p>Loading country names....</p> : 
                           (!countryNames.length)? <p> No country names</p> :
                                <ol>
                                    {
                                        countryNames.map((countryName, i) => 
                                               <li key={i}>{countryName}</li>
                                            )
                                        }
                                </ol>
               
            </div>
        );
    }
}

export default CountryList;