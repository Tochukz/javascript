import {createStore, combineReducers, compose} from 'redux';
import {color, colors, sort} from './functions/reducers';
import colorsData from './data/colors-data';

//const data = () => (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']) : colorsData;
const data = () => (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']) : {};
const store = createStore(
    combineReducers({color, colors, sort}), data()
);
store.subscribe( () => localStorage['redux-store'] = JSON.stringify(store.getState()));
export default store;