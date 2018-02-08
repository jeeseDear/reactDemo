import * as ACTIONS from 'common/js/homeInfo'
import axios from 'axios'
const getRb = (list)=>{
  return {
    type:ACTIONS.RECEIVE_RB,
    list
  }
}
const getXyhzq = (list)=>{
  return {
    type:ACTIONS.RECEIVE_XYHZQ,
    list
  }
}
const getCzth = (list)=>{
  return {
    type:ACTIONS.RECEIVE_CZTH,
    list
  }
}
const getTtlj = (list)=>{
  return {
    type:ACTIONS.RECEIVE_TTLJ,
    list
  }
}
const getCnxh = (list)=>{
  return {
    type:ACTIONS.RECEIVE_CNXH,
    list
  }
}
// const requestLikesMore = (page)=>{
//   return {
//     type:ACTIONS.REQUEST_LIKES_MORE,
//     page
//   }
// }
const getLikesMore = (list)=>{
  return {
    type:ACTIONS.GET_LIKES_MORE,
    list
  }
}
export const receiveMore = (page)=>(
  async (dispatch)=>{
    try{
      let res = await axios(`/assets/json/likes${page}.json`)
      let moduleList = analyse(res.data.data.moduleInfoList)
      console.log(moduleList['cnxh'])
      dispatch(getLikesMore(moduleList['cnxh']))
    }catch(e){
      console.log(e)
    }
  }
)
const getHomeInfo = ()=>(
  async (dispatch)=>{
    try{
     let res = await axios(`/assets/json/homeInfo.json`)
     let moduleList = analyse(res.data.data.moduleInfoList)
     console.log(moduleList)
      dispatch(getRb(moduleList['rb']))
      dispatch(getXyhzq(moduleList['xyhzq']))
      dispatch(getCzth(moduleList['czth']))
      dispatch(getTtlj(moduleList['ttlj']))
      dispatch(getCnxh(moduleList['cnxh']))
    }
    catch(e){
      console.log(e)
    }
  }
)
const analyse = (moduleInfoList)=>{
  let objArr = {}
  Array.prototype.forEach.call(moduleInfoList,(obj)=>{
    let name = obj.moduleName
      objArr[name] = obj
   
  })
  return objArr
}
export default getHomeInfo