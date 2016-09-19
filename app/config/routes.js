import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer,
  FeedContainer, LogoutContainer, UserContainer } from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <Router history={hashHistory} >
      <Router path='/' component={MainContainer} >
        <Route path='feed' component={FeedContainer} onEnter={checkAuth} />
        <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth} />
        <Route path ='logout' component={LogoutContainer} />
        <Route path='/:uid' component={UserContainer} onEnter={checkAuth} />
        <IndexRoute component={HomeContainer} />
      </Router>
    </Router>
  )
}
