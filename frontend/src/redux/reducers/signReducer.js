const initialState = {
    userJwtToken: null,
    userName: null
}

const SIGN_IN = 'SIGN_IN'

export const signReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN: {
            return {
                ...state
            }
        }
        default: {
            return state
        }
    }
}

export const signInCreator = (payload) => ({type: SIGN_IN, payload})