import { combineReducers } from 'redux'
import * as types from './action-types'

const initialCount = ""
function activity(activityState = initialCount, action) {
  // note how a reducer just tracks one specific slice now
  switch (action.type) {
    case types.GET_ACTIVITY: {
      const newActivity = action.payload
      return newActivity
    }
    default:
      return activityState
  }
}

export default combineReducers({
  activity, // each reducer now only a slice of application state
})