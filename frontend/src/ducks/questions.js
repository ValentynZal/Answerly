import { all, take, put } from 'redux-saga/effects';
import { Record, OrderedMap } from 'immutable';

// Constants
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

// Reducer
export const ReducerRecord = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: true,
});

export function reducer(state = new ReducerRecord(), action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}

// Selectors

// Action Creators

export function fetchQuestions() {
  return {
    type: FETCH_QUESTIONS,
  };
}

// Sagas

export function* fetchQuestionsSaga() {
  while (true) {
    yield take(FETCH_QUESTIONS);
    yield put({
      type: 'TEST',
    });
  }
}

export function* saga() {
  yield all([
    fetchQuestionsSaga(),
  ]);
}
