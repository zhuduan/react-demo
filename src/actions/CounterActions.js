import * as ActionTypes from './ActionTypes.js';


export const increment = (name) => {
    return {
        type : ActionTypes.INCREMENT,
        name : name
    }
};

export const decrement = (name) => {
    return {
        type : ActionTypes.DECREMENT,
        name : name
    }
};

export const toggleActive = (name) => {
    return {
        type : ActionTypes.TOGGLE_ACTIVE,
        name : name
    }
}
