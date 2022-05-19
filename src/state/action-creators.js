import * as types from './action-types'
import axios from "axios"

const URL = "https://www.boredapi.com/api/activity"

export function getActivity() {
  // const activity = res.data.activity
  return function(dispatch) {
    axios.get(URL)
    .then(res =>  {
      dispatch({type: types.GET_ACTIVITY, payload: res.data.activity})
    })
    .catch(err => {console.error(err)})
  }
}