
import { connect } from "react-redux"
import HomeAd from 'components/HomeAd'
import * as ACTION from 'redx/actions/headLine'
const mapStateToProps = (state)=>({
  headLineList:state.headLineList
})
const mapDispatchToProps = (dispatch)=>({
  getHeadLineList:()=> dispatch(ACTION.getHeadLine())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeAd)