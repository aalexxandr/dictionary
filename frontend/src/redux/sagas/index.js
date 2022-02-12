import {all} from 'redux-saga/effects';
import {watchSignIn} from "./sign";

export function* rootWatcher() {
    yield all([
        watchSignIn(),
    ])
}