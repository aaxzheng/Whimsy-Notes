import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: user
  };
};

export const logoutCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = (errors) => {
  return {
    type: CLEAR_ERRORS,
    errors
  };
};


export const login = (user) => dispatch => {
  return APIUtil.login(user).then((user2) => {
    dispatch(receiveCurrentUser(user2));
  }).fail((errors) => {dispatch(receiveErrors(errors.responseJSON))});
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(() => {
    dispatch(logoutCurrentUser());
  }).fail((errors) => {dispatch(receiveErrors(errors.responseJSON))});
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then((resp) => {
    dispatch(receiveCurrentUser(resp));
  }).fail((errors) => {dispatch(receiveErrors(errors.responseJSON))});
};

export const cleanSlate = (errors) => dispatch => {
  return dispatch(clearErrors(errors));
};

export const demoLogin = () => dispatch => {
  const user = {
    username: "demoman",
    password: "invisible"
  };
  return APIUtil.login(user).then((user) => {
    dispatch(receiveCurrentUser(user));
  });
};
