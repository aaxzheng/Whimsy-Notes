import React from 'react';

class CreateNotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title:""};
    this.handleChange = this.handleChange.bind(this);
    this.newNotebook = this.newNotebook.bind(this);
  }


  handleChange(e) {
    this.setState({title: e.currentTarget.value})
  }

  newNotebook() {
    const notebook = {title: this.state.title, user_id: this.props.user.id};
    this.props.createNotebook(notebook);
    this.props.closeModal();
  }


   render() {
      return (
        <div className="createNb-div">
          <div className="createNb-form">
            <div className="form-top-half">
              <span className="form-top-header">Create new notebook</span>
              <p className="form-top-description">Notebooks are useful for grouping notes around a common topic. They are private.</p>
              <div>
                <label className="form-top-input-label"> Name
                </label>
                  <div className="form-top-input">
                    <input className="form-top-input-field" type="text" placeholder="Notebook name" onChange={this.handleChange} value={this.state.title}/>
                  </div>
              </div>
            </div>
            <div className="form-bot-half">
              <div className="form-bot-placeholder"></div>
              <div className="form-bot-placeholder">
                <span onClick={this.props.closeModal} className="form-bot-cancel">Cancel</span>
                <button onClick={this.newNotebook} className="form-bot-submit">Continue</button>
              </div>
            </div>
            <svg onClick={this.props.closeModal} width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" className="close-modal"><path id="hover-darken" fill="#b3b3b3" d="M7.728 6.314l4.95-4.95L11.263-.05 6.313 4.9 1.365-.05-.05 1.364l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.415-4.95-4.95z"></path></svg>
          </div>
        </div>
      )
    }
}

export default CreateNotebookForm;
