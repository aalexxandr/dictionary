import {IUser} from "../../../types/sign";
import {setCookie, setShortCookie} from "../cookies";

export const setUserCookie = (remember: boolean, data: IUser) => {
    if (remember)
        Object.keys(data).forEach( key => setCookie(key, data[key as keyof IUser]) )
    else
        Object.keys(data).forEach( key => setShortCookie(key, data[key as keyof IUser]) )
}