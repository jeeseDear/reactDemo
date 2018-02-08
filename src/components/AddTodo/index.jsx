import React from 'react'
import PropTypes from 'prop-types'
export default class AddTodo extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    const node = this.refs.input
    const text = node.value.trim()
    console.log(222)
    this.props.onAddClick(text)
    node.value = ''
  }
  render(){
    return (
      <div>
        <input type="text" ref="input"/>
        <button onClick = {this.handleClick}>Add</button>
      </div>
    )
  }
}
AddTodo.PropTypes = {
  onAddClick :PropTypes.func.isRequired
}