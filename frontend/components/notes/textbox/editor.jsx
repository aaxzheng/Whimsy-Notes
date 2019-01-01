import ReactQuill from "react-quill";
import React from 'react';
import {Link} from 'react-router-dom';
import {merge} from 'lodash';

const Font = Quill.import('formats/font');
Font.whitelist= ['ubuntu','sans-serif','serif','raleway','monospace','monoserrat'];
Quill.register(Font,true);

const modules = {toolbar: [
  [{'font': ['sans-serif','serif','monospace']}],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'color': [] },'bold','italic','underline','strike', {'background': [] },'code-block'],
  [{'list':'bullet'},{'list':'ordered'}],
  [{'script': 'super'},{'script': 'sub'}],
  [{ 'align': []}],
]};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body:this.props.note.body,title:this.props.note.title,notebook_id: this.props.note.notebook_id,preview: this.props.note.preview, trashed: this.props.note.trashed, tagInput: ""}
    this.handleChange = this.handleChange.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.node = React.createRef();
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.dupNote = this.dupNote.bind(this);
    this.updateState = this.updateState.bind(this);
    this.createNewTag = this.createNewTag.bind(this);
    this.setTagName = this.setTagName.bind(this);
    this.moveModal = this.moveModal.bind(this);
  }


  dropdownReveal() {
    document.getElementById("quillDropdownBox").classList.toggle("show-quill-dropdown");
  }

  dropdownHide() {
    let obj = document.getElementsByClassName("show-quill-dropdown")[0];
    if (obj) {
      setTimeout(() => obj.classList.toggle("show-quill-dropdown"),300);
    }
  }

  dupNote() {
    const notebookId = this.state.notebook_id;
    const note = {title:`${this.state.title} copy`, body: this.state.body,notebook_id: this.state.notebook_id, user_id:this.props.user.id, preview: this.state.preview};

    this.props.createNote(notebookId,note);
  }

  updateState() {
    this.props.updateNote(this.state);
  }

  handleChange(input,delta,source,editor) {
    clearTimeout(this.timeoutId);
    const inputs = editor.getText();
    this.setState({ body: input, preview: inputs });
    const textbox = document.getElementsByClassName('ql-editor')[0];
    textbox.focus();
    this.timeoutId = setTimeout(() => this.updateState(),1500);
  }

  removeNote() {
      this.setState({trashed: !this.state.trashed},this.updateState);
  }

  componentDidMount() {
     document.addEventListener('mousedown', this.handleClickOutside.bind(this));
   }

  componentWillUnmount() {
     document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
   }

  handleClickOutside(e) {
    if (this.node === e.target) {
      return;
    }
    this.dropdownHide();
  }

  setTagName(e) {
    this.setState({tagInput: e.currentTarget.value});
  }

  createNewTag(e) {
    const tag = {tag: this.state.tagInput, user_id: this.props.user.id, note_id:this.props.note.id};
    this.props.createTag(tag).then(()=> this.updateState());
    this.setState({tagInput: ""});
  }

  handleTitleChange(e) {
    clearTimeout(this.timeoutId);
    this.setState({title: e.currentTarget.value});
    this.timeoutId = setTimeout(() => this.updateState(),1500);
  }

  moveModal() {
    this.props.openModal("moveNote");
  }

  componentDidUpdate(oldProps) {
    if(oldProps.note.id !== this.props.note.id) {
      this.setState(merge({},this.props.note));
    }
    if(oldProps.tag !== this.props.tag) {
      this.setState(merge(this.state,this.props.note));
    }
  }

  expandBox() {
    const bars = document.getElementsByClassName("shrink");
    bars[0].classList.toggle("shrivel");
    bars[1].classList.toggle("shrivel");
  }


  render() {
    let tags;
    let trashState = "Delete Note";

    if (this.props.note.trashed === true) {
      trashState = "Restore Note";
    }

    if (this.props.tag.length > 0) {
        tags = this.props.tag.map(tag => {
          return (
            <div key={`${tag.id}edit`} className="edit-tag-body">
              <Link to="/test/index/editor"  className="edit-body-tag-name">{tag.tag}</Link>
              <div  className="tag-body-btn" >
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" ><path className="edit-tag-arrow" fill="black" d="M7 2L4 5 1 2"></path></svg>
              </div>
            </div>
          );
        });
      }
    return (
      <div className="text-body-div">
        <div className="quill-dropdown-div">
          <div id="quillDropdownBox" ref={this.node} className="quill-dropdown">
            <ul  className="quill-dropdown-items">
              <li onClick={this.moveModal} className="quill-dropdown-actions ">Move to...</li>
              <li onClick={this.dupNote} className="quill-dropdown-actions ">Duplicate note</li>
              <li  className="quill-dropdown-actions"><span onClick={this.removeNote} className="quill-drop-actions-link" >{trashState}</span></li>
            </ul>
          </div>
        </div>
        <div className="quill-header-div">
          <div className="quill-header">
            <div className="quill-header-left">
              <button onClick={this.expandBox} className="expand-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M0 0h20v20H0z"></path><path d="M3.405 4.4v1.997a.7.7 0 0 1-1.4 0V2.774a.69.69 0 0 1 .19-.572A.694.694 0 0 1 2.713 2h3.693a.7.7 0 1 1 0 1.399h-2.02l4.222 4.216a.7.7 0 1 1-.991.991L3.405 4.4zM12.6 17a.7.7 0 1 1 0-1.398h2.019l-4.243-4.239a.7.7 0 1 1 .991-.99L15.6 14.6v-1.996a.7.7 0 0 1 1.4 0V16.3a.7.7 0 0 1-.7.699h-3.7z" fill="#000" opacity=".34"></path></g></svg>
              </button>
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="quill-header-divide"><g fill="none"><path d="M0 0h20v20H0z"></path><path fill="#CCC" d="M10 18h1V2h-1z"></path></g></svg>
              <div className="header-notebook-title">
                <svg xmlns="http://www.w3.org/2000/svg" className="nb-icon" width="14" height="14" viewBox="0 0 14 14"><path fill="#7a8083" d="M3 2v10h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zM2 1h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2V1zm2 1v10h1V2H4zm2 3v1h4V5H6z"></path></svg>
                <Link to="/test/index" className="header-nb-title">{this.props.notebook.title}  --</Link>
              </div>
              <input
                type="text"
                value={this.state.title}
                placeholder="Title"
                className="edit-title"
                onChange={this.handleTitleChange}
                spellCheck="false"
                />

            </div>
            <div className="quill-header-right">
              <svg onFocus={this.dropdownReveal} tabIndex="0" onBlur={this.dropdownHide}  width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="dot-dropdown" ><path fill="#7a8083" d="M25 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" ></path></svg>
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
        <div className="edit-tag-footer">
          <form onSubmit={(e) => this.createNewTag(e)} className="show-edit-tags">
            <button id="make-new-tag-btn">
              <svg width="21" height="23" viewBox="0 0 21 23" xmlns="http://www.w3.org/2000/svg" className="edit-tag-svg"><path className="fill-svg-hover" d="M11.36 12.488H3.513v1.128h6.776a6.538 6.538 0 0 1 1.073-1.128zm-2.05 3.024H3.512v1.104H9.06a6.46 6.46 0 0 1 .25-1.104zm6.801 1.377v-2.445H14.89v2.445h-2.445v1.222h2.445v2.445h1.222V18.11h2.445V16.89H16.11zM15.512 12H15.5c-.52 0-1.023.072-1.5.207V7.16l-6-5.4-6 5.4v11.352h8.093A5.46 5.46 0 0 0 10.6 20H2a1.48 1.48 0 0 1-1.488-1.488V7.16c0-.432.168-.816.48-1.104l6-5.4a1.48 1.48 0 0 1 2.016 0l6 5.4c.312.288.504.672.504 1.104V12zM6.128 7.256c0-1.032.84-1.872 1.872-1.872s1.872.84 1.872 1.872S9.032 9.128 8 9.128a1.874 1.874 0 0 1-1.872-1.872zm2.616 0A.733.733 0 0 0 8 6.512a.733.733 0 0 0-.744.744c0 .408.336.744.744.744a.748.748 0 0 0 .744-.744zM15.5 23a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" fill="#C3C3C3"></path></svg>
            </button>
            <div className="edit-tag-container">
              {tags}
            </div>
            <div className="new-tag-maker">
            <input id="edit-tags" type="text" onChange={this.setTagName} value={this.state.tagInput} spellCheck="false" className="tag-input"></input>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Editor;
