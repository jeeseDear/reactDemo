import React from 'react'
import {Link} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss'
class Header extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate =PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state ={
      cityName:"北京"
    }
  }
  componentDidMount(){
    if(!this.props.getHeaderCity){
      this.props.City().then(()=>{
        console.log(this.props.getHeaderCity)
      })
      
    }
    localStorage.getItem("currentCityName")?this.setState({ cityName: localStorage.getItem("currentCityName")}) :
    this.setState({ cityName:"北京" })
  }
   render(){
     return (
       <div className="root-header">
         <div>
          <Link to ="/city">
            <div className="header-city">
              <span>{this.state.cityName}</span>
              <i className="icon-angle-down"></i>
            </div>
          </Link>
          </div>
          <div className="header-search">
            <i className = "icon-search"></i>
            <input type="text" placeholder = "请输入商户名、地点"/>
          </div>
          <div className = "header-avatar"></div>
       </div>
     )
   }
}
export default Header