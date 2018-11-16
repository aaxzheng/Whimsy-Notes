import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Root } from './components/root';
import { login, logout } from './actions/session_actions';
import {fetchNotebook} from './util/notebook_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        currentUserId: window.currentUser.id
      }
    };
  }
  const store = configureStore(preloadedState);
  // TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchNotebook = fetchNotebook;
  window.login = login;
  window.logout = logout;
  // Derp
  ReactDOM.render(<Root store={store} />, root);
});
