import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import { Record } from 'immutable';

// Constants
const REGISTER_REQUEST = 'USERS_REGISTER_REQUEST';
const REGISTER_SUCCESS = 'USERS_REGISTER_SUCCESS';
const REGISTER_FAILURE = 'USERS_REGISTER_FAILURE';

const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST';
const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';
const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE';

const LOGOUT = 'USERS_LOGOUT';

// Reducer
export const ReducerRecord = Record({
  userName: '',
  token: '',
  loading: false,
  loaded: true,
});

export function reducer(state = new ReducerRecord(), action) {
  const { type } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      console.log('register success');
      return state;
    case REGISTER_FAILURE:
      console.log('register failure');
      return state;
    case LOGIN_SUCCESS:
      console.log('login success');
      return state;
    case LOGIN_FAILURE:
      console.log('login failure');
      return state;
    case LOGOUT:
      return state.clear();
    default:
      return state;
  }
}

// Selectors

// Action Creators

export function register(userData) {
  return {
    type: REGISTER_REQUEST,
    payload: userData,
  };
}

export function login(userData) {
  return {
    type: LOGIN_REQUEST,
    payload: userData,
  };
}

export function logout(userData) {
  return {
    type: LOGOUT,
  };
}

// Sagas

export function* registerSaga() {
  while (true) {
    yield takeLatest(REGISTER_REQUEST);
    try {
      yield call(fetch, '/register');
      yield put({
        type: REGISTER_SUCCESS,
      });
    } catch (error) {
      yield put({
        type: REGISTER_FAILURE,
        error,
      });
    }
  }
}

export function* loginSaga() {
  while (true) {
    yield takeLatest(LOGIN_REQUEST);
    try {
      yield call(fetch, '/login');
      yield put({
        type: LOGIN_SUCCESS,
      });
    } catch (error) {
      yield put({
        type: LOGIN_FAILURE,
        error,
      });
    }
  }
}

export function* saga() {
  yield all([
    registerSaga(),
    loginSaga(),
  ]);
}
