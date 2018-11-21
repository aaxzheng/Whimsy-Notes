import React from 'react';
import NotebookIndexItem from './notebook_index_item';
import {merge} from 'lodash';


class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({},this.props);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.notebooks !== this.props.notebooks) {
      this.setState(merge({},this.props));
    }
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  render() {
    const notebooks = this.state.notebooks || [];
    const index = notebooks.map((notebook,idx) => {
      return (
        <NotebookIndexItem key={idx} notebook={notebook} fetchNotebook={this.props.fetchNotebook} fetchArray={this.props.fetchArray} />
      )
    });
    return(
      <div className="notebook-index-div">
        <div className="notebook-index">
          <div className="nb-index-top">
            <div className="nb-index-top-word">Notebooks</div>
          </div>
            <header className="nb-header">
              <span className="nb-header-span">My notebook list</span>
              <div className="nb-sort">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill="#777777" d="M8 16.793l-2.146-2.147-.708.708L8.5 18.707l3.354-3.353-.708-.708L9 16.793V5H8v11.793zM12 5h9v1h-9V5zm0 3h7v1h-7V8zm0 3h5v1h-5v-1z"></path></svg>
              </div>
              <button className="new-nb-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="vert-align"><path fill="#00a82d" id="69a" d="M19 17v-2h2v2h2v2h-2v2h-2v-2h-2v-2h2zm-1-2.874a4.002 4.002 0 0 0-2.952 4.497H9V4h7c1.105 0 2 .873 2 1.95v8.176zM6 4h2v14.623H6V4zm9.5 4h-4c-.276 0-.5.15-.5.333v1.334c0 .184.224.333.5.333h4c.276 0 .5-.15.5-.333V8.333C16 8.15 15.776 8 15.5 8z"></path></svg>
                New Notebook
              </button>
            </header>
            <div className="nb-index-items">
              <hr className="nb-break"/>
              <div className="nb-table">
                <div className="nb-table-header">
                  <div className="nb-table-header-item">TITLE</div>
                  <div className="nb-table-header-action">ACTIONS</div>
                </div>
              {index}
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default NotebookIndex;
