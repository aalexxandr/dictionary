import {getCookie} from "../../lib/utils/cookies";
import {
    SignAction,
    SignActionTypes,
    ISignState,
    IUser,
    ISetUserAction,
    ISignInAction,
    ISignInPayload, 
    ISignUpAction,
    ISignUpPayload
} from "../../types/sign";

const initialState: ISignState = {
    loading: false,
    user: {
        userId: getCookie('userId'),
        userJwt: getCookie('userJwt'),
        userName: getCookie('userName'),
        userEmail: getCookie('userEmail'),
    }
}

export const sign = (state = initialState, action: SignAction): ISignState => {
    switch (action.type) {
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
                    userId: null,
                    userJwt: null,
                    userName: null,
                    userEmail: null,
                },
            }
        }
        default: {
            return state
        }
    }
}

export const signInCreator = (payload:ISignInPayload):ISignInAction => ({type: SignActionTypes.SIGN_IN, payload})
export const signUpCreator = (payload:ISignUpPayload):ISignUpAction => ({type: SignActionTypes.SIGN_UP, payload})
export const setUserCreator = (payload:IUser):ISetUserAction => ({type: SignActionTypes.SET_USER, payload})
