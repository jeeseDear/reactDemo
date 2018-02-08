import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class JHeader extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <div className="city-header">
      <a href={`javascript:history.go(-1)`} className="back" title="返回">
        
      </a>
      <div className="list-type">
        <a href="" className="domestic active" >国内</a>
        <a href="" className="abroad">国外</a>
      </div>
  </div>
    )
  }
}
export default JHeader