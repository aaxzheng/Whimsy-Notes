import FourthForm from './fourth_form';
import { connect } from 'react-redux';
import { signup, demoLogin, clearErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up',
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: (user) => {
      return dispatch(signup(user));
    },
    demoLogin: () => {
      return dispatch(demoLogin());
    },
    clearErrors: (errors) => {
      return dispatch(clearErrors(errors));
    }
  };
};

export default connect(msp, mdp)(FourthForm);
