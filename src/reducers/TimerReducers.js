import { SET_ACTIVE, SET_REST } from "../actions";

const TimerReducer = (state = { activeLength:120, restLength:60}, action) => {
    switch(action.type) {
        case SET_ACTIVE:
            return {
                ...state,
                activeLength: action.payload.length
            }
        case SET_REST:
            return {
                ...state, 
                restLength: action.payload.length
            }
        default:
            return state

    }
}
export default TimerReducer