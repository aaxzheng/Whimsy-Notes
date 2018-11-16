import { combineReducers } from 'redux';
import notesReducer from './notes_reducer'
import usersReducer from './users_reducer';
import notebooksReducer from './notebooks_reducer'


const entitiesReducer = combineReducers({
  users: usersReducer,
  notes: notesReducer,
  notebooks: notebooksReducer,
});

export default entitiesReducer;
