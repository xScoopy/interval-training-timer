export const SET_INTERVAL = "SET_INTERVAL";
export const setInterval = (intervalCount) => {
  return {
    type: SET_INTERVAL,
    payload: { intervalCount },
  };
};

export const CURRENT_INTERVAL_INCREMENT = "CURRENT_INTERVAL_INCREMENT";
export const currentIntervalIncrement = () => {
  return {
    type: CURRENT_INTERVAL_INCREMENT,
  };
};

export const SET_ACTIVE = "SET_ACTIVE";
export const setActive = (length) => {
  return {
    type: SET_ACTIVE,
    payload: { length },
  };
};

export const SET_REST = "SET_REST";
export const setRest = (length) => {
  return {
    type: SET_REST,
    payload: { length },
  };
};

export const CURRENT_ACTIVE = "CURRENT_ACTIVE";
export const currentActive = (length) => {
  return {
    type: CURRENT_ACTIVE,
    payload: { length },
  };
};

export const CURRENT_REST = "CURRENT_REST";
export const currentRest = (length) => {
  return {
    type: CURRENT_REST,
    payload: { length },
  };
};

export const TOGGLE_TRAINING = "TOGGLE_TRAINING";
export const toggleTraining = () => {
  return {
    type: TOGGLE_TRAINING,
  };
};

export const UPDATE = "UPDATE"
export const update = (deltaTime) => {
  return {
    type: UPDATE,
    payload: { deltaTime }
  }
}

export const SET_TOTAL_REMAINING = "SET_TOTAL_REMAINING"
export const setTotalRemaining = (totalRemaining) => {
  return {
    type: SET_TOTAL_REMAINING,
    payload: { totalRemaining }
  }
}
