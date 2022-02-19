import {all, spawn} from 'redux-saga/effects';
import {watchSignIn, watchSignOut} from "./sign";

export function* rootWatcher() {
    yield all([
        spawn(watchSignIn),
        spawn(watchSignOut),
    ])
}