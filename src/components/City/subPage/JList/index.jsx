import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class JList extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <div>
        {this.props.city_nav.map((item,index)=>(
          <div key={index} id={item.idx} className="city-nav">
            <h3 className="name">{item.idx}</h3>
            <ul className="item">
            { Array.prototype.map.call(item.cities,(value,key)=>(
            
              key<20?<li key={value.city_id}><a href=""data-name={value.city_name} data-id = {value.city_id} onClick={this.props.clickCity}>{value.city_name}</a></li>: key===20?
                <li key="更多" ><a href="" data-index = {item.idx} onClick = {this.props.clickMore}>更多</a></li>
              :null
              
            ))}
            </ul>
          </div>
        ))}
     </div>
    )
  }
}
export default JList