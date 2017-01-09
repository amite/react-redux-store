import React from 'react'
import { Router, Route } from 'react-router'

import App from './App'
import Cart from './components/Cart';
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/contact" component={Contact} />
      <Route path="/shop" component={Cart} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

export default Routes