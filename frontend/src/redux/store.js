import {rootWatcher} from "./sagas";
import createSagaMiddleware from 'redux-saga';
import {signReducer} from "./reducers/signReducer";
import {createStore, applyMiddleware, combineReducers, compose} from "redux";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({sign: signReducer}),
    compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__())
)

sagaMiddleware.run(rootWatcher)

export default store