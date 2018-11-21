import ReactQuill from "react-quill";
import React from 'react';
import {Link} from 'react-router-dom'
import {merge} from 'lodash';

const Font = Quill.import('formats/font');
Font.whitelist= ['ubuntu','sans-serif','serif','raleway','monospace','monoserrat'];
Quill.register(Font,true);

const modules = {toolbar: [
  [{'font': ['sans-serif','serif','monospace']}],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'color': [] },'bold','italic','underline','strike', {'background': [] },'code-block'],
  [{'list':'bullet'},{'list':'ordered'}],
  ['link','image'],
  [{ 'align': []}],
]};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({},this.props.note);
    this.handleChange = this.handleChange.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.node = React.createRef();
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }


  dropdownReveal() {
    document.getElementById("quillDropdownBox").classList.toggle("show-quill-dropdown");
  }

  dropdownHide() {
    let obj = document.getElementsByClassName("show-quill-dropdown")[0];
    if (obj) {
      setTimeout(() => obj.classList.toggle("show-quill-dropdown"),500);
    }
  }

  updateState(editor){
    console.log("im firing");

    this.props.updateNote(this.state);
  }

  handleChange(input,delta,source,editor) {
    clearTimeout(this.timeoutId);
    const inputs = editor.getText();
    this.setState({ body: input, preview: inputs });
    const textbox = document.getElementsByClassName('ql-editor')[0];
    textbox.focus();
    this.timeoutId = setTimeout(() => this.updateState(editor),3000);
  }

  removeNote() {
    this.props.deleteNote(this.props.note.id).then(this.props.fetchNotes());
  }

  componentDidMount() {
     document.addEventListener('mousedown', this.handleClickOutside.bind(this));
   }

  componentWillUnmount() {
     document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
   }

  handleClickOutside(e) {
    debugger
    if (this.node === e.target) {
      return;
    }
    this.dropdownHide();
  }

  handleTitleChange(e) {
    this.setState({title: e.currentTarget.value});
  }

  componentDidUpdate(oldProps) {
    if(oldProps.note.id !== this.props.note.id) {
      this.setState(merge({},this.props.note));
    }
  }


  render() {



    return (
      <div className="text-body-div">
        <div className="quill-dropdown-div">
          <div id="quillDropdownBox" ref={this.node} className="quill-dropdown">
            <ul  className="quill-dropdown-items">
              <li className="quill-dropdown-actions ">Move to...</li>
              <li className="quill-dropdown-actions ">Duplicate note</li>
              <li onClick={this.removeNote} className="quill-dropdown-actions"><Link to="/test/index">Delete note</Link></li>
            </ul>
          </div>
        </div>
        <div className="quill-header-div">
          <div className="quill-header">
            <div className="quill-header-left">
              <button className="expand-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M0 0h20v20H0z"></path><path d="M3.405 4.4v1.997a.7.7 0 0 1-1.4 0V2.774a.69.69 0 0 1 .19-.572A.694.694 0 0 1 2.713 2h3.693a.7.7 0 1 1 0 1.399h-2.02l4.222 4.216a.7.7 0 1 1-.991.991L3.405 4.4zM12.6 17a.7.7 0 1 1 0-1.398h2.019l-4.243-4.239a.7.7 0 1 1 .991-.99L15.6 14.6v-1.996a.7.7 0 0 1 1.4 0V16.3a.7.7 0 0 1-.7.699h-3.7z" fill="#000" opacity=".34"></path></g></svg>
              </button>
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="quill-header-divide"><g fill="none"><path d="M0 0h20v20H0z"></path><path fill="#CCC" d="M10 18h1V2h-1z"></path></g></svg>
              <div className="header-notebook-title">
                <svg xmlns="http://www.w3.org/2000/svg" className="nb-icon" width="14" height="14" viewBox="0 0 14 14"><path fill="#7a8083" d="M3 2v10h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zM2 1h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2V1zm2 1v10h1V2H4zm2 3v1h4V5H6z"></path></svg>
                <Link to="/test/index" className="header-nb-title">Inbox</Link>
              </div>
            </div>
            <div className="quill-header-right">
              <button className="header-share-btn">Share</button>
              <svg onClick={this.dropdownReveal}  width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="dot-dropdown" ><path fill="#7a8083" d="M25 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" ></path></svg>
            </div>
          </div>
        </div>
        <ReactQuill
          id="textbox"
          ref={(el) => { this.reactQuillRef = el }}
          modules = {modules}
          onChange={this.handleChange}
          value={this.state.body}
          />
        <input
          type="text"
          value={this.state.title}
          placeholder="Title"
          className="edit-title"
          onChange={this.handleTitleChange}
          />
      </div>
    )
  }
}

export default Editor;
