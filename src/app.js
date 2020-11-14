import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

import * as ROUTES from './constants/routes';
import Bus from './utils/bus';
import {
  Home,
  SignIn,
  SignUp,
  Blog,
  About,
  Profile,
  BlogEdit,
  PageNotFound,
  ForgotPassword,
  ConfirmationPassword,
} from './pages';
import { Flash } from './components';

window.flash = (message, type = 'success') =>
  Bus.emit('flash', { message, type });
export default function App() {
  const user = null;
  return (
    <>
      <Flash />
      <Router>
        <Switch>
          <IsUserRedirect
            exact
            user={user}
            loggedInPath={ROUTES.HOME}
            path={ROUTES.HOME}
          >
            <Home />
          </IsUserRedirect>
          <IsUserRedirect
            exact
            user={user}
            loggedInPath={ROUTES.HOME}
            path={ROUTES.SIGN_IN}
          >
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect
            exact
            user={user}
            loggedInPath={ROUTES.HOME}
            path={ROUTES.SIGN_UP}
          >
            <SignUp />
          </IsUserRedirect>
          <IsUserRedirect
            exact
            user={user}
            loggedInPath={ROUTES.HOME}
            path={ROUTES.FORGOT_PASSWORD}
          >
            <ForgotPassword />
          </IsUserRedirect>
          <IsUserRedirect
            exact
            user={user}
            loggedInPath={ROUTES.HOME}
            path={ROUTES.CONFIRMATION_PASSWORD}
          >
            <ConfirmationPassword />
          </IsUserRedirect>
          <IsUserRedirect
            exact
            user={user}
            loggedInPath={ROUTES.BLOG}
            path={ROUTES.BLOG}
          >
            <Blog />
          </IsUserRedirect>
          <IsUserRedirect
            exact
            user={user}
            loggedInPath={ROUTES.HOME}
            path={ROUTES.PROFILE}
          >
            <Profile />
          </IsUserRedirect>
          <IsUserRedirect
            exact
            user={user}
            loggedInPath={ROUTES.HOME}
            path={ROUTES.ABOUT}
          >
            <About />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.BLOG_EDIT}>
            <BlogEdit exact />
          </ProtectedRoute>
          <ProtectedRoute path={ROUTES.PORTFOLIO_EDIT}>
            <p>Edit portfolio</p>
          </ProtectedRoute>
          <ProtectedRoute path={ROUTES.PROFILE_EDIT}>
            <p>Edit profile</p>
          </ProtectedRoute>
          <ProtectedRoute path={ROUTES.RESOURCE_EDIT}>
            <p>edit resource</p>
          </ProtectedRoute>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}
