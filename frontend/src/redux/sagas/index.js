import {all} from 'redux-saga/effects';
import {watchSignIn, watchRegistration} from "./user";

export function* rootWatcher() {
    yield all([
        watchSignIn(),
        watchRegistration()
    ])
}