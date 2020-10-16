import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
    searchField : ''
}

//Reduce recieves an action, check the type of action, then knows that for this action, what state property you want affect with the value (payload) of the action.
export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload } //Spread operator instead of Object.Assign
    }
}