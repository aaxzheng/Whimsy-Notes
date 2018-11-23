import * as NoteAPIUtil from '../util/notes_api_util';

export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_ARRAY = "RECEIVE_ARRAY";


export const receiveArray = (obj,array,query) => {
  return {
    type: RECEIVE_ARRAY,
    obj,
    array,
    query,
  }
}

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

export const removeNote = (note,noteId) => {
  return {
    type: REMOVE_NOTE,
    noteId,
    note,
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

export const createNote = (notebookId,note) => dispatch => {
  return NoteAPIUtil.createNote(notebookId,note).then((resp) => {
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
    dispatch(removeNote(resp,id));
  });
};

export const fetchArray = (obj,results,query) => dispatch => {
  return dispatch(receiveArray(obj,results,query));
}
