import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Users from './users';
import MemberList from './components/member-list';
import Clock from './components/clock';


class App extends Component {
  render() {
    const target = document.getElementById('clock');
    return (     
      <div className="App">
        <Clock onClose={() => ReactDOM.unmountComponentAtNode(target)}/>
        <hr />
        <Users title="Users List" />
        <hr />
        <MemberList count={5} />        
      </div>
    );
  }
}

export default App;
