import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './item'
import './style.scss'
export default class HomeAd extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  componentDidMount(){
    const ref = this.adList
    const height = -60
    let index = 0
    if (this.props.headLineList.length === 0) {
      this.props.getHeadLineList().then((data)=>{
        let length = this.props.headLineList.length
        console.log(length)
        setInterval(()=>{
          if(index === length-1){
            console.log(index)
            index = 1
            ref.style['transition'] = 'all 0s ease-in'
            ref.style['webkittransition'] = 'all 0s ease-in'
          }else{
            index++
            ref.style['transition'] = 'all 1s ease-in'
            ref.style['webkittransition'] = 'all 1s ease-in'
          }
          ref.style['transform'] = `translate3d(0,${index*height}px,0)`
          ref.style['webkittransform'] = `translate3d(0,${index*height}px,0)`
      },3000)
      })
    }
  }
  render(){
    if(this.props.headLineList.length !== 0){
      const length = this.props.headLineList.length
      this.props.headLineList[length] = this.props.headLineList[0]
    }
    return(
      <div id="home-ad" className="home-ad">
        <div className="title">
        
        </div>
        <div className = 'ad-list' ref ={(ad)=>{this.adList = ad}}>
          { this.props.headLineList.map((value,index)=>(
            <Item icon={value.headPic} key ={index} title={ value.title } picCount={value.picCount}/>
          )) }
        </div>
        
      </div>
    )
  }
}