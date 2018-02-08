import Header from 'components/Header'
import {connect} from 'react-redux'
import {getCity } from 'redx/actions/headerCity'
const mapStateToProps = (state)=>{
  return {
    getHeaderCity:state.getHeaderCity
    
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    City:()=> dispatch(getCity())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
