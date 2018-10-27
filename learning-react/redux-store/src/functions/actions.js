import {v4} from 'uuid';
import {ACTIONS, SORTING} from '../data/constants';

/*Action Creators */
export const addColor = (title, color) => (
    {     
        type: ACTIONS.ADD_COLOR,  
        id: v4(),
        title,
        color,
        rating:0,
        timestamp: new Date().toTimeString()
    }
);

export const rateColor = (id, rating) => (
    { 
        type: ACTIONS.RATE_COLOR,  
        id, 
        rating 
    }    
);

export const removeColor = id => (
    {
        type: ACTIONS.REMOVE_COLOR,
        id
    }
);

export const sortColors = sorting => {
    switch(sorting){
        case SORTING.TITLE :
            return {
                type: ACTIONS.SORT_COLORS,
                sort: SORTING.TITLE
            };          
        case SORTING.RATING : 
            return {
                type: ACTIONS.SORT_COLORS,
                sortBy: SORTING.RATING,
            };
        case SORTING.DATE :
            return {
                type: ACTIONS.SORT_COLORS,
                sort: SORTING.DATE,
            };
        default: 
            return {
                type: ACTIONS.SORT_COLORS,
                sort: SORTING.DATE,
            };            
    }
};