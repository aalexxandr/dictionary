import {setUserCreator} from "../reducers/sign";
import {signIn, signUp} from "../../lib/api/sign";
import {takeLeading, put} from "redux-saga/effects";
import {removeCookie, setCookie} from "../../lib/utils/cookies";
import {IUser, SignActionTypes, ISignUpAction, ISignInAction} from "../../types/sign";

/* sagas workers */

function* signInWorker({payload}:ISignInAction) {
    try {
        const {identifier, password} = payload

        const result: IUser = yield signIn({identifier, password})

        Object.keys(result).forEach( key => setCookie(key, result[key as keyof IUser]) )

        yield put(setUserCreator(result))
    } catch (error) {
        // TODO handle error
    }
}

function* signUpWorker({payload}:ISignUpAction) {
    try {
        const {username, email, password} = payload

        const result: IUser = yield signUp({username, email, password})

        yield Object.keys(result).map( key => setCookie(key, result[key as keyof IUser]) )

        yield put(setUserCreator(result))
    } catch (error) {
        // TODO handle error
    }
}

function* signOutWorker() {
    const data = ['userJwt', 'userId', 'userEmail', 'userName']

    yield Object.keys(data).map( key => removeCookie(key) )
}

/* sagas watchers */

export function* watchSignIn() {
    yield takeLeading(SignActionTypes.SIGN_IN, signInWorker)
}
export function* watchSignOut() {
    yield takeLeading(SignActionTypes.SIGN_OUT, signOutWorker)
}
export function* watchSignUp() {
    yield takeLeading(SignActionTypes.SIGN_UP, signUpWorker)
}