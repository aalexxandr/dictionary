import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {signInCreator} from "../../redux/reducers/signReducer";

const Auth = () => {
    const dispatch = useDispatch()
    const {handleSubmit, register} = useForm()

    const login = data => {
        dispatch(signInCreator(data))
    }

    return (
        <form action="" onSubmit={handleSubmit(login)}>
            <label htmlFor="login">Login</label>
            <input type="text" id="login" {...register('login')}/>

            <label htmlFor="pass">password</label>
            <input type="password" id="pass" {...register('pass')} />

            <button>submit</button>
        </form>
    )
}

export default Auth