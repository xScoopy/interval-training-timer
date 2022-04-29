import { combineReducers } from 'redux'
import intervalReducer from './IntervalReducers'
import TimerReducer from './TimerReducers'

export default combineReducers({
    interval: intervalReducer,
    timers: TimerReducer
})