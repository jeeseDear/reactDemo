import {combineReducers} from 'redux'
import headLineList from './headLine'
import getHeaderCity from './headerCity'
import {getRbList,getXyList,getCzList,getTtList,getCnList} from './homeInfo'
export default combineReducers({
  headLineList,
  getRbList,getXyList,getCzList,getTtList,getCnList,
  getHeaderCity
})