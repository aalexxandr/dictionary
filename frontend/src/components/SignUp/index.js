import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {signUpCreator} from "../../redux/reducers/signReducer";

const SignUp = () => {
    const dispatch = useDispatch()

    const {handleSubmit, register} = useForm()

    const signUp = data => {
        dispatch(signUpCreator(data))
    }

    return (
        <form action='' onSubmit={handleSubmit(signUp)}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' {...register('username')}/>

            <label htmlFor='email'>Email</label>
            <input type='text' id='email' {...register('email')}/>

            <label htmlFor='password'>password</label>
            <input type='password' id='password' {...register('password')} />

            <button>submit</button>
        </form>
    )
}

export default SignUp