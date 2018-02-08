import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SpecialFood from './SpecialFood'
import CzTh from './CzTh'
import CnXh from './CnXh'
import Loading from 'components/Loading'
import './style.scss'
class HomeInfo extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.loadingMore = this.loadingMore.bind(this)
    this.debounce = this.debounce.bind(this)
    this.state = {
      page:0
     }
  }
  componentDidMount(){
    if(this.props.getRbList.length === 0){
      this.props.getHomeInfoList().then(()=>{
        console.log(this.props.getRbList)
        console.log(this.props.getCzList)
       //console.log(this.props.getCnList)
        this.setState({
          page:this.props.getCnList.page
        })
      })
    }
    window.addEventListener("scroll",this.debounce)
  }
  componentWillUnmount(){
    window.removeEventListener("scroll",this.debounce)
  }
  debounce(){
    clearTimeout(this.timerId)
    this.timerId = setTimeout(()=>{
      this.loadingMore()
    }
    , 100);
  }
  loadingMore(){
    let documentHeight = document.documentElement.scrollHeight | document.scrollHeight
    let sTop = window.pageYOffset
    let seeHeight = window.innerHeight
    if (sTop + seeHeight > documentHeight || sTop + seeHeight === documentHeight) {
      console.log(this.state.page,this.props.getCnList)
      if(this.state.page < 3){
        this.setState({
          page:this.props.getCnList.page
        })
        this.props.receiveMore(this.state.page)   
      }else{
        window.removeEventListener("scroll",this.debounce)
      }
    }
  }
  render(){
    const getRbList = this.props.getRbList
    const getCzList = this.props.getCzList
    const getCnList = this.props.getCnList
    // console.log(getCnList)
    // console.log(getRbList,getCzList)
    return (
      <div className ="Home-info">
        <SpecialFood RbList = {getRbList}/>
        { getCzList.length >0? <div><CzTh CzList = {getCzList}/> <CnXh  CnXh = {getCnList}/></div>:  <Loading />}
      </div>
    )
  }
}
export default HomeInfo