import {all, spawn} from 'redux-saga/effects';
import {watchSignIn, watchSignUp, watchSignOut} from "./sign";

export function* rootWatcher() {
    yield all([
        spawn(watchSignIn),
        spawn(watchSignOut),
        spawn(watchSignUp()),
    ])
}