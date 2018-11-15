import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, demoLogin } from '../../actions/session_actions';

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
    }
  };
};

export default connect(msp, mdp)(SessionForm);
