import {
  CURRENT_ACTIVE,
  CURRENT_REST,
  SET_ACTIVE,
  SET_REST,
  TOGGLE_TRAINING,
  UPDATE,
  SET_TOTAL_REMAINING,
} from "../actions";

const TimerReducer = (
  state = {
    activeLength: 10,
    restLength: 5,
    currentActive: 10,
    currentRest: 5,
    totalElapsed: 0,
    totalRemaining: 150,
    isStarted: false,
    isActive: true,
  },
  action
) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        activeLength: action.payload.length,
      };
    case SET_REST:
      return {
        ...state,
        restLength: action.payload.length,
      };
    case CURRENT_ACTIVE:
      return {
        ...state,
        currentActive: action.payload.length,
      };
    case CURRENT_REST:
      return {
        ...state,
        currentRest: action.payload.length,
      };

    case TOGGLE_TRAINING:
      return {
        ...state,
        isStarted: !state.isStarted,
      };
    case SET_TOTAL_REMAINING:
      return {
        ...state,
        totalRemaining: action.payload.totalRemaining,
      };
    case UPDATE:
      if (state.isActive) {
        if (state.currentActive <= 10) {
          return {
            ...state,
            isActive: !state.isActive,
            currentActive: state.activeLength,
            totalElapsed: (state.totalElapsed += action.payload.deltaTime),
            totalRemaining: (state.totalRemaining -= action.payload.deltaTime),
          };
        }
        return {
          ...state,
          currentActive: (state.currentActive -= action.payload.deltaTime),
          totalElapsed: (state.totalElapsed += action.payload.deltaTime),
          totalRemaining: (state.totalRemaining -= action.payload.deltaTime),
        };
      } else {
        if (state.currentRest <= 10) {
          if (state.totalRemaining <= 10) {
            return {
              ...state,
              isStarted: false,
            };
          }
          return {
            ...state,
            isActive: !state.isActive,
            currentRest: state.restLength,
            totalElapsed: (state.totalElapsed += action.payload.deltaTime),
            totalRemaining: (state.totalRemaining -= action.payload.deltaTime),
          };
        }
        return {
          ...state,
          currentRest: (state.currentRest -= action.payload.deltaTime),
          totalElapsed: (state.totalElapsed += action.payload.deltaTime),
          totalRemaining: (state.totalRemaining -= action.payload.deltaTime),
        };
      }

    default:
      return state;
  }
};
export default TimerReducer;
