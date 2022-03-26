import {instance} from "./index";
import {ISignInApi, ISignUpApi, IUser} from "../../types/sign";

export const signIn = (data:ISignInApi) => instance.post<IUser>('/sign/signIn', data)

export const signUp = (data:ISignUpApi) => instance.post('/sign/signUp', data)
