import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class JSearch extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <div className="search">
      <div className="search-input">
          <i className="icon-search icon"></i>
          <span className="search-text">
             输入城市名或拼音查询
          </span>
      </div>
    </div>
    )
  }
}
export default JSearch