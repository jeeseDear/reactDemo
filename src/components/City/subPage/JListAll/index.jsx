import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class JListAll extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <div>
        {this.props.city_nav.map((item,index)=>(
          item.idx === this.props.Id ?
          <div key={index} id={item.idx} className="city-nav">
            <h3 className="name">{item.idx}</h3>
            <ul className="item">
            { Array.prototype.map.call(item.cities,(value,key)=>(
            <li key={key}><a href=""data-name={value.city_name} data-id = {value.city_id} onClick={this.props.clickCity}>{value.city_name}</a></li>
            ))}
            </ul>
          </div>:null
        ))}
     </div>
    )
  }
}
export default JListAll