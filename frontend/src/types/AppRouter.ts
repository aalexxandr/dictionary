import {FC} from "react";

export type RouterType = 'authorized' | 'unauthorized'

export type AppRouterProps = {
    userId: number | undefined
}

export interface IRoute {
    path: string,
    Component: FC,
    access: 'authorized' | 'unauthorized',
}

export interface IRoutes extends Array<IRoute>{}