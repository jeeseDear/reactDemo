import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss'
class LoadingMore extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    const isShow = this.props.isShow
    return (
      <div className="loading-more">{
        isShow ?<div className="loading-more">
          加载更多
        </div>: isShow === null || isShow === undefined ?<div className="loading-now">
          正在加载...
        </div>:<div className="loading-done">
          没有更多了
        </div>
      } 
      </div>
      
    )
  }
}    
export default LoadingMore