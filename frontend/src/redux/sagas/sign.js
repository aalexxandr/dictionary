import { signIn, signUp } from "../../lib/api/sign";
import { setCookie } from "../../lib/utils/cookies";
import { takeLeading, put } from "redux-saga/effects";
import { SIGN_IN, SIGN_UP, setUserCreator } from "../reducers/signReducer";

/* sagas workers */

function* signInWorker({payload}) {
    const {identifier, password} = payload
    try {
        const result = yield signIn(identifier, password)

        const data = {
            'userJwt': result.jwt,
            'userId': result.user.id,
            'userEmail': result.user.email,
            'userName': result.user.username,
        }

        Object.keys(data).forEach(key => {
            setCookie(key, data[key])
        })

        yield put(setUserCreator(data))
    } catch (error) {
        // TODO handle error
    }

}

function* signUpWorker({payload}) {
    try {
        const result = yield signUp(payload)

        const data = {
            'userJwt': result.jwt,
            'userId': result.user.id,
            'userEmail': result.user.email,
            'userName': result.user.username,
        }

        Object.keys(data).forEach(key => {
            setCookie(key, data[key])
        })

        yield put(setUserCreator(data))
    } catch (error) {
        // TODO handle error
    }

}

/* sagas watchers */

export function* watchSignIn() {
    yield takeLeading(SIGN_IN, signInWorker)
}

export function* watchSignUp() {
    yield takeLeading(SIGN_UP, signUpWorker)
}