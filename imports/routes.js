import React from 'react'
import Home from  './Home'
import Admin from  './Admin'
import AvisoLegal from './AvisoLegal'
import LogIn from './LogIn'

import { Router, Route, browserHistory } from 'react-router';

function requireAuth(nextState, replace) {
  if (!Meteor.userId()) {
    replace({
      pathname: '/login'
    })
  }
}

export const routes    = () => {
  return (
  	<Router history     = {browserHistory}>
      <Route path   = "/"                 component = {Home}/>
      <Route path   = "/admin"            component = {Admin} onEnter={requireAuth}/>
      <Route path   = "/aviso-legal"      component = {AvisoLegal}/>
      <Route path 	= "/login"			      component	= {LogIn}/>
  </Router>
  )

}