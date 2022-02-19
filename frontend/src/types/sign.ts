export enum SignActionTypes {
    SET_USER = 'SET_USER',
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT'
}
export interface IUser {
    userId: number | null,
    userJwt: string | null,
    userName: string | null,
    userEmail: string | null,
}
export interface ISignInPayload {
    identifier: string,
    password: string
}
export interface ISignState {
    loading: boolean,
    user: IUser
}
export interface ISignInAction {
    type: SignActionTypes.SIGN_IN,
    payload: ISignInPayload
}
export interface ISetUserAction {
    type: SignActionTypes.SET_USER,
    payload: IUser
}
interface ISignOutAction {
    type: SignActionTypes.SIGN_OUT,
}

export type SignAction = ISignInAction | ISetUserAction | ISignOutAction