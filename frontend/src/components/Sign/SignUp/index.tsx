import {FC} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import styles from "../style.module.scss";
import {ISignUpPayload} from "../../../types/sign";
import LoadingButton from "@mui/lab/LoadingButton";
import {Controller, useForm} from "react-hook-form";
import CenterWrapper from "../../generic/CenterWrapper";
import {signUpCreator} from "../../../redux/reducers/sign";
import {useTypedSelector} from "../../../lib/hooks/useTypesSelector";
import {Button, Checkbox, FormControlLabel, Grid, TextField, Typography} from "@mui/material";

const SignUp:FC = () => {
    const dispatch = useDispatch()

    const signStore = useTypedSelector(store => store.sign)

    const {handleSubmit, register, control, formState: { errors }} = useForm()

    const signUp = (data: ISignUpPayload) => {
        dispatch(signUpCreator(data))
    }

    return (
        <CenterWrapper>
            <form onSubmit={handleSubmit(signUp)} className={styles.signForm}>
                <Grid container justifyContent="center">
                    <Typography variant="h4" gutterBottom className={styles.pageTitle}>
                        Регистрация
                    </Typography>
                </Grid>
                <TextField label="Логин" fullWidth className={styles.signInput} variant="standard"
                           error={!!errors.username} helperText={errors.username?.message}
                           inputProps={{ ...register('username', {
                               required: 'Введите логин'
                           }) }}
                />
                <TextField label="Почта" fullWidth className={styles.signInput} variant="standard"
                           error={!!errors.email} helperText={
                                errors.email && (errors.email.message || 'Введите корректную почту')
                            }
                           inputProps={{ ...register('email', {
                                required: 'Введите почту',
                                pattern: /\S+@\S+\.\S+/
                            }) }}
                />
                <TextField type="password" label="Пароль" fullWidth className={styles.signInput} variant="standard"
                           error={!!errors.password}
                           helperText={errors.password && (errors.password.message || 'Минимум 6 символов')}
                           inputProps={{ ...register('password', {required: 'Введите пароль', minLength: 6}) }}
                />
                <Controller
                    control={control}
                    name="remember"
                    defaultValue={true}
                    render={({ field: { onChange, value}}) => (
                        <FormControlLabel control={<Checkbox defaultChecked value={value} onChange={onChange} />}
                                          label="Запомнить меня"
                        />
                    )}
                />
                <LoadingButton type="submit" className={styles.signButton} variant="outlined" size="large" fullWidth
                               loading={signStore.loading}>
                    Зарегистрироваться
                </LoadingButton>
                <Link to="/">
                    <Button className={styles.signButton} variant="contained" size="large" fullWidth>Войти</Button>
                </Link>
            </form>
        </CenterWrapper>
    )
}

export default SignUp