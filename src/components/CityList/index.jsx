import React from 'react'
import cityList from 'fetch/city'
import JListAll from 'components/City/subPage/JListAll'
import JLocation from 'components/City/subPage/JLocation'
import JSearch from 'components/City/subPage/JSearch'
import './style.scss'
class CityList extends React.Component{
  constructor(props){
    super(props)
    this.clickCity = this.clickCity.bind(this)
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
    window.history.go(-2)
  }
  componentDidMount(){
    this.Id = window.history.state.state
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
  render(match){
    return (
      <div className="city-list">
      <div className="header">
        <a href={`javascript:history.go(-1)`} className="back" title="返回">
          
        </a>
        <div className="text">
          切换城市
        </div>
      </div>
        <JSearch />
        <JLocation />
        {JSON.stringify(this.state.list) ==='{}'?<div key="11" className="loading">加载中...</div>:
          <div key ="22" className="list-content">
            <JListAll Id = {this.Id} city_nav={this.state.list.city_nav} clickCity = {this.clickCity}/>
          </div>
        }
      </div>
      
    )
  }
}
export default CityList