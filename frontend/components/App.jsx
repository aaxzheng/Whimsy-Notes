import React from 'react';
import LoginFormContainer from './session_page/login_container';
import SignupFormContainer from './session_page/signup_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting_container';
import Splash from './splash/splash';
import SideBarContainer from './notes/sidebar/sidebar_container';
import NotesIndexContainer from './notes/notes_index/notes_index_container';


const App = () => (
  <div className="main">
    <div className="note-app">
      <ProtectedRoute  path="/test" component={SideBarContainer}/>
      <ProtectedRoute exact path="/test/index" component={NotesIndexContainer}/>
      <ProtectedRoute exact path="/greeting" component={GreetingContainer} />
    </div>
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
