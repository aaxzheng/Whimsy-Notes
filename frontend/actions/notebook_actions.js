import * as NotebookAPIUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";


export const receiveNotebook = ({notebook, note_ids}) => {
  return {
    type: RECEIVE_NOTEBOOK,
    notebook,
    noteIds: note_ids,
  };
};

export const receiveNotebooks = (notebooks) => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks,
  };
};

export const removeNotebook = (notebookId) => {
  return {
    type: REMOVE_NOTEBOOK,
    notebookId,
  };
};

export const fetchNotebook = (id) => dispatch => {
  return NotebookAPIUtil.fetchNotebook(id).then((resp)=> {
    dispatch(receiveNotebook(resp));
  });
};

export const fetchNotebooks = () => dispatch => {
  return NotebookAPIUtil.fetchNotebooks().then((resp)=> {
    dispatch(receiveNotebooks(resp));
  });
};

export const createNotebook = (notebook) => dispatch => {
  return NotebookAPIUtil.createNotebook(notebook).then((resp) => {
    dispatch(receiveNotebook(resp));
  });
};

export const updateNotebook = (notebook) => dispatch => {
  return NotebookAPIUtil.updateNotebook(notebook).then((resp) => {
    dispatch(receiveNotebook(resp));
  });
};

export const deleteNotebook = (id) => dispatch => {
  return NotebookAPIUtil.deleteNotebook(id).then((resp) => {
    dispatch(removeNotebook(id));
  });
};
