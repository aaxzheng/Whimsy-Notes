import React from 'react';
import {Link} from 'react-router-dom';
import FourthFormContainer from './fourth_form_container'
import Footer from './footer'
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


class Info extends React.Component {

  render() {
    return (
      <>
      <section className="info-body">
        <div className="filler"></div>
      <div className="first-info">
        <div className="first-divide">
          <h1 className="first-intro">
            Feel organized without the effort
            <p className="first-blurb">Whimsy Notes helps you capture and organize ideas, projects, and to-do lists, so even the smallest things stay with you.</p>
          <Link className="first-sign" to="/signup">SIGN UP FOR FREE</Link>
          </h1>
          <img className="first-img" src="/homepage-hero-desktop.png"></img>
        </div>
      </div>
      <div className="second-body">
        <div className="second-img">
          <img className="brain" src="/homepage-focus.png"></img>
          <h1 className="second-slogan">Focus on what matters most</h1>
        </div>
        <div className="second-text">
          <ul>
            <li>Manage everything from big projects to personal moments.</li>
            <li>Capture ideas and inspiration in notes, notes, and more notes.</li>
            <li>Hopefully never lose track of your tasks and deadlines.</li>
          </ul>
        </div>
      </div>
      <div className="third-body">
        <div className="third-slogan">
          <h1>How It Works</h1>
        </div>
        <div className="third-icons">
          <ul>
            <li>
              <img src="/sign-up.png"/>
              <h3>SIGN UP</h3>
              <p>Create your free account and choose the plan that fits your needs.</p>
            </li>
            <li>
              <img src="/add-content.png"/>
              <h3>ADD CONTENT</h3>
              <p>Type notes, add attachments, clip web pages, or record memos. All in one place.</p>
            </li>
            <li>
              <img src="/find-everything.png"/>
              <h3>FIND EVERYTHING</h3>
              <p>Organize your way. Use notebooks, tags, or our powerful search to find everything you need quickly.</p>
            </li>
            <li>
              <img src="/done.png"/>
              <h3>GET THINGS DONE</h3>
              <p>Manage projects, take meeting notes, set reminders, and edit documents.</p>
            </li>
          </ul>
        </div>
        <div className="third-signup">
          <Link to="/signup" className="third-button">START FOR FREE</Link>
        </div>
      </div>

      <div className="fourth-body">

        <div className="fourth-text">
          <h1 className="fourth-text-header">Sign up for Whimsy Notes Today</h1>
          <p className="fourth-slogan">Capture ideas and inspiration from anywhere and manage tasks with ease.</p>
        </div>
        <div className= "fourth-form-div">
          <FourthFormContainer />
        </div>
      
      </div>


        <div className="foot-dive">
        <Footer />
        </div>
      </section>
        </>
    )
  };
}



export default connect(msp, mdp)(Info);
