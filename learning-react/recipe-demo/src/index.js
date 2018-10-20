import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu';
import data from './data/recipes';
//import Summary from './components/summary';

window.React = React;
ReactDOM.render(<Menu recipes={data} />, document.getElementById('react-container'));

