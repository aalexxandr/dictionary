import "antd/dist/antd.css";
import React, {FC} from 'react';
import AppRouter from "./AppRouter";
import {useTypedSelector} from "../lib/hooks/useTypesSelector";

const App:FC = () => {
    const signStore = useTypedSelector(store => store.sign)

    return <>
        <AppRouter userId={signStore.user.userId} />
    </>
}

export default App;
