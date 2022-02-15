import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {registrationCreator} from "../../redux/reducers/userReducer";

const Registration = () => {
    const dispatch = useDispatch()

    const {handleSubmit, register} = useForm()

    const regUser = data => {
        console.log(data);
        dispatch(registrationCreator(data))
    }

    return (
        <form action='' onSubmit={handleSubmit(regUser)}>
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

export default Registration