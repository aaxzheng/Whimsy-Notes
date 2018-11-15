import React from 'react';
import LoginFormContainer from './session_page/login_container';
import SignupFormContainer from './session_page/signup_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting_container';
import Splash from './splash/splash';


const App = () => (
  <div className="main">
    <AuthRoute exact path="/" component={Splash} />
    <Route exact path="/greeting" component={GreetingContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
