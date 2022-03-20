import {IRoutes} from "../../types/AppRouter";
import SignIn from "../../components/Sign/SignIn";
import SignUp from "../../components/Sign/SignUp";
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