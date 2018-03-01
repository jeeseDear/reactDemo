import React from 'react'
import {CSSTransition} from 'react-transition-group'
import './style.scss'
function withCssTransition(aniname){
  return class extends React.Component{
    constructor(props){
      super(props)
      this.state = {show:false}
    }
    componentDidMount(){
      this.setState({show:true})
    }
    componentWillUnmount(){
      this.setState({show:false})
    }
    render(){
      return (
        <CSSTransition
        in = {this.state.show}
        timeout={3000}
        classNames={aniname}
      >
        {this.props.children}
      </CSSTransition>
      )
    }
    
  }
}
export default withCssTransition