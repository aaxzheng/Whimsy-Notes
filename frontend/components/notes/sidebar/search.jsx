import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: '', results: []};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getNotes = this.getNotes.bind(this);
    this.sendResults = this.sendResults.bind(this);
  }

  getNotes() {
    this.state.results = [];
    let notes = this.props.notes || {};
    const query = this.state.query;
    for (let i = 0; i < notes.length; i++) {
        let word = "";
      for (let j = 0; j < notes[i].title.length; j++) {
        word += notes[i].title[j];
        if (word.toLowerCase().includes(query.toLowerCase())) {
           this.state.results.push(notes[i]);
           break;
        }
      }
    }
  }

  sendResults() {
    if (this.state.query === "") {
      this.state.results = this.props.notes
    }
    this.props.fetchArray("search",this.state.results,this.state.query);
    this.state.results = [];
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
      if (this.state.query.length > 1) {
        this.getNotes()
      }
    }
  })
}

  render() {
    return (
      <form onSubmit={this.sendResults} className="search-bar-body">
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
