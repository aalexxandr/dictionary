import {request} from "./useApi";

export const signIn = data => request('POST', '/auth/local', data)

export const signUp = data => request('POST', '/auth/local/register', data)
