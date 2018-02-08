import * as ACTIONS from 'common/js/headerCity'

const getHeaderCity = (state,actions)=>{
  switch(actions.type){
    case ACTIONS.FAILUER_CITY:
      return "获取定位失败，请重新获取"
    case ACTIONS.HEADER_CITY:
      return actions.city
    default:
      return state =""
  }
}
export default getHeaderCity