import {rootWatcher} from "./sagas";
import {rootReducer} from "./reducers";
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from "redux";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__())
)

sagaMiddleware.run(rootWatcher)

export default store