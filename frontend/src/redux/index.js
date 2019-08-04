import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import history from '../history';

import createRootReducer from './reducer';
import rootSaga from './saga';

import { ReducerRecord as UserRecord } from '../ducks/user';

const persistConfig = {
  transforms: [immutableTransform({ records: [UserRecord] })],
  key: 'root',
  whitelist: ['user'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware, routerMiddleware(history), logger);

const store = createStore(persistedReducer, enhancer);
sagaMiddleware.run(rootSaga);

window.store = store;

export const persistor = persistStore(store);
export default store;
