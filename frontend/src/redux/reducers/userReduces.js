const initialState = {
    userJwtToken: null,
    userName: null
}

const AUTH = 'AUTH'

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH: {
            return {
                ...state
            }
        }
        default: {
            return state
        }
    }
}

export const authCreator = (payload) => ({type: AUTH, payload})