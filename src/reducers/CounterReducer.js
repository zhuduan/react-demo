import * as ActionTypes from '../actions/ActionTypes.js';

const CounterReducer = (state, action) => {

    const {name} = action;

    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {
                ...state,
                [name] : { ...state[name], value : state[name].value + 1}
            };
        case ActionTypes.DECREMENT:
            return {...state, [name] : { ...state[name], value : state[name].value - 1} };
        case ActionTypes.TOGGLE_ACTIVE:
            return {...state, [name] : { ...state[name], active : !state[name].active } };
        default:
            return state;
    }
}

export default CounterReducer;

