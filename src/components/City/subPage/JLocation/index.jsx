import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class JLocation extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <div className="loaction">
          <a href="">无法获取您的定位</a>
      </div>
    )
  }
}
export default JLocation