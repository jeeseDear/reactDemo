import React from 'react'
import RouteMap from 'router/routerMap'
// import React from 'react'
// import {connect} from 'react-redux'
// import {addTodo,completeTodo,setVisibilityFilter,visibilityFilters} from './redux/actions'
// import AddTodo from './components/AddTodo'
// import TodoList from './components/TodoList'
// import Footer from './components/Footer'
class App extends React.Component{
  render(){
    return(
        <RouteMap />
    )
  }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default App