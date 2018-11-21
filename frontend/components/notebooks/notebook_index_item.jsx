import React from 'react';
import {Link,Redirect} from 'react-router-dom'

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.sendNotes = this.sendNotes.bind(this);
    this.node = React.createRef();
  }

  dropdownReveal() {
    document.getElementById("notebookDropdownBox").classList.toggle("show-nb-dropdown");
  }

  dropdownHide() {
    let obj = document.getElementsByClassName("show-nb-dropdown")[0];
    if (obj) {
      setTimeout(() => obj.classList.toggle("show-nb-dropdown"),500);
    }
  }

  handleClickOutside(e) {
    debugger
    if (this.node === e.target) {
      return;
    }
    this.dropdownHide();
  }

  componentDidMount() {
     document.addEventListener('mousedown', this.handleClickOutside);
   }

  componentWillUnmount() {
     document.removeEventListener('mousedown', this.handleClickOutside);
   }

  handleClickOutside(e) {
    if (this.node === e.target) {
     return;
    }
     this.dropdownHide();
  }

  sendNotes() {
    this.props.fetchNotebook(this.props.notebook.notebook.id);
    this.props.fetchArray(this.props.notebook.notes,this.props.notebook.notebook.title);
  }
  render() {
    return(

      <div className="nb-item">

        <div className="nb-item-title">
          <div className="nb-item-span">
            <svg width="6" height="9" viewBox="2 240 6 9" xmlns="http://www.w3.org/2000/svg" className="nb-item-arrow"><path fill="#9B9B9B" d="M2 240l6 4.5-6 4.5z"></path></svg>
            <span className="nb-item-name">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="nb-book-icon" viewBox="0 0 24 24"><path fill="#313131"  d="M16 8.33c0-.18-.22-.33-.5-.33h-4c-.28 0-.5.15-.5.33v1.34c0 .18.22.33.5.33h4c.28 0 .5-.15.5-.33zM18 6v11a2 2 0 0 1-2 2H9V4h7a2 2 0 0 1 2 2zM6 4h2v15H6z"></path></svg>
              <Link onClick={this.sendNotes} className="nb-link" to="/test/index" >{this.props.notebook.notebook.title}</Link>
              <span className="nb-num">({this.props.notebook.notes.length})</span>
            </span>
          </div>
        </div>

        <div onClick={this.dropdownReveal} ref={this.node} className="nb-item-action">
          <svg  width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  className="nb-trip-dot"><path fill="#777777" d="M25 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"  ></path></svg>
          <div  className="nb-item-dropdown">
            <div id="notebookDropdownBox"  className="nb-item-dropdown-body">
              <ul className="quill-dropdown-items">
                <li className="quill-dropdown-actions rename-nb">Rename notebook</li>
                <li className="quill-dropdown-actions rename-nb">Delete notebook</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default NotebookIndexItem;
