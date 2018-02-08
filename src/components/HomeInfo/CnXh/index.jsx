import React from 'react'
import Item from './item'
import LoadingMore from 'components/LoadingMore'
import './style.scss'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class CnXh extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    const CnXh = this.props.CnXh
    console.log(CnXh)
    return(
      <div className="cnxh">
        <div className="cnxh-content">
          <h2 className="cnxh-title">猜你喜欢</h2>
         {
           CnXh.data.map((value,index)=>(
             <Item defaultPic = {value.defaultPic} dealGroupTitle = {value.dealGroupTitle} discountList = {value.discountList} dealgroupPrice={value.dealgroupPrice} salesdesc={value.salesdesc}
             shopName = {value.shopName} key={index} distance = {value.distance} promovalue = {value.promovalue}  marketPrice = {value.marketPrice} pictag = {value.pictag} / >
           ))
         }
         <LoadingMore isShow = {CnXh.hasMore} />
        </div>
      </div>
    )
  }
}
export default CnXh