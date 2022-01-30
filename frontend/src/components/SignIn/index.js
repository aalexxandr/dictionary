import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {signInCreator} from "../../redux/reducers/signReducer";

const SignIn = () => {
    const dispatch = useDispatch()
    const signStore = useSelector(store => store.sign)

    const {handleSubmit, register} = useForm()

    const login = data => {
        dispatch(signInCreator(data))
    }
    console.log(signStore)
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