export const NEW_TIMER = 'NEW_TIMER'
export const addTimer = (intervals, activeTime, restTime) => {
    return {
        type: NEW_TIMER,
        payload: { intervals, activeTime, restTime }
    }
}

export const UPDATE = "UPDATE"
export const update = (deltaTime) => {
  return {
    type: UPDATE,
    payload: { deltaTime }
  }
}