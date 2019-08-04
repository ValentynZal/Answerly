import { all, take, put } from 'redux-saga/effects';
import { Record, OrderedMap } from 'immutable';

// Constants
const FETCH_TAGS_REQUEST = 'FETCH_TAGS_REQUEST';
const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';

// Reducer
export const ReducerRecord = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: true,
});

export function reducer(state = new ReducerRecord(), action) {
  const { type } = action;

  switch (type) {
    case FETCH_TAGS_SUCCESS:
      return state;
    default:
      return state;
  }
}

// Selectors

// Action Creators

export function fetchTags() {
  return {
    type: FETCH_TAGS_REQUEST,
  };
}

// Sagas

export function* fetchTagsSaga() {
  while (true) {
    yield take(FETCH_TAGS_REQUEST);
    yield put({
      type: 'FETCH_TAGS_SUCCESS',
    });
  }
}

export function* saga() {
  yield all([fetchTagsSaga()]);
}
