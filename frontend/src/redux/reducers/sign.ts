import {getCookie} from "../../lib/utils/cookies";
import {
    IUser,
    SignAction,
    ISignState,
    ISignUpAction,
    ISignInAction,
    ISetUserAction,
    ISignInPayload,
    ISignUpPayload,
    SignActionTypes,
    IToggleLoadingAction,
} from "../../types/sign";

const initialState: ISignState = {
    loading: false,
    user: {
        userId: Number(getCookie('userId')),
        userJwt: getCookie('userJwt'),
        userName: getCookie('userName'),
        userEmail: getCookie('userEmail'),
    }
}

export const sign = (state = initialState, action: SignAction): ISignState => {
    switch (action.type) {
        case SignActionTypes.TOGGLE_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case SignActionTypes.SET_USER: {
            const {userId, userJwt, userName, userEmail} = action.payload
            return {
                ...state,
                user: {
                    userId,
                    userJwt,
                    userName,
                    userEmail,
                },
            }
        }
        case SignActionTypes.SIGN_OUT: {
            return {
                ...state,
                user: {
                    userId: undefined,
                    userJwt: undefined,
                    userName: undefined,
                    userEmail: undefined,
                },
            }
        }
        default: {
            return state
        }
    }
}

export const signInCreator = (payload:ISignInPayload):ISignInAction =>
    ({type: SignActionTypes.SIGN_IN, payload})
export const signUpCreator = (payload:ISignUpPayload):ISignUpAction =>
    ({type: SignActionTypes.SIGN_UP, payload})
export const setUserCreator = (payload:IUser):ISetUserAction =>
    ({type: SignActionTypes.SET_USER, payload})
export const toggleLoadingCreator = (payload: boolean):IToggleLoadingAction =>
    ({type: SignActionTypes.TOGGLE_LOADING, payload})
