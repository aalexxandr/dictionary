import {AxiosError, AxiosResponse} from "axios";
import {signIn, signUp} from "../../lib/api/sign";
import {takeLeading, put} from "redux-saga/effects";
import {removeCookie} from "../../lib/utils/cookies";
import errorHandler from "../../lib/utils/helpers/api";
import {setUserCookie} from "../../lib/utils/helpers/sign";
import {setUserCreator, toggleLoadingCreator} from "../reducers/sign";
import {SignActionTypes, ISignUpAction, ISignInAction} from "../../types/sign";

/* sagas workers */

function* signInWorker({payload}:ISignInAction) {
    try {
        yield put(toggleLoadingCreator(true))

        const {identifier, password, remember} = payload
        const result:AxiosResponse = yield signIn({identifier, password})

        setUserCookie(remember, result.data)

        yield put(setUserCreator(result.data))
    } catch (e) {
        const error = e as AxiosError
        errorHandler(error, {
            400: 'Такого пользователя не существует'
        })
    } finally {
        yield put(toggleLoadingCreator(false))
    }
}

function* signUpWorker({payload}:ISignUpAction) {
    try {
        yield put(toggleLoadingCreator(true))

        const {username, email, password, remember} = payload
        const result:AxiosResponse = yield signUp({username, email, password})

        setUserCookie(remember, result.data)

        yield put(setUserCreator(result.data))
    } catch (e) {
        const error = e as AxiosError
        errorHandler(error, {
            400: 'Такой пользователь уже существует'
        })
    } finally {
        yield put(toggleLoadingCreator(false))
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