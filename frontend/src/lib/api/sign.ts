import {instance} from "./index";
import {AxiosError} from 'axios';
import {errorHandler} from '../utils/helpers/api';
import {ISignInPayload, ISignUpPayload, IUser} from "../../types/sign";

export const signIn = async (data:ISignInPayload) => {
    try {
        return await instance.post<IUser>('/sign/signIn', data)

    } catch (e) {
        const error = e as AxiosError
        errorHandler(error, {
            400: 'Такого пользователя не существует'
        })
    }
}

export const signUp = (data:ISignUpPayload) => instance.post('/sign/signUp', data)
