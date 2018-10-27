import {ACTIONS, SORTING} from '../data/constants';

export const color = (color = {}, action) => {  
    switch(action.type){
        case ACTIONS.ADD_COLOR:
            return {                  
                id: action.id,
                title: action.title,
                color: action.color,
                rating: action.rating,
                timestamp: action.timestamp
            };
        case ACTIONS.RATE_COLOR:        
            return (color.id === action.id)? {...color, rating:action.rating} : color;
        default:
            return color;        
    }
};

export const colors = (colors = [], action) => {
    switch(action.type){
        case ACTIONS.ADD_COLOR:                   
            return [...colors, color({}, action)];
        case ACTIONS.RATE_COLOR:
            return colors.map( colr => color(colr, action));
        case ACTIONS.REMOVE_COLOR:
            return colors.filter(colr => colr.id !== action.id);
        default:
             return colors;           
    }
};

export const sort = (sort = SORTING.DATE, action) => {
    switch(action.sort){
        case SORTING.TITLE:
            return SORTING.TITLE;
        case SORTING.RATING:
            return SORTING.RATING;
        case SORTING.DATE:
            return SORTING.DATE;
        default: 
            return SORTING.DATE;
    }
}