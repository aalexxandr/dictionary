import "./style.scss";
import React, {FC} from 'react';
import AppRouter from "./AppRouter";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useTypedSelector} from "../lib/hooks/useTypesSelector";

const App:FC = () => {
    const signStore = useTypedSelector(store => store.sign)

    return <>
        <AppRouter userId={signStore.user.userId} />

        <ToastContainer
            position="top-right"
            autoClose={5000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </>
}

export default App;
