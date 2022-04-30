import { combineReducers } from 'redux'
import intervalReducer from './IntervalReducers'
import TimerReducer from './TimerReducers'
import activityReducer from './ActivityReducers'

export default combineReducers({
    interval: intervalReducer,
    timers: TimerReducer,
    activity: activityReducer
})