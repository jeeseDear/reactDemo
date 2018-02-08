import React from 'react'
import './style.scss'
import imgurl from '../../assets/images/6261145dd7c0f26bc0a26831e5cb358a.gif'
class Loading extends React.Component{
  render(){
    return(
      <div className="Loading">
        <img src={imgurl} alt=""/>
      </div>
    )
  }
}
export default Loading