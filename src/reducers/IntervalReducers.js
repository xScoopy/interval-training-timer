import { CURRENT_INTERVAL_INCREMENT, SET_INTERVAL } from "../actions";

const intervalReducer = (state = {totalInterval:10, currentInterval:4}, action) => {
    switch(action.type) {
        case SET_INTERVAL:
            return {
                ...state, 
                totalInterval : action.payload.intervalCount
            }
        case CURRENT_INTERVAL_INCREMENT:
            return {
                ...state,
                currentInterval: state.currentInterval + 1
            }
        default:
            return state
    }
}

export default intervalReducer