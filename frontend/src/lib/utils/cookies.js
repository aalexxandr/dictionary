import cookie from "js-cookie";

export const setCookie = (key, value) => {
    cookie.set(key, value, {
        expires: 28,
        path: "/"
    });
};

export const removeCookie = key => {
    cookie.remove(key, {
        expires: -1
    });
};

export const getCookie = (key) => cookie.get(key) || null;