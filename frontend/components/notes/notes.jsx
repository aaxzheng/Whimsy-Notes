import React from 'react';
import { Link } from 'react-router-dom';
import SideBarContainer from './sidebar/sidebar_container';
import NotesIndex from './notes_index/notes_index';

const Notes = () => {
  return (
    <div className>
    <SideBarContainer />
    <div>
      <NotesIndex />
    </div>
  </div>
  );
};

export default Notes;
