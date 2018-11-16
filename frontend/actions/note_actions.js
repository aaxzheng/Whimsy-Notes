import * as NoteAPIUtil from '../util/notes_api_util';

export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const REMOVE_NOTE = "REMOVE_NOTE";


export const receiveNote = (note) => {
  return {
    type: RECEIVE_NOTE,
    note,
  };
};

export const receiveNotes = (notes) => {
  return {
    type: RECEIVE_NOTES,
    notes,
  };
};

export const removeNote = (noteId) => {
  return {
    type: REMOVE_NOTE,
    noteId,
  };
};

export const fetchNote = (id) => dispatch => {
  return NoteAPIUtil.fetchNote(id).then((resp)=> {
    dispatch(receiveNote(resp));
  });
};

export const fetchNotes = () => dispatch => {
  return NoteAPIUtil.fetchNotes().then((resp)=> {
    dispatch(receiveNotes(resp));
  });
};

export const createNote = (notebook,note) => dispatch => {
  return NoteAPIUtil.createNote(notebook,note).then((resp) => {
    dispatch(receiveNote(resp));
  });
};

export const updateNote = (note) => dispatch => {
  return NoteAPIUtil.updateNote(note).then((resp) => {
    dispatch(receiveNote(resp));
  });
};

export const deleteNote = (id) => dispatch => {
  return NoteAPIUtil.deleteNote(id).then((resp) => {
    dispatch(removeNote(id));
  });
};
