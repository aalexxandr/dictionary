import {instance} from "./index";
import {ISignInPayload, ISignUpPayload, IUser} from "../../types/sign";

export const signIn = (data:ISignInPayload) => instance.post<IUser>('/sign/signIn', data)

export const signUp = (data:ISignUpPayload) => instance.post('/sign/signUp', data)
