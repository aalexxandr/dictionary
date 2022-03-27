import {AxiosError} from "axios";
import {toast} from "react-toastify";


const errorHandler = (error: AxiosError, errors: {}) => {
    const status = error.response?.status

    Object.keys(errors).forEach((error) => {
        if (status === parseInt(error))
            toast.error(errors[error as keyof {}])
        else
            toast('Упс... Что-то пошло не так')
    })
}

export default errorHandler