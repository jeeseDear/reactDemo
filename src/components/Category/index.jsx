import React from 'react'
import ReactSwipe from 'react-swipe'
import './style.css'
class Category extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      index: 0
    }
  }
  render(){
    const options = {
      auto: 4000,
      callback: (index) => {
        this.setState({
          index
        })
      }
    }
    return (
      <div className="home-category">
      <ReactSwipe className="carousel" swipeOptions={options}>
        <ul className="carousel-item">
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126194705meishi.png")}/>
             <p>美食</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20170223152109dp_wx_maoyan_icon.png")}/>
             <p>电影</p>
            </a>
          </li>
          <li className="item">
            <a href="">
              <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203337jiudian.png")}/>
              <p>酒店</p>
            </a>
          </li>
          <li className="item">
            <a href="">
            <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126202841xiuxianyule.png")}/>
            <p>休闲娱乐</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203251waimai.png")}/>
             <p>外卖</p>
            </a>
          </li> 
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160204172927huoguo.png")}/>
             <p>火锅</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126202946liren.png")}/>
             <p>丽人</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203440zhoubianyou.png")}/>
             <p>周边游</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203542ktv.png")}/>
             <p>ktv</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203830jiehun.png")}/>
             <p>婚纱摄影</p>
            </a>
          </li>
        </ul>
        <ul className="carousel-item">
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126194705meishi.png")}/>
             <p>美食</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20170223152109dp_wx_maoyan_icon.png")}/>
             <p>电影</p>
            </a>
          </li>
          <li className="item">
            <a href="">
              <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203337jiudian.png")}/>
              <p>酒店</p>
            </a>
          </li>
          <li className="item">
            <a href="">
            <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126202841xiuxianyule.png")}/>
            <p>休闲娱乐</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203251waimai.png")}/>
             <p>外卖</p>
            </a>
          </li> 
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160204172927huoguo.png")}/>
             <p>火锅</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126202946liren.png")}/>
             <p>丽人</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203440zhoubianyou.png")}/>
             <p>周边游</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203542ktv.png")}/>
             <p>ktv</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203830jiehun.png")}/>
             <p>婚纱摄影</p>
            </a>
          </li>
        </ul>
        <ul className="carousel-item">
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126194705meishi.png")}/>
             <p>美食</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20170223152109dp_wx_maoyan_icon.png")}/>
             <p>电影</p>
            </a>
          </li>
          <li className="item">
            <a href="">
              <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203337jiudian.png")}/>
              <p>酒店</p>
            </a>
          </li>
          <li className="item">
            <a href="">
            <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126202841xiuxianyule.png")}/>
            <p>休闲娱乐</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203251waimai.png")}/>
             <p>外卖</p>
            </a>
          </li> 
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160204172927huoguo.png")}/>
             <p>火锅</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126202946liren.png")}/>
             <p>丽人</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203440zhoubianyou.png")}/>
             <p>周边游</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203542ktv.png")}/>
             <p>ktv</p>
            </a>
          </li>
          <li className="item">
            <a href="">
             <img alt="加载失败" className="icon" src={require("../../assets/images/category/20160126203830jiehun.png")}/>
             <p>婚纱摄影</p>
            </a>
          </li>
        </ul>
      </ReactSwipe>
        <div className="carousel-index">
            <span className={this.state.index === 0 ? 'active': ''}></span>
            <span className={this.state.index === 1 ? 'active': ''}></span>
            <span className={this.state.index === 2 ? 'active': ''}></span>
        </div>
      </div>
    )
  }
}
export default Category