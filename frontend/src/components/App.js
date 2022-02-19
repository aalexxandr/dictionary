import React from 'react';
import SignIn from "./SignIn/index";
import Profile from "./Profile/index";
import {useSelector} from "react-redux";

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
