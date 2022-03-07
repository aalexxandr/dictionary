import {rootWatcher} from "./sagas";
import {rootReducer} from "./reducers";
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from "redux";

const sagaMiddleware = createSagaMiddleware()
const reduxDevtools = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevtools())
)

sagaMiddleware.run(rootWatcher)

export default store