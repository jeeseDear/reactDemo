import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Ad from 'container/Home/subpage/Ad'
import Header from 'components/Header'
import Category from 'components/Category'

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return(
      <div>
        <Header />
        <Category />
        <Ad />
      </div>
    )
  }
}
