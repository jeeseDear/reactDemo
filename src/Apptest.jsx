// // import React from 'react'
// // import Header from './components/Header'
// // import Category from './components/Category'
// // import Comments from './components/Comments'
// import React from 'react'
// import {connect} from 'react-redux'
// import {addTodo,completeTodo,setVisibilityFilter,visibilityFilters} from './redux/actions'
// import AddTodo from './components/AddTodo'
// import TodoList from './components/TodoList'
// import Footer from './components/Footer'
// class App extends React.Component{
//   render(){
//     const {dispatch,visibleTodos,visibilityFilter} = this.props
//     return(
//       <div>
//         <AddTodo
//           onAddClick={text =>
//             dispatch(addTodo(text))
//           } />
//         <TodoList
//           todos = {visibleTodos}
//           onTodoClick={index =>
//             dispatch(completeTodo(index))
//           } />
//         <Footer
//           filter={visibilityFilter}
//           onFilterChange={nextfilter =>
//             dispatch(setVisibilityFilter(nextfilter))
//           } />
//       </div>
//     )
//   }
// }
// function selectTodos(todos, filter) {
//   switch (filter) {
//     case visibilityFilters.SHOW_ALL:
//       return todos
//     case visibilityFilters.SHOW_COMPLETED:
//       return todos.filter(todo => todo.completed)
//     case visibilityFilters.SHOW_ACTIVE:
//       return todos.filter(todo => !todo.completed)
//     default:
//   }
// }

// // Which props do we want to inject, given the global state?
// // Note: use https://github.com/faassen/reselect for better performance.
// function select(state) {
//   return {
//     visibleTodos: selectTodos(state.todos, state.visibilityFilter),
//     visibilityFilter: state.visibilityFilter
//   }
// }

// // 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
// export default connect(select)(App)