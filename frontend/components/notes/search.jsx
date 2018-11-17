import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: '', results: []};
  }

  getNotes () {
    this.props.notes.titles
  }

  handleInputChange = () => {
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
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }

}
