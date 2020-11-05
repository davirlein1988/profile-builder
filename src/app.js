import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Bus from './utils/bus';
import { Home, SignIn, SignUp, Blog, About, Profile } from './pages';
import { Flash } from './components';
window.flash = (message, type = 'success') =>
  Bus.emit('flash', { message, type });
export default function App() {
  return (
    <>
      <Flash />
      <Router>
        <Switch>
          <Route exact path={`${ROUTES.HOME}`}>
            <Home />
          </Route>
          <Route exact path={`${ROUTES.SIGN_IN}`}>
            <SignIn />
          </Route>
          <Route exact path={`${ROUTES.SIGN_UP}`}>
            <SignUp />
          </Route>
          <Route exact path={`${ROUTES.BLOG}`}>
            <Blog />
          </Route>
          <Route exact path={`${ROUTES.ABOUT}`}>
            <About />
          </Route>
          <Route exact path={`${ROUTES.PROFILE}`}>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
