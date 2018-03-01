import React from 'react'
import {CSSTransition} from 'react-transition-group'
import './style.scss'
const Fade =({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={3000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);
class HomeBanner extends React.Component{
  constructor() {
    super()
    this.state = { show: false }
  }
  componentDidMount(){
    this.setState({show:true})
  }
  componentWillMount(){
    this.setState({show:false})
  }
  render(){ 
    return (
      <Fade  in={this.state.show}>
        <div className="home-banner">
          <img src="https://lf7817.github.io/react-demo-dianp/public/assets/images/f26c5e5c65a28e71feb7f5a73253fb88.jpg" alt="广告推荐"/>
        </div>
      </Fade>
    )
  }
}
export default HomeBanner