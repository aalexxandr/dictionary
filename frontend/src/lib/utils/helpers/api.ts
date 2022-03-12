import {AxiosError} from "axios";
import {message} from "antd";

export const errorHandler = (error: AxiosError, errors: {}) => {
    if (error.response) {
        const {status} = error.response

        Object.keys(errors).forEach((error) => {
            if (status === parseInt(error))
                message.error(errors[error as keyof {}])
        })
    } else {
        message.error('Упс... Что-то пошло не так')
    }
}