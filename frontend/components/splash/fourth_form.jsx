import React from 'react';
import { Link } from 'react-router-dom';


class FourthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  componentWillUnmount() {
    this.props.clearErrors(this.props.errors);
  }


  render() {

    let errorMsg = [null];


    if (this.props.errors.includes("Username can't be blank")) {
      errorMsg = this.props.errors;
    } else {
      errorMsg.push(this.props.errors);
    }

    return (

        <div className="fourth-form">

          <button className="fourth-demo" onClick={this.props.demoLogin}><span className="demo-span">Continue with Demo</span></button>
            <h2 className="fourth-form-span"><span>OR</span></h2>
          <form onSubmit={this.handleSubmit}>

            <input id="fourth-username" className="fourth-form-input" onChange={this.handleChange("username")} placeholder="Email" value={this.state.username}></input>
            <li className="errors">{errorMsg[0]}</li>
            <input id="fourth-password" className="fourth-form-input" type="password" placeholder="Password" onChange={this.handleChange("password")} value={this.state.password}></input>
            <li className="errors">{errorMsg[1]}</li>
            <p className="fourth-ToS">By creating an account, you are agreeing to our <mark className="fourth-mark">Terms of Service</mark> and <mark className="fourth-mark">Privacy Policy</mark>.</p>

            <br></br>
            <button className="fourth-submit-btn">SIGN UP FOR FREE</button>
          </form>
        </div>

    );
  }
}

export default FourthForm;
