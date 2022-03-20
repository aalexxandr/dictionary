import {FC} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import styles from "../style.module.scss";
import TextField from "@mui/material/TextField";
import {ISignInPayload} from "../../../types/sign";
import {Grid, Typography, Button} from "@mui/material";
import CenterWrapper from "../../generic/CenterWrapper";
import {signInCreator} from "../../../redux/reducers/sign";

const SignIn:FC = () => {
    const dispatch = useDispatch()

    const {handleSubmit, register, formState: { errors }} = useForm()

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