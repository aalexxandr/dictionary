export enum SignActionTypes {
    SIGN_IN = 'SIGN_IN',
    SIGN_UP = 'SIGN_UP',
    SIGN_OUT = 'SIGN_OUT',
    SET_USER = 'SET_USER',
    TOGGLE_LOADING = 'TOGGLE_LOADING',
}
export interface IUser {
    userId: number,
    userJwt: string,
    userName: string,
    userEmail: string,
}
export interface IUserState {
    userId: number | undefined,
    userJwt: string | undefined,
    userName: string | undefined,
    userEmail: string | undefined,
}
export interface ISignInPayload {
    password: string,
    identifier: string,
    remember: boolean,
}
export interface ISignUpApi {
    username: string,
    email: string,
    password: string,
}
export interface ISignInApi {
    password: string,
    identifier: string,
}
export interface ISignUpPayload {
    email: string,
    username: string,
    password: string,
    remember: boolean,
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
export interface IToggleLoadingAction {
    payload: boolean
    type: SignActionTypes.TOGGLE_LOADING,
}

export type SignAction = ISignInAction | ISetUserAction | ISignOutAction | ISignUpAction | IToggleLoadingAction