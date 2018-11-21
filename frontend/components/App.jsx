import React from 'react';
import LoginFormContainer from './session_page/login_container';
import SignupFormContainer from './session_page/signup_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting_container';
import Splash from './splash/splash';
import SideBarContainer from './notes/sidebar/sidebar_container';
import NotesIndexContainer from './notes/notes_index/notes_index_container';
import TextEditorContainer from './notes/textbox/editor_container';
import NotebookIndexContainer from './notebooks/notebook_index_container';

const App = () => (
  <div className="main">
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <div className="note-app">
      <ProtectedRoute  path="/test" component={SideBarContainer}/>
      <div className="note-app-right">
        <ProtectedRoute path="/test/index" component={NotesIndexContainer}/>
        <ProtectedRoute exact path="/test/index/editor" component={TextEditorContainer} />
      </div>
      <ProtectedRoute path="/test/notebooks" component={NotebookIndexContainer}/>
    </div>
  </div>
);

export default App;
