import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import DropdownContainer from './dropdown_container';
import SearchContainer from './search_container';
import {merge} from 'lodash';


class SideBar extends React.Component {
  constructor (props) {
    super(props);
    this.user = this.props.user;
    this.setRef = this.setRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.addNewNote = this.addNewNote.bind(this);
    this.createDummyTag = this.createDummyTag.bind(this);
    this.showAllTrash = this.showAllTrash.bind(this);
  }

  componentDidMount() {
     document.addEventListener('mousedown', this.handleClickOutside);
     this.props.fetchNotebooks();
     this.props.fetchNotes();
     this.props.fetchTags();
   }
  componentDidUpdate(oldProps) {
    if (oldProps.notebooks !== this.props.notebooks) {
      this.setState(merge({},this.props));
    }
  }

  createDummyTag() {
    const tag = { tag: "DummyTag", user_id:this.props.user.id, note_id:this.props.notes[0].id  };
    this.props.createTag(tag);
  }

  componentWillUnmount() {
     document.removeEventListener('mousedown', this.handleClickOutside);
   }

   setRef(node) {
     this.node = node;
   }

   showAllNotes() {
     this.props.fetchArray("all",this.props.notes,"All Notes");
   }

   showAllTrash() {
     this.props.fetchArray("trash",this.props.notes,"Trash");
   }

   stallReveal() {
     setTimeout(this.revealNotebook(),100);
   }

   revealNotebook() {
     document.getElementById('notebook-reveal').classList.toggle("reveal");
   }

   revealShortcuts() {
     document.getElementById('shortcut-reveal').classList.toggle("reveal");
   }

   showNotebookNotes(notebook) {
     this.props.fetchNotebook(notebook.id);
     this.props.fetchArray("notebook",notebook.id,notebook.title);
   }

   showNote(note) {
     this.props.fetchNote(note.id);
   }

   addNewNote() {
     const notebookId = this.props.currentNotebookId || this.props.notebooks[0].id;
     const note = {body:"", title:"", notebook_id: notebookId, user_id:this.user.id}
     this.props.createNote(notebookId,note).then(() => this.props.fetchNotes());
   }

   handleClickOutside(event) {
     if (this.node && !this.node.contains(event.target)) {
       this.props.dropdownReveal();
     }
   }


  render() {
    const notebooks = this.props.notebooks || [];
    let shortcuts = [];
    let quickNotes;
    for (let i = 0; i < this.props.notes.length; i++) {
      if (this.props.notes[i].favorite) {
        shortcuts.push(this.props.notes[i]);
      }
    }

    quickNotes = shortcuts.map((note,idx) => {
      return (
        <div key={idx}>
          <Link onClick={() => this.showNote(note)} to="/test/editor"  className="notebook-item mod-hover">
            <svg xmlns="http://www.w3.org/2000/svg"  width="14" height="14" viewBox="0 0 14 14" className="notebook-icon" fill="#ccc"><path id="31a" d="M9 13H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7l-3 3zm0-1.457L10.543 10H9v1.543zM10 2H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4V9h3V3a1 1 0 0 0-1-1zM5 6h4v1H5V6zm0-2h4v1H5V4zm2 5H5V8h2v1z"></path></svg>
            <span className="notebook-title">{note.title}</span>
          </Link>
        </div>
      )
    })

    const titles = notebooks.map((notebook,idx) => {
      return (
        <div key={idx}>
          <Link onClick={() => this.showNotebookNotes(notebook)} to="/test/index/"  className="notebook-item mod-hover">
            <svg xmlns="http://www.w3.org/2000/svg" className="notebook-icon" fill="#ccc" width="14" height="14" viewBox="0 0 14 14" ><path id="31a" d="M3 2v10h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zM2 1h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2V1zm2 1v10h1V2H4zm2 3v1h4V5H6z"></path></svg>
            <span className="notebook-title">{notebook.title}</span>
          </Link>
        </div>


      )
    });
    return (
      <>
      <div className="sidebar-body shrink">
        <section className="sidebar-header">
          <div onClick={this.props.dropdownReveal} className="header-profile">
            <DropdownContainer />
            <span className="header-icon"/>
            <div className="header-right">
            <span className="header-name">{this.user.username}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="header-svg"><path fill="none" d="M7 2L4 5 1 2"></path></svg>
            </div>
          </div>
        </section>
        <div className="search-add-div">
        <SearchContainer />
        <div onClick={this.addNewNote} className="add-note-div">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"  className="add-note-icon" data-event-off="click"><g fill="none" ><path d="M0 0h30v30H0z"></path><circle cx="15" cy="15" r="14" fill="#00A82D"></circle><rect width="14" height="2" x="8" y="14" fill="#FFF" rx="1"></rect><rect width="2" height="14" x="14" y="8" fill="#FFF" rx="1"></rect></g></svg>
          <span className="add-note-span">New Note</span>
        </div>
        </div>
        <div className="sidebar-links">

          <div className="shortcuts">
            <div className="shortcuts-body">
              <div className="arrow-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="shortcuts-arrow"><path d="M2 0l4 4-4 4z"></path></svg>
              </div>
              <div onClick={this.revealShortcuts} className="shortcuts-body">
                <div className="shortcuts-text mod-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=""><path fill="#ccc" id="34a" d="M12 4c.177 0 .323.092.449.21.126.116.241.267.358.441.23.35.458.799.68 1.26.222.461.438.934.633 1.312.196.38.396.67.466.723.07.052.397.163.803.24.405.077.9.147 1.389.225.488.078.966.165 1.355.286.193.06.364.128.508.218.145.09.277.207.333.388.056.181.015.359-.052.521a2.37 2.37 0 0 1-.29.492c-.247.337-.586.703-.936 1.066-.351.364-.714.724-.998 1.035-.284.31-.487.604-.513.685-.025.081-.026.441.03.868.054.426.146.94.226 1.45.079.51.148 1.013.157 1.438.005.213-.004.405-.042.578-.037.173-.105.34-.25.45-.144.11-.312.124-.48.108a2.142 2.142 0 0 1-.534-.135c-.382-.14-.819-.365-1.257-.602-.439-.237-.879-.485-1.25-.672-.371-.187-.698-.3-.786-.3-.089 0-.416.113-.787.3-.37.187-.81.436-1.25.672-.438.237-.874.461-1.256.602-.191.07-.368.12-.534.135-.168.016-.336.003-.48-.107-.146-.11-.213-.278-.25-.452a2.505 2.505 0 0 1-.042-.578c.01-.425.078-.929.157-1.439.08-.51.171-1.023.227-1.45.055-.426.054-.786.029-.867-.025-.08-.228-.374-.512-.685-.284-.311-.647-.671-.998-1.034-.352-.364-.69-.73-.935-1.067a2.404 2.404 0 0 1-.29-.493c-.067-.162-.108-.34-.05-.52.055-.182.186-.299.33-.389.145-.09.316-.158.51-.219.388-.121.867-.208 1.355-.286.488-.078.983-.148 1.388-.224.406-.077.734-.189.804-.241.069-.053.27-.343.466-.722.194-.379.411-.851.633-1.313.222-.46.45-.91.68-1.259.115-.174.23-.325.357-.441.126-.116.272-.208.45-.208z"></path></svg>
                  <span className="shortcuts-word span-spacer">Shortcuts</span>
                </div>
                <div onClick={(e) => e.stopPropagation()} id="shortcut-reveal" className="hidden">
                  {quickNotes}
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-index-mods">
            <div className="shortcuts-body all-note">
              <Link onClick={this.showAllNotes.bind(this)} className="all-notes-link mod-hover" to="/test/index">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ccc" id="14a" d="M16 16h2v-1h-2a.997.997 0 0 0-1 1v3h1v-3zM8 4h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1.5 4a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-5zm0 3a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm0 3a.5.5 0 1 0 0 1h3a.5.5 0 1 0 0-1h-3z"></path></svg>
                <span className="mods-span span-spacer">All Notes</span>
              </Link>
            </div>

            <div className="shortcuts-body notebooks">
              <div>
                <div className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="shortcuts-arrow"><path d="M2 0l4 4-4 4z"></path></svg>
                </div>
                <div onClick={this.revealNotebook} className="shortcuts-body">
                  <Link  to="/test/notebooks" className="shortcuts-text mod-hover">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" ><path fill="#ccc" d="M9 4h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9V4zM6 4h2v15H6V4zm5.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4z"></path></svg>
                    <span  className="mod-span span-spacer">Notebooks</span>
                  </Link>
                <div onClick={(e) => e.stopPropagation()} id="notebook-reveal" className="hidden">
                  {titles}
                </div>
                </div>
              </div>
            </div>



            <div className="shortcuts-body shared">
              <Link to="/test/tags" className="all-notes-link mod-hover">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ccc" id="10a" d="M10.265 9.005a2 2 0 1 0 3.47 0H18v9.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-9.5h4.265zM9.5 16a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm0-2a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm4.235-4.995H18l-4.982-4.606a1.5 1.5 0 0 0-2.036 0L6 9.005h4.265a2 2 0 0 1 3.47 0z"></path></svg>
                <span className="mods-span span-spacer">Tags</span>
              </Link>
            </div>

          </div>

          <div  className="trash">
            <Link onClick={this.showAllTrash} to="/test/trash" className="all-notes-link mod-hover ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ccc" id="8a" d="M5 7.496a.5.5 0 0 1 .5-.5L8.996 7V5.25c0-.69.305-1.25 1.008-1.25H14c.703 0 1 .556 1 1.247v1.75H18.5a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5zm5.25-2.001a.25.25 0 0 0-.25.25v1.002c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V5.745a.25.25 0 0 0-.25-.25h-3.5zm6.205 12.567c0 .69-.57.935-1.273.935H8.818c-.703 0-1.273-.56-1.273-1.25l-.548-8.748H17l-.546 9.063z"></path></svg>
              <span className="mods-span span-spacer">Trash</span>
            </Link>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default SideBar;
