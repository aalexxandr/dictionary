import "antd/dist/antd.css";
import React, {FC} from 'react';
import SignIn from "./SignIn/index";
import Profile from "./Profile/index";
import {ToastContainer} from "react-toastify";
import {useTypedSelector} from "../lib/hooks/useTypesSelector";

const App:FC = () => {
    const signStore = useTypedSelector(store => store.sign)

    return <>
        {signStore.user?.userName
            ? <Profile userName={signStore.user?.userName} />
            : <SignIn />
        }
        <ToastContainer hideProgressBar />
    </>
}

export default App;
