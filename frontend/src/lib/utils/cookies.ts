import cookie from "js-cookie";

export const setCookie = (key:string, value: string) => {
    cookie.set(key, value.toString(), {
        expires: 28,
        path: "/"
    })
}

export const setShortCookie = (key:string, value: string) => {
    cookie.set(key, value.toString(), {
        expires: 1/24,
        path: "/"
    })
}

export const removeCookie = (key:string) => {
    cookie.remove(key, {
        expires: -1
    })
}

export const getCookie = (key:string):string | null => cookie.get(key.toString()) || null