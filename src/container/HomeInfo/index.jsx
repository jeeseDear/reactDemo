import { connect } from 'react-redux'
import HomeInfo from 'components/HomeInfo'
import getHomeInfo from 'redx/actions/homeInfo'
import {receiveMore} from 'redx/actions/homeInfo'

const mapStateToProps = (state)=>({
    getRbList:state.getRbList,
    getCzList:state.getCzList,
    getCnList:state.getCnList
})
const mapDispatchToProps = (dispatch)=>{
  return {
    getHomeInfoList:()=> dispatch(getHomeInfo()),
    receiveMore:(page)=>dispatch(receiveMore(page))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeInfo)