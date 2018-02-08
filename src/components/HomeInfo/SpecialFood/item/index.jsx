import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss'
class Item extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <a  className="item" href={this.props.link}>
          <div className="text">
            <h2>{this.props.adTitle}</h2>
            <h3>{this.props.adSubTitle}</h3>
          </div>
          <div className="icon">
            <img src={this.props.thumb} alt="图片"/>
          </div>
        </a>
    )
  }
}
export default Item