import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewareList = [sagaMiddleware];

const str = createStore(reducers, applyMiddleware(...middlewareList));
sagaMiddleware.run(sagas);

export const store = str;
