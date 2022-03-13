import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import {IRoutes} from "../../types/AppRouter";
import Dictionary from "../../components/Dictionary";

export const routes: IRoutes = [
    {
        path : '/',
        Component : Dictionary,
        access: 'authorized'
    },
    {
        path : '/',
        Component : SignIn,
        access: 'unauthorized'
    },
    {
        path : '/register',
        Component : SignUp,
        access: 'unauthorized'
    },
]