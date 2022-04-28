export const SET_INTERVAL = 'SET_INTERVAL'
export const setInterval = (intervalCount) => {
    return{
        type: SET_INTERVAL,
        payload: { intervalCount }
    }
}

export const CURRENT_INTERVAL_INCREMENT = 'CURRENT_INTERVAL_INCREMENT'
export const currentIntervalIncrement = () => {
    return{
        type: CURRENT_INTERVAL_INCREMENT,
    }
}

export const SET_ACTIVE = 'SET_ACTIVE'
export const setActive = (length) => {
    return {
        type: SET_ACTIVE,
        payload: { length }
    }
}

export const SET_REST = 'SET_REST'
export const setRest = (length) => {
    return {
        type: SET_REST,
        payload: { length }
    }
}