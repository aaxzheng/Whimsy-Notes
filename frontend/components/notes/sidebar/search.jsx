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
      <button className="search-bar-btn">
        <svg width="32" height="32" viewBox="0 0 32 32"><path fill="#666" d="M23.394 23.394a.95.95 0 0 1-1.343 0l-3.52-3.519a6.352 6.352 0 0 1-3.792 1.255 6.391 6.391 0 1 1 6.391-6.39c0 1.421-.47 2.73-1.255 3.792l3.52 3.519a.95.95 0 0 1 0 1.343zM9.965 14.713a4.748 4.748 0 1 0 9.496 0 4.748 4.748 0 0 0-9.496 0z"></path></svg>
       </button>
      </form>
    )
  }

}


export default Search;
