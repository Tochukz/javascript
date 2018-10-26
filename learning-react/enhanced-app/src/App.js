import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Users from './users';
import MemberList from './components/member-list';
import Clock from './components/clock';
import HiddenMessages from './components/hidden-messages';
import Display from './components/display';
import CountryList from './components/country-list';
//import Timeline from './components/timeline';
import historicSkiingDates from './data/historic-skiing-dates';
import RandomMeUsers from './components/random-me-users';
import CountryDropDown from './components/country-drop-down';
import PopupButton from './components/popup-button';


class App extends Component {
  render() {
    const target = document.getElementById('clock');
    const age = 23;
    return (     
      <div className="App">
        <Clock onClose={() => ReactDOM.unmountComponentAtNode(target)}/>
        <hr />
        <HiddenMessages />
        <hr />
        <Display truthy={(age > 21)}>
          <p>This display component can only contain one child.<br />
            More than one child will make react to through  an error.</p>          
        </Display>
        <hr />
        <Users title="Users List" />
        <hr />        
        <CountryDropDown param={'/rest/v1/all'} selected="United States"/>       
        <hr />
        <PopupButton hidden={true} txt="toggle popup">
            <h3>Hidden Content</h3>
            <p>This content will star off hidden</p>
        </PopupButton>
        <hr />
        <RandomMeUsers param={'?results=10'}/>
        <hr />
        <MemberList count={5} />            
        <hr />
        <CountryList />    
      </div>
    );
  }
}

export default App;
