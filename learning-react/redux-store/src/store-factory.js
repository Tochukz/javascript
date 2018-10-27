import {createStore, combineReducers, applyMiddleware} from 'redux';
import {color, colors, sort} from './functions/reducers';
import colorsData from './data/colors-data';

/* A middleware */
const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatched", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
};

/*Another middleware */
const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
};


// const storeFactory = (initialState = colorsData) => 
//     applyMiddleware(logger, saver)(createStore)
//     (combineReducers({color, colors, sort}), (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']) : colorsData);

const storeFactory = createStore(combineReducers({color, colors, sort}), colorsData, applyMiddleware(logger, saver));
export default storeFactory;
