import {all} from 'redux-saga/effects';
import {watchSignIn, watchSignUp} from "./sign";

export function* rootWatcher() {
    yield all([
        watchSignIn(),
        watchSignUp()
    ])
}