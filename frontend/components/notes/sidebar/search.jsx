import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: '', results: []};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getNotes = this.getNotes.bind(this);
  }

  getNotes () {
    this.state.results = [];
    let notes = this.props.notes || {};
    const query = this.state.query;
    for (let i = 0; i < notes.length; i++) {
        let word = "";
      for (let j = 0; j < notes[i].note.title.length; j++) {
        word += notes[i].note.title[j];
        if (word.toLowerCase().includes(query.toLowerCase())) {
           this.state.results.push(notes[i].note);
           break;
        }
      }
    }
  }



  componentDidMount() {
    // this.props.fetchNotes();
    // this.props.fetchNotebooks();
    // this.props.fetchNotebook(3);
  }

  handleInputChange() {
  this.setState({
    query: this.search.value
  }, () => {
    if (this.state.query && this.state.query.length > 1) {
      if (this.state.query.length % 2 === 0) {
        this.getNotes()
      }
    }
  })
}

  render() {
    return (
      <form className="search-bar-body">
        <input
          className = "search-bar-input"
          placeholder="Search all notes..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
      <button className="search-bar-btn"> Hi </button>
      </form>
    )
  }

}


export default Search;
