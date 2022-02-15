import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {signInCreator} from "../../redux/reducers/userReducer";

const SignIn = () => {
    const dispatch = useDispatch()

    const {handleSubmit, register} = useForm()

    const login = data => {
        dispatch(signInCreator(data))
    }

    return (
        <form action="" onSubmit={handleSubmit(login)}>
            <label htmlFor="identifier">Login</label>
            <input type="text" id="identifier" {...register('identifier')}/>

            <label htmlFor="password">password</label>
            <input type="password" id="password" {...register('password')} />

            <button>submit</button>
        </form>
    )
}

export default SignIn