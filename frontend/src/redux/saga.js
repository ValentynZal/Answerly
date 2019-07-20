import { all } from 'redux-saga/effects';
import { saga as questionsSaga } from '../ducks/questions';

export default function* rootSaga() {
  yield all([
    questionsSaga(),
  ]);
}
