import {
  CURRENT_INTERVAL_INCREMENT,
  RESET_CURRENT_INTERVAL,
  SET_INTERVAL,
} from "../actions";

const intervalReducer = (
  state = { totalInterval: 10, currentInterval: 0 },
  action
) => {
  switch (action.type) {
    case SET_INTERVAL:
      return {
        ...state,
        totalInterval: action.payload.intervalCount,
      };
    case CURRENT_INTERVAL_INCREMENT:
      return {
        ...state,
        currentInterval: state.currentInterval + 1,
      };
    case RESET_CURRENT_INTERVAL:
      return {
        ...state,
        currentInterval: 0,
      };
    default:
      return state;
  }
};

export default intervalReducer;
