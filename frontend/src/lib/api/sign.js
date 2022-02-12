import {request} from "./useApi";

export const signIn = async (identifier, password) => (
    await request('POST', '/auth/local', {identifier, password})
)