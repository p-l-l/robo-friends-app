import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants';

const initialStateSearch = {
    searchField : ''
}

//Reduce recieves an action, check the type of action, then knows that for this action, what state property you want affect with the value (payload) of the action.
export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload } //Spread operator instead of Object.Assign
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true } //Spread operator instead of Object.Assign
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, isPending: false } //Spread operator instead of Object.Assign
        case REQUEST_ROBOTS_FAILED:
            return { ...state, error: action.payload, isPending: false } //Spread operator instead of Object.Assign
        default:
            return state;
    }
}