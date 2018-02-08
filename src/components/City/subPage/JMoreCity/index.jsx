import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
class JMoreCity extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  clickLetter(e){
    e.preventDefault()
    let id = e.target.getAttribute('data-id')
    console.log(id)
    let domTop = document.getElementById(id).offsetTop
    console.log(domTop)
    document.body.scrollTop = domTop
  }
  render(){
    return (
      <div className="more-city">
        <h3 className="name">更多城市</h3>
        <ul className="item">
        { Array.prototype.map.call(this.props.classify_nav,(value,key)=>(
          <li key={value.idx}><a data-id={value.idx} onClick = {this.clickLetter}>{value.idx}</a></li>
        ))}
        </ul>
      </div>
    )
  }
}
export default JMoreCity