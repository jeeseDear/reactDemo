import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Ad from 'container/Home/subpage/Ad'
import Header from 'components/Header'
import Category from 'components/Category'
import {CSSTransition} from 'react-transition-group'
const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);
export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return(
      <Fade in = {true}>
      <div>
        <Header />
        <Category />
        <Ad />
      </div>
      </Fade>
    )
  }
}
