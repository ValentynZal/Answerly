import { all } from 'redux-saga/effects';

import { saga as questionsSaga } from '../ducks/questions';
import { saga as userSaga } from '../ducks/user';

export default function* rootSaga() {
  yield all([questionsSaga(), userSaga()]);
}
