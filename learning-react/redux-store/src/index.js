import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addColor, rateColor, removeColor, sortColors} from './functions/actions';
import {SORTING} from './data/constants'
//import store from './store';
import storeFactory from './store-factory';
import store from './store-factory';

//const store = storeFactory(true);


ReactDOM.render(<App />, document.getElementById('root'));


//console.log(`Initial number of Colors: ${store.getState().colors.length}`);
store.subscribe( () => console.log(`Next no of colors: ${store.getState().colors.length}`));
//console.log(store.getState().colors.map(color => color.title));
//console.log(store.getState().colors.map(color => color.rating));
//console.log(store.getState().sort);

//console.log("::::Working with state::::");
store.dispatch({
    type: "ADD_COLOR",
    id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
    title: "Looki Pink",
    color: "#F142FF",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
});
store.dispatch( addColor('redish', '#fa2101'));


//console.log(store.getState().colors.map(color => color.title));

store.dispatch( rateColor( "2222e1p5-3abl-0p523-30e4-8001l8yf2222", 5));
//console.log(store.getState().colors.map(color => color.rating));

store.dispatch( sortColors( SORTING.TITLE));
//console.log(store.getState().sort);

store.dispatch( removeColor("2222e1p5-3abl-0p523-30e4-8001l8yf2222"));

//console.log(store.getState().colors.map(color => color.title));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
