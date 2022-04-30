import { SWAP_CURRENT_ACTIVITY, TOGGLE_TRAINING } from "../actions";

const activityReducer = (state = {currentlyActive: true, isStarted: false}, action) => {
  switch (action.type) {
    case SWAP_CURRENT_ACTIVITY:
      return {
          ...state,
          currentlyActive: !state.currentlyActive
      }
    case TOGGLE_TRAINING:
        return {
            ...state,
            isStarted: !state.isStarted
        }
    default:
      return state;
  }
};

export default activityReducer;
