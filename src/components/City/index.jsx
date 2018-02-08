import React from 'react'
//import {withRouter} from 'react-router-dom'
import customHistory from 'router/historyMap'
import cityList from 'fetch/city'
import JHeader from 'components/City/subPage/JHeader'
import JHotCity from 'components/City/subPage/JHotCity'
import JList from 'components/City/subPage/JList'
import JLocation from 'components/City/subPage/JLocation'
import JMoreCity from 'components/City/subPage/JMoreCity'
import JSearch from 'components/City/subPage/JSearch'
import Loading from 'components/Loading'
import {CSSTransition} from 'react-transition-group'
import './style.scss'
class City extends React.Component{
  constructor(props){
    super(props)
    this.clickCity = this.clickCity.bind(this)
    this.clickMore = this.clickMore.bind(this)
    this.state = {
      list:{}
    }
  }
  clickCity(e){
    e.preventDefault()
    let target = e.target
    let id = target.getAttribute('data-id')
    console.log(target,id)
    let name = target.getAttribute('data-name')
    localStorage.setItem("currentCityName",name)
    localStorage.setItem("currentCityId",id)
    window.history.go(-1)
  }
  clickMore(e){
    e.preventDefault()
    let target = e.target
    let id = target.getAttribute('data-index')  
    customHistory.push({pathname:'/CityList/'+id,state:id})
    console.log(id)
    
  }
  componentDidMount(){
    cityList().then((res)=>{
      if(res.ok){
        return res.json().then((obj)=>{
          if(obj.code === 0){
            this.setState({
              list:obj.data
            })
          }
        })
      }
    },(err)=>{
      console.log(err)
    })
  }
  render(){
    return (
     
      <div className="city">
       <CSSTransition className="fade" timeout={500} />
         
        <JHeader />
        <JSearch />
        <JLocation />
        {JSON.stringify(this.state.list) ==='{}'? <Loading />:
          <div key ="22" className="list-content">
            <JHotCity hotCity_nav = {this.state.list.hotCity_nav} clickCity = {this.clickCity}/>
            <JMoreCity classify_nav = {this.state.list.classify_nav} />
            <JList  city_nav={this.state.list.city_nav} clickCity = {this.clickCity} clickMore = {this.clickMore}/>
          </div>
        }
      </div>
    
      
    )
  }
}
export default City