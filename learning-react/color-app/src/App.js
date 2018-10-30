import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorForm from './components/color-form';
import ColorList from './components/color-list';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        colors:props.colors
      };
  }

  addColor(e){
      let _colorName, colorValue;
      e.preventDefault();
  }

  render() {
    const {colors} = this.state;  
    return (      
      <div className="App">
          <h3>Color Organizer With Redux Store</h3>
          <ColorForm></ColorForm>
          <ColorList colors={colors}></ColorList>
      </div>
    );
  }
}

export default App;
