import { combineReducers } from 'redux';
import { reducer as questions } from '../ducks/questions';

export default combineReducers({
  questions,
});
