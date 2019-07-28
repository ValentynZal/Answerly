import {
  all,
  put,
  take,
  call,
} from 'redux-saga/effects';
import { createSelector } from 'reselect';
import { Record } from 'immutable';
import history from '../history';
import { serverURL } from '../constants';
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
  username: '',
  token: '',
  loading: false,
  loaded: true,
}, 'UserRecord');

export function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      console.log('register success');
      return state;
    case REGISTER_FAILURE:
      console.log('register failure');
      return state;
    case LOGIN_SUCCESS:
      return state.merge(payload);
    case LOGIN_FAILURE:
      console.log('login failure');
      return state;
    case LOGOUT:
      console.log(LOGOUT);
      return state.clear();
    default:
      return state;
  }
}

// Selectors

export const isAuthorizedSelector = createSelector(
  state => state.user.token,
  token => Boolean(token),
);

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

export function logout() {
  console.log(LOGOUT);
  return {
    type: LOGOUT,
  };
}

// Sagas

export function* registerSaga() {
  while (true) {
    const { payload: userData } = yield take(REGISTER_REQUEST);
    try {
      const response = yield call(fetch, `${serverURL}/accounts/register/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.status >= 400 && response.status < 600) {
        throw new Error('Bad response from server');
      }
      yield put({
        type: REGISTER_SUCCESS,
      });
      history.push('/login');
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
    const { payload: userData } = yield take(LOGIN_REQUEST);
    try {
      const response = yield call(fetch, `${serverURL}/accounts/token/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.status >= 400 && response.status < 600) {
        throw new Error('Bad response from server');
      }
      const res = yield response.json();
      yield put({
        type: LOGIN_SUCCESS,
        payload: {
          token: res.access,
          username: userData.username,
        },
      });
      history.push('/questions');
    } catch (error) {
      yield put({
        type: LOGIN_FAILURE,
        error,
      });
    }
  }
}

export function* logoutSaga() {
  while (true) {
    yield take(LOGOUT);
    yield put({ type: LOGOUT });
  }
}

export function* saga() {
  yield all([
    registerSaga(),
    loginSaga(),
    logoutSaga(),
  ]);
}
