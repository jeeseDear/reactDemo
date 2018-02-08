import axios from 'axios'
import * as actionTypes from 'common/js/headLine'
// let res = axios(`${Host}/assets/json/headline.json`)
// console.log(res.then(function(data){console.log(data)}))
function requestHeadLine(flag) {
  return {
    type: actionTypes.REQUEST_HEAD_LINE,
    isLoading: flag
  }
}

function receiveHeadLine(list) {
  return {
    type: actionTypes.RECEIVE_HEAD_LINE,
    list: list
  }
}
export const getHeadLine = () => (
  async dispatch => {
    dispatch(requestHeadLine(true))
    try {
      const res = await axios(`/assets/json/headline.json`)
      if (res.data.code )
      console.log(res)
      const list = res.data.headlines
      dispatch(receiveHeadLine(list))
    } catch (e) {
      console.log(e)
    }
  }
)
