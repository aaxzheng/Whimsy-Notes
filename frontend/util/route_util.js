import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Splash from '../components/splash/splash'

const Auth = ({component: Component, path, loggedIn, exact}) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
    loggedIn ? <Redirect to="/greeting" /> : <Component{...props} />
  )} />);
};

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const msp = state => {
  return { loggedIn: Boolean(state.session.currentUserId)};
};

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
