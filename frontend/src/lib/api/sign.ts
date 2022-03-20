import {instance} from "./index";
import {ISignInApi, ISignUpPayload, IUser} from "../../types/sign";

export const signIn = (data:ISignInApi) => instance.post<IUser>('/sign/signIn', data)

export const signUp = (data:ISignUpPayload) => instance.post('/sign/signUp', data)
