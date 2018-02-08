import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import  Home from 'components/Home'
import  City from 'components/City'
import  CityList from 'components/CityList'
import ScrollToTop from 'components/ScrollToTop'
import customHistory from 'router/historyMap'

import './style.scss'
export default class RouteMap extends React.Component{
  render(){
    return (
      <Router history = {customHistory}>
          <ScrollToTop >
            <Switch>
              <Route exact path="/" component = {Home}></Route>
              <Route path="/city" component = {City}></Route>
              <Route path="/CityList" component = {CityList}></Route>
            </Switch>
          </ScrollToTop>
      </Router>  
    )
  }
}