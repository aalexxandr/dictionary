import {FC} from "react";
import {routes} from "../lib/utils/routes";
import {Routes, Route, Navigate} from "react-router-dom";
import {AppRouterProps, RouterType} from "../types/AppRouter";

const AppRouter:FC<AppRouterProps> = ({userId}) => {

    const getRoutes = (type:RouterType) =>
        routes
            .filter(({access}) => access === type)
            .map( ({path, Component}) => <Route key={path} path={path} element={<Component />}/> )

    return (
        <Routes>
            { userId ? getRoutes('authorized') : getRoutes('unauthorized') }
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>

    )

}

export default AppRouter