import React from 'react'
import Header from 'container/Header'
import Category from 'components/Category'
import Ad from 'container/Home/subpage/Ad.jsx'
import HomeBanner from 'components/HomeBanner'
import HomeInfo from 'container/HomeInfo'
import './style.scss'
import WithCssTransition from 'components/CSSTransition.jsx'
const WithCssComponet = WithCssTransition('fade')
// import React from 'react'
// import {connect} from 'react-redux'
// import {addTodo,completeTodo,setVisibilityFilter,visibilityFilters} from './redux/actions'
// import AddTodo from './components/AddTodo'
// import TodoList from './components/TodoList'
// import Footer from './components/Footer'

class Home extends React.Component{
  render(){
    return(
      <WithCssComponet>
        <div>
          <Header />
          <div className="home">
            <div className="home-content">
              <Category />
              <Ad />
              <HomeBanner />
              <HomeInfo />
            </div>
          </div>
        </div>
      </WithCssComponet>
    )
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default Home