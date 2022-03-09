export enum SignActionTypes {
    SIGN_IN = 'SIGN_IN',
    SIGN_UP = 'SIGN_UP',
    SIGN_OUT = 'SIGN_OUT',
    SET_USER = 'SET_USER',
}
export interface IUser {
    userId: string,
    userJwt: string,
    userName: string,
    userEmail: string,
}
export interface IUserState {
    userId: string | null,
    userJwt: string | null,
    userName: string | null,
    userEmail: string | null,
}
export interface ISignInPayload {
    password: string,
    identifier: string
}
export interface ISignUpPayload {
    email: string,
    username: string,
    password: string,
}
export interface ISignState {
    user: IUserState,
    loading: boolean
}
export interface ISignInAction {
    payload: ISignInPayload,
    type: SignActionTypes.SIGN_IN
}
export interface ISignUpAction {
    payload: ISignUpPayload,
    type: SignActionTypes.SIGN_UP
}
export interface ISetUserAction {
    payload: IUser,
    type: SignActionTypes.SET_USER
}
interface ISignOutAction {
    type: SignActionTypes.SIGN_OUT
}

export type SignAction = ISignInAction | ISetUserAction | ISignOutAction | ISignUpAction