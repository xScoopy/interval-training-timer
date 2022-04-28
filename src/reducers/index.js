import { combineReducers } from 'redux'
import intervalReducer from './IntervalReducers'

export default combineReducers({
    interval : intervalReducer
})