import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './item'
import './style.scss'
class SpecialFood extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  componentDidMount(){
   
  }
  render(){
   const Rb = this.props.RbList
    return (
      <div className="speical-food">
        <div className ="special-item">
        {
          Rb.map((value,index)=>(
            <Item link = {value.link} adSubTitle = {value.adSubTitle} adTitle = {value.adTitle} thumb = {value.thumb} key ={index}/>
          ))
        }
        </div>
      </div>
    )
  }
}
export default SpecialFood