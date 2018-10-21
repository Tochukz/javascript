import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {v4} from 'uuid';
import AddColorForm from './components/add-color-form';
import ColorList from './components/color-list';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        colors:props.colors
      };
      this.addColor = this.addColor.bind(this);
      this.rateColor = this.rateColor.bind(this);
      this.removeColor = this.removeColor.bind(this);
  }
  addColor(title, color){
    const colors = [
        ...this.state.colors,
        {
          id: v4(),
          title,
          color,
          rating:0
        }
    ];
    this.setState({colors});
  }
  rateColor(id, rating){
      const colors = this.state.colors.map( color => (color.id !== id)? color : {...color, rating})     
      this.setState({colors});
  }
  removeColor(id){
    //  const colors = this.state.colors.filter( color => color.id !== id );
    //  this.setState({colors});
    //Or
    this.setState(prevState => ({colors: prevState.colors.filter(color => color.id !== id) }));
  }
  render(){
    const {addColor, rateColor, removeColor} = this;
    const {colors} = this.state;      
    return (
      <div className="App">
           <AddColorForm onNewColor={addColor} />
           <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
      </div>
    );
  }
}

export default App;
