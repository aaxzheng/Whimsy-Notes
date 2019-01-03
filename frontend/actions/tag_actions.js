import * as TagAPIUtil from '../util/tag_api_util';

export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const REMOVE_TAG = "REMOVE_TAG";
export const CLEAR_TAG = "CLEAR_TAG";
export const REMOVE_TAG_NOTE = "REMOVE_TAG_NOTE";


export const receiveTag = (tag) => {
  return {
    type: RECEIVE_TAG,
    tag,
  };
};

export const receiveTags = (tags) => {
  return {
    type: RECEIVE_TAGS,
    tags,
  };
};

export const removeTag = (tagId) => {
  return {
    type: REMOVE_TAG,
    tagId,
  };
};

export const clearTag = () => {
  return {
    type:CLEAR_TAG,
  };
};

export const removeTagNote = (id,noteId) => {
  return {
    type: REMOVE_TAG_NOTE,
    id,
    noteId,
  }
}

export const fetchTag = (id) => dispatch => {
  return TagAPIUtil.fetchTag(id).then((resp)=> {
    dispatch(receiveTag(resp));
  });
};

export const fetchTags = () => dispatch => {
  return TagAPIUtil.fetchTags().then((resp)=> {
    dispatch(receiveTags(resp));
  });
};

export const createTag = (tag) => dispatch => {
  return TagAPIUtil.createTag(tag).then((resp) => {
    dispatch(receiveTag(resp));
  });
};

export const updateTag = (tag) => dispatch => {
  return TagAPIUtil.updateTag(tag).then((resp) => {
    dispatch(receiveTag(resp));
  });
};

export const deleteTag = (id) => dispatch => {
  return TagAPIUtil.deleteTag(id).then((resp) => {
    dispatch(removeTag(id));
  });
};

export const fetchArray = (results,query) => dispatch => {
  return dispatch(receiveArray(results,query));
};

export const emptyTag = () => dispatch => {
  return dispatch(clearTag());
};

export const deleteTagNote = (id,noteId) => dispatch => {
  return TagAPIUtil.deleteTagNote(id,noteId).then((resp) => {
    dispatch(removeTagNote(resp));
  });
};
