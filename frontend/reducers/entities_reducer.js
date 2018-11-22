import { combineReducers } from 'redux';
import notesReducer from './notes_reducer'
import usersReducer from './users_reducer';
import notebooksReducer from './notebooks_reducer'
import resultsReducer from './results_reducer';
import tagsReducer from './tags_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  notes: notesReducer,
  notebooks: notebooksReducer,
  results: resultsReducer,
  tags: tagsReducer,
});

export default entitiesReducer;
