import { all, take, put } from 'redux-saga/effects';
import { Record, OrderedMap } from 'immutable';

// Constants
const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';

// Reducer
export const ReducerRecord = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: true,
});

export function reducer(state = new ReducerRecord(), action) {
  const { type } = action;

  switch (type) {
    case FETCH_QUESTIONS_SUCCESS:
      return state;
    default:
      return state;
  }
}

// Selectors

// Action Creators

export function fetchQuestions() {
  return {
    type: FETCH_QUESTIONS_REQUEST,
  };
}

// Sagas

export function* fetchQuestionsSaga() {
  while (true) {
    yield take(FETCH_QUESTIONS_REQUEST);
    yield put({
      type: 'FETCH_QUESTIONS_SUCCESS',
    });
  }
}

export function* saga() {
  yield all([
    fetchQuestionsSaga(),
  ]);
}
