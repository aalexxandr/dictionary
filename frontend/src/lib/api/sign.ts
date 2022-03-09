import {request} from "./useApi";
import {ISignInPayload} from "../../types/sign";

export const signIn = (data:ISignInPayload) => request('POST', '/sign/signIn', data)

export const signUp = (data:{}) => request('POST', '/sign/signUp', data)
