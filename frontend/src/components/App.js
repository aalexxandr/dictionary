import React from 'react';
import SignIn from "./SignIn";
import Profile from "./Profile";
import {useSelector} from "react-redux";
import SignUp from './SignUp';

function App() {
    const signStore = useSelector(store => store.sign)

    return <>
        {signStore?.userName
            ? <Profile userName={signStore.userName} />
            : <SignIn />
        }
    </>
}

export default App;
