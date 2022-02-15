import {request} from "./useApi";

export const signIn = async (identifier, password) => (
    await request('POST', '/auth/local', {identifier, password})
)

export const reg = async data => (
    await request('POST', '/auth/local/register', data)
)