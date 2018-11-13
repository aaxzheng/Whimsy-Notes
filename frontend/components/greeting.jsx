import React from 'react';
import { logout } from '../actions/session_actions';
import { Link } from 'react-router-dom';


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
      <>
        <Link to="/signup"/>
        <Link to="/login"/>
      </>
    );
  }
  return greeting;
};
export default Greeting;
