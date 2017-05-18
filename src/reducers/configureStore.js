import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import authReducer from './auth';

const loggerMiddleware = createLogger();
const routerHistoryMiddleware = history => routerMiddleware(history);

const reducers = combineReducers({
  routing: routerReducer,
  auth: authReducer
});

const configureStore = (history) =>
  createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerHistoryMiddleware(history)
    )
  );

export default configureStore;
