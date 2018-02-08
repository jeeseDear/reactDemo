import React from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin"
import LazyLoad from 'react-lazy-load'
class Item extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <div className="cnxh-wrapper">
        
        <div className="icon">
          <LazyLoad>
          <img src={this.props.defaultPic} alt="图片"/>
          </LazyLoad> 
          {this.props.pictag.tag !== ""?<div className ="tag">
            <span>{this.props.pictag.tag}</span>
          </div>:null}
        </div>
     
      <div className="text">
        <div className="name">{this.props.shopName}</div>
        <div className="discount">{this.props.dealGroupTitle}</div>
        <div className="money"><div className="market-price">¥{this.props.marketPrice}</div><div className="deal-price">¥{this.props.dealgroupPrice}</div>{this.props.promovalue !== ""? <div className="promovalue">{this.props.promovalue}</div>:<div className="promovalue-none"></div>}<div className="sales">{this.props.salesdesc}</div></div>
      </div> 
 
    </div>
    )
  }
}
export default Item