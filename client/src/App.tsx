import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { PAGE_PATHS } from './constants'
import Login from './pages/Signin'

const App = () => (
  <Router>
    <Switch>
      <Route path={PAGE_PATHS.SIGNIN} component={Login} />
    </Switch>
    <Redirect from="/" to={PAGE_PATHS.SIGNIN} />
  </Router>
)

export default App
