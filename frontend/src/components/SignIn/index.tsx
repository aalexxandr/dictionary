import {FC} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {ISignInPayload} from "../../types/sign";
import CenterWrapper from "../generic/CenterWrapper";
import {signInCreator} from "../../redux/reducers/sign";

const SignIn:FC = () => {
    const dispatch = useDispatch()

    const {handleSubmit, register} = useForm()

    const login = (data: ISignInPayload) => {
        dispatch(signInCreator(data))
    }

    return (
        <CenterWrapper>
            <form action="" onSubmit={handleSubmit(login)}>
                <label htmlFor="identifier">Login</label>
                <input type="text" id="identifier" {...register('identifier')}/>

                <label htmlFor="password">password</label>
                <input type="password" id="password" {...register('password')} />

                <button>submit</button>
            </form>
        </CenterWrapper>
    )
}

export default SignIn