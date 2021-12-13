import {rootWatcher} from "./sagas";
import createSagaMiddleware from 'redux-saga';
import {userReducer} from "./reducers/userReduces";
import {createStore, applyMiddleware, combineReducers, compose} from "redux";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({user: userReducer}),
    compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__())
)

sagaMiddleware.run(rootWatcher)

export default store