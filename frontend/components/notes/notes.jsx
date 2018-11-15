import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './sidebar';
import Info from './info';

const Notes = () => {
  return (
    <>
    <SideBar />
    <Index />
    <Editor />
    </>
  );
};

export default Notes;
