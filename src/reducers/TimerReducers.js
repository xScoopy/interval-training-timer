import { CURRENT_ACTIVE, CURRENT_REST, CURRENT_ACTIVE_DECREMENT, SET_ACTIVE, SET_REST, CURRENT_REST_DECREMENT, INCREMENT_ELAPSED } from "../actions";

const TimerReducer = (state = { activeLength:120, restLength:60, totalElapsed:0}, action) => {
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
        case CURRENT_ACTIVE:
            return {
                ...state,
                currentActive: action.payload.length
            }
        case CURRENT_REST:
            return {
                ...state,
                currentRest: action.payload.length
            }
        case CURRENT_ACTIVE_DECREMENT:
            return {
                ...state,
                currentActive: state.currentActive - 1
            }
        case CURRENT_REST_DECREMENT:
            return {
                ...state,
                currentRest: state.currentRest - 1
            }
        case INCREMENT_ELAPSED:
            return {
                ...state,
                totalElapsed: state.totalElapsed + 1
            }
        default:
            return state

    }
}
export default TimerReducer