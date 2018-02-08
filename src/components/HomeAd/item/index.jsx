import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.scss'
class item extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    const parent = this.props
    return (
      <div className='ad-item'>
        <div className='text'>{parent.title}</div>
        <div className='icon'>
          <img src={parent.icon} alt={parent.title}/>
          <p>
            <i>{parent.picCount}</i>
          </p>
        </div>
      </div>
    )
  }
}
export default item