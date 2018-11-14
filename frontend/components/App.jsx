import React from 'react';
import LoginFormContainer from './login_container';
import SignupFormContainer from './signup_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting_container';


const App = () => (
  <div className="main">
    <h1>Whimsy Notes App Page</h1>
    <GreetingContainer />
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
