import React from 'react';
import {Link} from 'react-router-dom';
import NotesIndexItem from './notes_index_item';
import {merge} from 'lodash';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({},this.props);
  }


  componentDidUpdate(oldProps) {
    if (oldProps.notes !== this.props.notes) {
      this.setState({notes: this.props.notes});
    }
  }

  render() {
    const notes = this.state.notes || [];
    const index = notes.map((note,idx) => {
      return (
        <NotesIndexItem key={idx} note={note} fetchNotes={this.props.fetchNotes} fetchNote={this.props.fetchNote} />
      )
    });
    return (
      <div className="index-body shrink">
        <header className="index-header">
          <div className="index-name-div">
            <h1 className="index-name">{this.props.query}</h1>
          </div>
          <div className="index-number">
            <span className="num-notes"> {notes.length} Notes</span>
            <div className="index-sort">
              <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24"><path fill="#737373" id="47a" d="M8 16.793l-2.146-2.147-.708.708L8.5 18.707l3.354-3.353-.708-.708L9 16.793V5H8v11.793zM12 5h9v1h-9V5zm0 3h7v1h-7V8zm0 3h5v1h-5v-1z"></path></svg>
            </div>
            <div className="index-tags">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill="#737373" id="48a" d="M16.8 20H7.2c-.663 0-1.2-.544-1.2-1.216V9.597c0-.359.134-.665.397-.905l4.8-4.378a1.183 1.183 0 0 1 1.606 0l4.8 4.378c.263.24.397.546.397.905v9.187c0 .672-.537 1.216-1.2 1.216zM17 9.518L12 5 7 9.518V19h10V9.518zM9.5 16h5a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1zm0-2h5a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1zm2.5-2.322a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25zm0-2.275a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3z"></path></svg>
            </div>
          </div>
        </header>
        <div className="index-items">
        {index}
        </div>
      </div>
    )
  }
}

export default NotesIndex;
