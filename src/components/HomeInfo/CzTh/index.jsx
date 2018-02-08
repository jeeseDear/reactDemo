import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './item'
import './style.scss'
class CzTh extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    const CzList = this.props.CzList
    console.log(CzList)
    return (
      <div className ="czth">
        <div className="czth-wrapper">
          <div className="czth-title">
            <h2>超值特惠</h2>
            <a href="">更多优惠&nbsp;&gt;</a>
          </div>
          <div className="czth-list">
          {
            CzList.map((value,index)=>(
              <Item key = {index} shortTitle = {value.shortTitle} markPrice = {value.markPrice} price = {value.price} featureTitle={value.featureTitle} imageUrl={value.imageUrl}/>
            ))
          }
          </div>
        </div>
      </div>
    )
  }
}
export default CzTh