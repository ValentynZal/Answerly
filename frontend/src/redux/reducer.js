import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as questions } from '../ducks/questions';
import { reducer as user } from '../ducks/user';

export default history => combineReducers({
  router: connectRouter(history),
  questions,
  user,
});
