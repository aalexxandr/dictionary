import {request} from "./useApi";

export const signIn = async (login, password) => (
    await request('GET', '/public/auth', {login, password})
)