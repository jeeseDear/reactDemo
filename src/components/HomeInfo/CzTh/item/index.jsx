import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class Item extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    console.log(this.props)
    return(
      <a className="item" href={this.props.link}>
        <div className="icon">
          <img src={this.props.imageUrl} alt={this.props.featureTitle}/>
        </div>
        <h3>{this.props.shortTitle}</h3>
        <div className="price">
          <span>¥{this.props.price} </span>
          <b>¥{this.props.markPrice}</b>
        </div>
      </a>
    )
  }
}
export default Item