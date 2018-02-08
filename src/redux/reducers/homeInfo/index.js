import * as ACTIONS from 'common/js/homeInfo'
export const getRbList = (state = [],action)=>{
  switch(action.type){
    case ACTIONS.RECEIVE_RB:
      return action.list.moduleData.data.list
    default:
      return state
  }
}
export const getXyList = (state = [],action)=>{
  switch(action.type){
    case ACTIONS.RECEIVE_XYHZQ:
      return action.list.moduleData.data.list
    default:
      return state
  }
}
export const getCzList = (state = [],action)=>{
  switch(action.type){
    case ACTIONS.RECEIVE_CZTH:
      return action.list.moduleData.data.preferenceValueHuiVos      
    default:
      return state
  }
}
export const getTtList = (state = [],action)=>{
  switch(action.type){
    case ACTIONS.RECEIVE_TTLJ:
      return action.list.moduleData.data.dayHuiVos
    default:
      return state
  }
}
export const getCnList = (state = {
  page:0,
  hasMore:true,
  data:[]
},action)=>{
  switch(action.type){
    case ACTIONS.RECEIVE_CNXH:
      return state = {
        ...state,
        data:action.list.moduleData.data.guessYouVoList,
        page:action.list.moduleData.data.startNum,
        hasMore:true
      }
    case ACTIONS.GET_LIKES_MORE:
      if(action.list.moduleData !== null || action.list.moduleData.data){
        if(state.page < 3){
         return state = {
          page:action.list.moduleData.data.startNum,
          hasMore:true,
          data:[ ...state.data,...action.list.moduleData.data.guessYouVoList]
          }
        }else{
          return {
            page:action.list.moduleData.data.startNum,
            hasMore:false,
            data:[ ...state.data,...action.list.moduleData.data.guessYouVoList]
          }
        }
        
      }
      break
    default:
      return state
  }
}