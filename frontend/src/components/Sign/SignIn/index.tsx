import {FC} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import styles from "../style.module.scss";
import {ISignInPayload} from "../../../types/sign";
import {useForm, Controller} from "react-hook-form";
import CenterWrapper from "../../generic/CenterWrapper";
import {signInCreator} from "../../../redux/reducers/sign";
import {Grid, Typography, Button, FormControlLabel, TextField, Checkbox} from "@mui/material";

const SignIn:FC = () => {
    const dispatch = useDispatch()

    const {handleSubmit, register, control, formState: { errors }} = useForm()

    const login = (data: ISignInPayload) => {
        dispatch(signInCreator(data))
    }

    return (
        <>
            <CenterWrapper>
                <form onSubmit={handleSubmit(login)} className={styles.signForm}>
                    <Grid container justifyContent="center">
                        <Typography variant="h4" gutterBottom className={styles.pageTitle}>
                            Авторизация
                        </Typography>
                    </Grid>
                    <TextField label="Логин или почта" fullWidth className={styles.signInput} variant="standard"
                               error={!!errors.identifier} helperText={errors.identifier?.message}
                               inputProps={{ ...register('identifier', {
                                       required: 'Введите логин или почту'
                                   }
                               ) }}
                    />
                    <TextField type="password" label="Пароль" fullWidth className={styles.signInput} variant="standard"
                               error={!!errors.password} helperText={errors.password?.message}
                               inputProps={{ ...register('password', {required: 'Введите пароль'}) }}
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
                    <Button type="submit" className={styles.signButton} variant="outlined" size="large" fullWidth>
                        Войти
                    </Button>
                    <Button className={styles.signButton} variant="contained" size="large" fullWidth>
                        <Link to="/register">Зарегистрироваться</Link>
                    </Button>
                </form>
            </CenterWrapper>
        </>
    )
}

export default SignIn