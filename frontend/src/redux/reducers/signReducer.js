import {getCookie} from "../../lib/utils/cookies";

const initialState = {
    userId: getCookie('userId') || null,
    userJwt: getCookie('userJwt') || null,
    userName: getCookie('userName') || null,
    userEmail: getCookie('userEmail') || null,
}

const SET_USER = 'SET_USER'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'

export const signReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            const {userId, userJwt, userName, userEmail} = action.payload
            return {
                ...state,
                userId,
                userJwt,
                userName,
                userEmail,
            }
        }
        default: {
            return state
        }
    }
}

export const signInCreator = (payload) => ({type: SIGN_IN, payload})
export const signUpCreator = (payload) => ({type: SIGN_UP, payload})
export const setUserCreator = (payload) => ({type: SET_USER, payload})
