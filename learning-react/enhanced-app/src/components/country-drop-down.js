import React from 'react';
import DataComponent from './data-component';

const CountrySelect = ({data, selected=""}) => 
    <select name="country" defaultValue={selected}>
        {
            data.map((country, i) => 
                <option key={i} value={country.name}>{country.name}</option>
            )
        }
    </select>


const CountryDropDown = DataComponent(CountrySelect, 'https://restcountries.eu');
export default CountryDropDown;
