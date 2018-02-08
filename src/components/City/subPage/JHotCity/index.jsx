import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class JHotCity extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <div className="hot-city">
        <h3 className="name">热门城市</h3>
        <ul className="item">
          { Array.prototype.map.call(this.props.hotCity_nav,(value,key)=>(
            <li key={value.city_id} ><a data-name={value.city_name} data-id = {value.city_id} onClick={this.props.clickCity} href="">{value.city_name}</a></li>
          ))}
        </ul>
      </div>
    )
  }
}
export default JHotCity