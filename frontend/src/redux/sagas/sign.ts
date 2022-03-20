import {AxiosError, AxiosResponse} from "axios";
import {setUserCreator} from "../reducers/sign";
import {signIn, signUp} from "../../lib/api/sign";
import {takeLeading, put} from "redux-saga/effects";
import errorHandler from "../../lib/utils/helpers/api";
import {removeCookie, setCookie, setShortCookie} from "../../lib/utils/cookies";
import {IUser, SignActionTypes, ISignUpAction, ISignInAction} from "../../types/sign";

/* sagas workers */

function* signInWorker({payload}:ISignInAction) {
    try {
        const {identifier, password, remember} = payload

        const result:AxiosResponse = yield signIn({identifier, password})

        if (remember)
            Object.keys(result.data).forEach( key => setCookie(key, result.data[key as keyof IUser]) )
        else
            Object.keys(result.data).forEach( key => setShortCookie(key, result.data[key as keyof IUser]) )

        yield put(setUserCreator(result.data))
    } catch (e) {
        const error = e as AxiosError
        errorHandler(error, {
            400: 'Такого пользователя не существует'
        })
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