import React from 'react';
import { logout } from '../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';


const Greeting = ({ loggedIn, currentUser, logout}) => {
  let greeting;
  if (loggedIn) {
    greeting = (
      <>
        <h1>Welcome {currentUser.username}</h1>
        <button onClick={logout}>LOG OUT</button>
      </>
    );
  } else {
    greeting = (
      <div>
        <h1>Whimsy Notes App Page</h1>
        <Link to="/signup">Sign up</Link>
        <br></br>
        <Link to="/login">Sign in</Link>
      </div>
    );
  }
  return greeting;
};
export default Greeting;
