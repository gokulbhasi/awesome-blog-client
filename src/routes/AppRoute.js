import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import home from '../pages/home/home'
import post from '../pages/home/post'
import NotFound from '../pages/notfound/NotFound'
import Error404 from '../pages/404/error404'

import RouteConfig from './RouteConfig'

const AppRoute = () => {
  return (
    <Router>
      <div className='ui fluid container'>
        {/* <NavBar /> */}

        <div className='pusher'>
          <div className='ui minheight navbarmargin container'>
            <Switch>
              <Route path={RouteConfig.post.path} exact component={post} />
              <Route path={RouteConfig.home.path} exact component={home} />
              <Route exact path='/' render={() => (<Redirect to={RouteConfig.home.defaultPath} />)} /> 
              <Route exact path='*' component={Error404} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default AppRoute

/*

*/
