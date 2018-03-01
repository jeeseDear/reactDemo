import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import  {CSSTransitionGroup} from 'react-transition-group'
class Animate extends Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate =PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <Route render={() => (
        <CssTransitionGroup transitionName={'fade'} >
          <div key={Math.random()}>     
            {this.props.children}
          </div>
        </CssTransitionGroup>
       )}>
      </Route>
    )
  }
}
export default Animate